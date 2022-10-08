import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfilesideDrawer } from "../../../src/redux/reducers/users";
import { handleEditsideDrawer } from "../../../src/redux/reducers/users";

const EditSlideDrawer = () => {
  const isEditDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isEditDrawerOPen
  );
  const dispatch=useDispatch()
  const closeEditDrawer = () => {
    dispatch(handleEditsideDrawer(false))
  }

  let drawerClasses = isEditDrawerOPen ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <div><img className="drawer-background" src="images/background.svg" alt="profile-background" />
      <div className="sidedrawer-heading">Profile</div> 
      <div className="sample" onClick={closeEditDrawer}><img className="sample-pro-img" src="images/close-line.svg" alt="cross-image" /></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
        laboriosam omnis 
        obcaecati ut fugit quibusdam provident ex, quas iste voluptates 
        doloremque perferendis fuga molestias illum natus tempora quae
         aperiam excepturi.</p>
      </div>
    </div>
  );
};

export default EditSlideDrawer;
