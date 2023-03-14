import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faUpload,
    faHeart as solidHeart
} from "@fortawesome/free-solid-svg-icons";
import {faComment, faHeart} from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from "react-redux";
import {increaseLikeCount} from "./tuits-reducer";

const TuitStats = ({
  post = {
    "liked" : "true",
    "replies": "4.2K",
    "retuits": "3.5K",
    "likes": "37.5K"
  }
}) => {
  const dispatch = useDispatch();
  const likeHandler = (todo) => {
    dispatch(increaseLikeCount(todo))
  }
  return (
      <>
        <div className="row ms-5 mt-3">
    <span className="col-3">
     <button className="wd-post-buttons"><FontAwesomeIcon icon={faComment}/>
     <span className="ms-2">{post.replies}</span></button>
     </span>
          <span className="col-3">
     <button className="wd-post-buttons"><FontAwesomeIcon icon={faRetweet}/>
     <span className="ms-2">{post.retuits}</span></button>
     </span>
          <span className="col-3">
     <button onClick={() => likeHandler(post)}
         className={post.liked ? "wd-post-buttons-heart" : "wd-post-buttons"}>
       <FontAwesomeIcon icon={post.liked ? solidHeart : faHeart}/>
     <span className="ms-2">{post.likes}</span></button>
     </span>
          <span className="col-3">
     <button className="wd-post-buttons" ><FontAwesomeIcon icon={faUpload}/></button>
    </span>
        </div>
      </>
  );
}
export default TuitStats;