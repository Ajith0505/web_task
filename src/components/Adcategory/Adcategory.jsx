import React from "react";
import "./styles.css"
import Card from "./Adcard";


// import { Adverticons } from "../../user/Adcategory";
// import { advertIcons } from "../../user/Adcategory";


function createCard(advertIcon) {
    return (
      
      <Card
      key={advertIcon.id}
      name={advertIcon.name}
      imgs={advertIcon.image_default}
      imgss={advertIcon.image_active}
      />
     
    );
  }

const Adcategory = (props) => {
  // const adCategory = useSelector(
  //   (state) => state.reducers.adcategory.adCategory
  // );
    // const advertIcons = adCategory.categories
    console.log("associated with the props",props.category);
    const sampleAdIcons=props.category
    return ( <div className="ad-category">{sampleAdIcons && sampleAdIcons.map(createCard)}</div> );
}
export default Adcategory
