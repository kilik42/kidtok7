import React,{useState} from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
function VideoSidebar({likes, shares, messages}) {
    const [liked, setLiked] = React.useState(false);
    const [likedCount, setLikedCount] = React.useState(0);
    const [commentCount, setCommentCount] = React.useState(0);
    const [shareCount, setShareCount] = React.useState(0);
    const onLike = () => {
        if (liked) {
            setLikedCount(likedCount - 1);
        } else {
            setLikedCount(likedCount + 1);
        }   
        setLiked(!liked);
    };

  return (
    <div className='videoSidebar'>
      <div className="videoSidebar__button">
        {liked ? (
            <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />
        ) : (
            <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
        )
        }
        
        <p>{liked  ? likes + 1: likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large"/>
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>

    </div>
  )
}

export default VideoSidebar
