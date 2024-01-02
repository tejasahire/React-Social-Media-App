import React, { useEffect, useState } from 'react'
import {onSnapshot,collection,query,orderBy} from 'firebase/firestore'
import { db } from '../firebase.config'

import ConvertDateTime from './ConvertDateTime'
import Loder from './Loder'

const All_Users = () => {

  const [users, setUsers] = useState([])
  const [loding, setLoding] = useState(true)

  useEffect(()=>{
    const userQuery = query(collection(db,"users"),orderBy('timestamp','desc')) 
  
    const fetchData = async ()=>{                          // <----------- firebase data fetch
      await onSnapshot(userQuery,(snapshot)=>{
       setUsers(snapshot.docs.map((doc)=>({                 // <--  3 line code fetch data from server
        ...doc.data(),id:doc.id
       })))
       setLoding(false)
      })
    };  
  
    fetchData()
    console.log(users)
  
  },[])
  
  


  return (
    <>
    <div className="container">
      {loding ? <Loder/> : (
        <>
          {
      users.map((user)=>{
        return<>
        <div className="container text-center my-3 all_user_con">

        <div key={user.id} className="all_users">
          <img src={user.photoUrl} alt="" />
          <h3>{user.name}</h3>
          <h6>{user.email}</h6>
        </div>
        <h5 className='my-2'><ConvertDateTime text='Ragister Time :' seconds={user.timestamp.seconds} nanoseconds={user.timestamp.nanoseconds}/> </h5>
        </div>
        </>
      })
     }   
        </>
      )}
     
    </div>
    </>
  )
}

export default All_Users