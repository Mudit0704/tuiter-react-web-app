const WhoToFollowListItem = (who) => {
  return(`
     <li class="list-group-item">
     <div class="row align-items-center">
        <div class="col-2"><img src= ${who.avatarIcon} class="rounded-2 wd-follow-img"></div>
        <div class="col-7"><span class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></span><br/>@${who.handle}</div>
        <div class="col-3 p-0"><button type="button" class="btn btn-primary rounded-pill">Follow</button></div>
      </div>
    </li>
 `);
}
export default WhoToFollowListItem;