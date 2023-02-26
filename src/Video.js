import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player'
function Video() {
  return (
    <div className='video'>
     <ReactPlayer
        className='video__player'
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
        height='100%'
        />
     {/* videofooter */}
        {/* video sidebar */}

    </div>
  )
}

export default Video
