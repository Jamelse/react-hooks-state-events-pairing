import React from 'react'

function Comments({comments, onCommentClick, showComments}){
  
  const displayComments = comments.map((comment) => {
    if (showComments === false){
      return ''
    } else {
      return (
        <>
        <h3 key={comment.id}>{comment.user}</h3>
        <p>{comment.comment}</p>
      </>)
    }
  })
  
  return (
    <div>
      <button onClick={onCommentClick}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
      <h2 >{showComments ? `${comments.length} Comments` : ''}</h2>
      {displayComments}
    </div>
  )
}

export default Comments