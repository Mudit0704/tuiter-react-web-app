const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item border-0 border-bottom wd-test">
    <div class="row">
      <div class="col-xl-9 col-sm-9">
        ${post.topic === '' ? '' : `<div
      class="wd-post-topic">${post.topic}</div>`}
        <div class="fw-bold">${post.userName}<i class="fas fa-check-circle"></i> - ${post.time}</div>
        <div class="fw-bold text-wrap">${post.title}</div>
      </div>
      <div class="col-xl-3 col-sm-3 wd-post-summary-img"><img src=${post.image} class="wd-post-img"></div>
    </div>
  </li>
  `);
}

export default PostSummaryItem;