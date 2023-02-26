import React ,{useRef, useState} from 'react'
import './Video.css'
import ReactPlayer from 'react-player'
function Video() {
    const [playing, setPlaying] = React.useState(false);
    const videoref = React.useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoref.current.pause();
        } else {
            videoref.current.play();
        }
        setPlaying(!playing);
    };
  return (
    <div className='video'>
     <ReactPlayer
        className='video__player'
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
        height='100%'
        loop
        // controls
        // controls={false}
        onClick={onVideoPress}
        ref = {videoref}
        />
     {/* videofooter */}
        {/* video sidebar */}

    </div>
  )
}

export default Video
