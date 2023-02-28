import React,{useState} from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
function VideoSidebar() {
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
            <FavoriteIcon onClick={onLike} />
        ) : (
            <FavoriteBorderIcon onClick={onLike} />
        )
        }
        
        <p>300</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon/>
        <p>230</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>10</p>
      </div>

    </div>
  )
}

export default VideoSidebar
