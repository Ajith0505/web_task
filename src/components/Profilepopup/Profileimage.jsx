import React from "react";
import Profilemodal from "./Profilemodal";
import { useSelector } from "react-redux";
import SlideDrawer from "../Profileslidedrawer/Slidedrawer";
import Backdrop from "../Profileslidedrawer/Backdrop";
import EditSlideDrawer from "../Edit Profile/Editpsidedrawer";
import Backdropedit from "../Edit Profile/Backdrop";

function Profileimage (props) {
  const isIconClicked = useSelector(
    (state) => state.reducers.userprofile.isIconClicked
);
const isDrawerOPen = useSelector(
  (state) => state.reducers.userprofile.isDrawerOPen
);

const isEditDrawerOPen = useSelector(
  (state) => state.reducers.userprofile.isEditDrawerOPen
);


  return (
    <>
    
    {isIconClicked && (<Profilemodal />)}

    {isDrawerOPen && <SlideDrawer  />}
      {isDrawerOPen && <Backdrop />}

      {isEditDrawerOPen && <EditSlideDrawer  />}
      {isEditDrawerOPen && <Backdropedit />}
    
    </>
  );
}

export default Profileimage;
