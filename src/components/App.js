import React, {useState} from 'react'
import video  from "../data/video.js";
import Video from './Video'
import VideoInfo from './VideoInfo'
import Comments from './Comments.js';

function App() {
 const [likeData, setLikeData] = useState({
    upvotes: 9210,
    downvotes: 185,
  })
const [showComments, setComments] = useState(false)

function onCommentClick(){
  setComments((showComments) => !showComments)
}

  return (
    <div className="App">
      <Video video={video}/>
      <VideoInfo video={video} likeData={likeData} setLikeData={setLikeData}/>
      <Comments comments={video.comments} showComments={showComments} onCommentClick={onCommentClick}/>
    </div>
  );
}

export default App;
