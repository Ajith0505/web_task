import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";







function Card(props) {
    const [isHovering, setIsHovering] = useState(false)
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const changeRoute = () => {
        navigate(`/${props.name}`)

    }

    return (
        <div className="ad-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={changeRoute} >
            <img className="category-icon" src={isHovering?props.imgss:props.imgs} alt="image-mobile" />
            <div className="category-name">{props.name}</div>
        </div>
    );
}

export default Card;
