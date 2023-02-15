const PostItem = (post) => {
  return(`
     <li class="list-group-item border-0 bg-transparent">
     <div class="row align-items-center">
        <div class="col-1"><img src= ${post.avatarIcon} class="rounded-5 wd-avatar-icon" alt="..."></div>
        <div class="col-8"><span class="fw-bold ps-1">${post.userName} <i class="fas fa-check-circle"></i></span><span class="wd-post-details"> @${post.handle} - ${post.time}</span></div>
        <div class="col-3 p-0"><button type="button" class="btn float-end"><i class="fas fa-ellipsis-h"></i></button></div>
      </div>
      <span class="ps-5 text-wrap">${post.title}</span>
      <div class="card ms-5 mt-2 rounded-4 bg-transparent">
      <img src=${post.image} class="card-img-top rounded-4" alt="...">
      ${post.imageTitle === '' && post.imageContent === '' ? '' : `<div class="card-body">\n        <h6 class="card-title">${post.imageTitle}</h6>\n        <p class="card-text wd-post-content">${post.imageContent}</p>\n      </div>`}
      
    </div>
    <div class="row ms-5 mt-2">
    <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="far fa-comment"></i>
     <span>22</span></a>
     </span>
     <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="fas fa-retweet"></i>
     <span>22</span></a>
     </span>
     <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="far fa-heart"></i>
     <span>22</span></a>
     </span>
     <span class="col-3">
     <a class="wd-post-buttons" href="#"><i class="fas fa-upload"></i></a>
    </span>
    </span>
    </li>
 `);
}
export default PostItem;