import React ,{useRef, useState} from 'react'
import './Video.css'
import ReactPlayer from 'react-player'
import VideoFooter from './VideoFooter';
import { Player } from 'video-react';
import VideoSidebar from './VideoSidebar';
function Video(
  {
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
  }
) {
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
        url={url}
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
        channel={channel}
        description={description}
        song={song}
              />
       
    <VideoSidebar
        likes={likes}
        shares={shares}
        messages={messages}

    />
    </div>
  )
}

export default Video
