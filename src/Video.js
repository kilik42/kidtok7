import React ,{useRef, useState} from 'react'
import './Video.css'
import ReactPlayer from 'react-player'
import VideoFooter from './VideoFooter';
import { Player } from 'video-react';
import VideoSidebar from './VideoSidebar';
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
        url='https://youtu.be/YSU406hCAYo'
        width='100%'
        height='100%'
        loop
        // controls
        // controls={false}
        onClick={onVideoPress}
        ref = {videoref}
        />
        {/* <Player ref={(player) => { this.player = player }}>
  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
</Player> */}
     {/* videofooter */}
     <VideoFooter 
        channel ="rafequzi"
        description="This is a test description"
          song="This is a test song"
              />
       
    <VideoSidebar
    
    />
    </div>
  )
}

export default Video
