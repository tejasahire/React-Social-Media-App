import React from 'react'
import ConvertDateTime from './ConvertDateTime'


const ShowComments = ({comment}) => {
  return (
    <>
    <div className="container my-5 comment_con" >
    <div className="comment_user">
        <img src={comment.photoUrl} alt="" />
        <h3>{comment.author}</h3>
    </div>
    <ConvertDateTime seconds={comment.time.seconds} nanoseconds={comment.time.nanoseconds} />
    <h5>{comment.message}</h5>
    </div>
    </>
  )
}

export default ShowComments