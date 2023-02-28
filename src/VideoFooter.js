import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
// import AlbumIcon from '@material-ui/icons-material/Album';
// import Ticker from 'react-ticker'
function VideoFooter({channel, description, song}) {

  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
        <MusicNoteIcon />
        {/* <Ticker mode='smooth'> 
        
        </Ticker> */}
        <p>{song}</p>
        </div>
      </div>
      <img className='videoFooterImg' src="https://thenounproject.com/api/private/icons/2052802/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj_DYR_06tOHYMs2SF_Z_EWgPG2ydZk_ko5u9a7yfxtyyIDHK-8ep5l2sE5m5CJChyQGw7RRF_9vIm0co-ycv5nbq-sg%3D%3D" alt="" />
      {/* <AlbumIcon fontSize ="large" /> */}
    </div>
  )
}

export default VideoFooter
