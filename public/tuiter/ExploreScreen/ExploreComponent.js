import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
    <div class="row">
    <div class="col-11">
      <div class="wd-search-twitter input-group mb-3 rounded-pill">
        <div class="input-group-text bg-transparent border-0" id="basic-addon1"><i
            class="fa fa-search"></i></div>
        <input type="text" class="form-control border-0 bg-transparent shadow-none" placeholder="Search Twitter"
               aria-label="Search Twitter" aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="col-1">
      <i class="fa fa-cog fa-2x mt-1 text-primary"></i>
    </div>
  </div>
    <ul class="nav nav-tabs mb-2">
      <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For You</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
      </li>
    </ul>
    <div class="card wd-post-summary-top-img mb-2">
      <img src="../../images/starship.jpg" class="card-img-top" alt="...">
      <div class="card-img-overlay">
        <h1 class="card-title text-white wd-overlay-text">SpaceX's Starship</h1>
      </div>
      ${PostSummaryList()}
      </div>
  `);
}

export default ExploreComponent;