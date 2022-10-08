import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfilesideDrawer } from "../../redux/reducers/users";
import { handleEditsideDrawer } from "../../redux/reducers/users";

const SlideDrawer = () => {
  const isDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isDrawerOPen
  );
  const dispatch = useDispatch()
  const handleCloseDrawer = () => {
    dispatch(handleProfilesideDrawer(false))
  }

  const handleOpenEdit = () => {
    console.log("yaayy handle open edit is working");
    dispatch(handleEditsideDrawer(true))
  }

  console.log("side drawer on--------",isDrawerOPen);
  let drawerClasses = isDrawerOPen ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <div><img className="drawer-background" src="images/background.svg" alt="profile-background" />
      <div className="sidedrawer-heading">Profile</div> 
      <div className="sample" onClick={handleCloseDrawer}><img className="sample-pro-img" src="images/close-line.svg" alt="cross-image" />
      </div>
      <div><img src="images/profile@3x.png" alt="profile-pic" /></div>
      <div><button onClick={handleOpenEdit}>Edit Profile</button></div>
      <div><button>Reset password</button></div>
      </div>
    </div>
  );
};

export default SlideDrawer;
