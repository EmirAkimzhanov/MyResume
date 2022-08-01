import React from "react";
import img from "../img/2022-08-01_20-28-46.png";

const ContentBox1 = ({ open }) => {
  const transformStyle = {
    transform: ` translateX(-600px)`,
  };
  return (
    <>
      <div className="box1" id="box1Id" style={open ? transformStyle : {}}>
        <div className="center-text">
          <p className="text">WELCOME TO MY RESUME LANDING</p>
        </div>
      </div>
      <div className="underBox1">
        <img src={img} style={{ width: "100%" }} alt="" />
      </div>
    </>
  );
};

export default ContentBox1;
