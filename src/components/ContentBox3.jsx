import React from "react";

const ContentBox3 = () => {
  return (
    <div className="box3" id="box3Id">
      <div className="container">
        <div className="skill">
          <h1>SKILLS</h1>
          <div className="details">
            <span>HTML</span>
            <span>92%</span>
          </div>
          <div className="bar">
            <div id="html"></div>
          </div>
        </div>
        <div className="skill">
          <div className="details">
            <span>CSS</span>
            <span>75%</span>
          </div>
          <div className="bar">
            <div id="css"></div>
          </div>
        </div>
        <div className="skill">
          <div className="details">
            <span>JS</span>
            <span>80%</span>
          </div>
          <div className="bar">
            <div id="js"></div>
          </div>
        </div>
        <div className="skill">
          <div className="details">
            <span>Node.js</span>
            <span>65%</span>
          </div>
          <div className="bar">
            <div id="nodejs"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBox3;
