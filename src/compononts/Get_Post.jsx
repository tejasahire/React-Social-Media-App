import React, { useEffect, useState } from 'react'
import {onSnapshot,collection,query,orderBy} from 'firebase/firestore'
import { db } from '../firebase.config'
import Post from './Post'

const Get_Post = () => {
const [posts, setposts] = useState([])

useEffect(()=>{
  const postQuery = query(collection(db,"post"),orderBy('time','desc')) 

  const fetchData = async ()=>{                          // <----------- firebase data fetch
    await onSnapshot(postQuery,(snapshot)=>{
     setposts(snapshot.docs.map((doc)=>({                 // <--  3 line code fetch data from server
      ...doc.data(),id:doc.id
     })))
    })
  }

  fetchData()
  console.log(posts)

},[])

  return (
    <>
    {
      posts.map((data)=><Post key={data.id} data={data}/>)
    }
    </>
  )
}

export default Get_Post