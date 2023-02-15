const PostItem = (post) => {
  return(`
     <li class="list-group-item border-0 bg-transparent">
     <div class="row align-top">
        <div class="col-1"><img src= ${post.avatarIcon} class="rounded-5 wd-avatar-icon" alt="..."></div>
        <div class="col-8"><span class="fw-bold ps-1">${post.userName} <i class="fas fa-check-circle"></i></span><span class="wd-post-details"> @${post.handle} - ${post.time}</span>
        <span class="ms-1 text-wrap d-sm-inline-block">${post.title}</span>
        </div>
        <div class="col-3 p-0"><button type="button" class="btn float-end"><i class="fas fa-ellipsis-h"></i></button></div>
        
      </div>
      
      <div class="card ms-5 mt-2 rounded-4 bg-transparent wd-post-card">
      <img src=${post.image} class="card-img-top rounded-4" alt="...">
      ${post.imageTitle === '' && post.imageContent === '' ? '' : 
      `<div class="card-body">
        <h6 class="card-title">${post.imageTitle}</h6>
        <p class="card-text wd-post-content">${post.imageContent}</p>
       </div>`
      }
    </div>
    <div class="row ms-5 mt-3">
    <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="far fa-comment"></i>
     <span>${post.commentCount}</span></a>
     </span>
     <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="fas fa-retweet"></i>
     <span>${post.retweetCount}</span></a>
     </span>
     <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="far fa-heart"></i>
     <span>${post.likeCount}</span></a>
     </span>
     <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="fas fa-upload"></i></a>
    </span>
    </span>
    </li>
    <hr/>
 `);
}
export default PostItem;