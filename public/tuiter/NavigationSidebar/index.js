const NavigationSidebar = (active) => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
        <li class="list-group-item ${active === 'home' ? 'active' : ''}">
          <i class="fas fa-home pe-2"></i><a href="../HomeScreen/index.html" class="wd-navs d-none d-xl-inline-block text-white">Home</a>
        </li>
        <li class="list-group-item ${active === 'explore' ? 'active' : ''}">
          <i class="fas fa-hashtag pe-2"></i><a href="../ExploreScreen/index.html" class="wd-navs d-none d-xl-inline-block text-white">Explore</a>
        </li>
        <li class="list-group-item ${active === 'notifications' ? 'active' : ''}">
          <i class="fas fa-bell pe-2"></i><a href="#" class="wd-navs d-none d-xl-inline-block text-white">Notifications</a>
        </li>
        <li class="list-group-item ${active === 'messages' ? 'active' : ''}">
          <i class="fas fa-envelope pe-2"></i><a href="#" class="wd-navs d-none d-xl-inline-block text-white">Messages</a>
        </li>
        <li class="list-group-item ${active === 'bookmarks' ? 'active' : ''}">
          <i class="fas fa-bookmark pe-2"></i>
          <a href="#" class="wd-navs d-none d-xl-inline-block text-white">Bookmarks</a>
        </li>
        <li class="list-group-item ${active === 'lists' ? 'active' : ''}">
          <i class="fas fa-list pe-2"></i><a href="#" class="wd-navs d-none d-xl-inline-block text-white">Lists</a>
        </li>
        <li class="list-group-item ${active === 'profile' ? 'active' : ''}">
          <i class="fas fa-user pe-2"></i><a href="#" class="wd-navs d-none d-xl-inline-block text-white">Profile</a>
        </li>
        <li class="list-group-item ${active === 'more' ? 'active' : ''}">
          <span class="fa-stack pe-2">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-ellipsis-h fa-stack-1x" ></i>
          </span>
          <a href="#" class="wd-navs d-none d-xl-inline-block text-white">More</a>
        </li>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;