import React from 'react'

function VideoInfo({video, likeData, setLikeData}){
  
  function likeAndDislikeClick(e){
    const key = e.target.name
    setLikeData({
      ...likeData,
      [key]: parseInt(e.target.value) + 1
    })
  }

  return (
  <>
  <h1>{video.title}</h1>
  <p>{`${video.views} Views  |  Uploaded ${video.createdAt}`}</p>
  <button name='upvotes' value={likeData.upvotes} onClick={likeAndDislikeClick}>{`${likeData.upvotes} 👍`}</button>
  <button name='downvotes' value= {likeData.downvotes} onClick={likeAndDislikeClick}>{`${likeData.downvotes} 👎`}</button>
  </>
  )}

export default VideoInfo