import React, { useEffect, useState } from 'react'
import {collection,addDoc,query,onSnapshot,orderBy} from 'firebase/firestore'
import { db } from '../firebase.config'
import { getAuth } from 'firebase/auth'
import ShowComments from './ShowComments'


const Comments = ({ postId }) => {
const auth=getAuth()

const [comments, setComments] = useState([])
const [newComment, setNewComment] = useState("")

useEffect(()=>{
    const commentQuery = query(collection(db,"comments"),orderBy('time','desc')) 
  
    const fetchData = async ()=>{                          // <----------- firebase data (comments) fetch
      await onSnapshot(commentQuery,(snapshot)=>{
       setComments(snapshot.docs.map((doc)=>({                 // <--  3 line code fetch data from server
        ...doc.data(),id:doc.id
       })))
      })
    };
  
    fetchData()
    console.log('fetch comment',comments)
  
  },[])
  

const handleAddComment = async(e)=>{
    e.preventDefault()
    if(auth.currentUser && newComment != ' '){
        await addDoc(collection(db,'comments'),{               //databse of comments
            postId,
            message:newComment,
            author:auth.currentUser.displayName,
            userId:auth.currentUser.uid,
            photoUrl:auth.currentUser.photoURL,
            time:new Date()
        })
        setNewComment('')
        alert('comment added')
    }else{
        alert('login first')
    }
   
}

const filteredComment = comments.filter((comment)=>comment.postId == postId)


  return (
    <>
    <div className="container my-5">
<form onSubmit={handleAddComment}>
  <div className="mb-3 comment text-center">
    
    <input
    value={newComment}
    onChange={(e)=>setNewComment(e.target.value)}
     type="text" 
    className="form-control mx-3"
     id="exampleInputEmail1"
      aria-describedby="emailHelp" placeholder='Add a comment....' required/>
     <button type="submit" className="btn btn-primary">Add Comments</button>
  </div>
</form>
<h3>Total Comments : {filteredComment.length}</h3>
{
    filteredComment.map((comment)=>(<ShowComments key={comment.userId} comment={comment}/>))
};
    </div>
    </>
  )
}

export default Comments