import React from "react";

function FourthSection() {
  return (
    <div className="fourth-con">
      <div className="fourth">
        <div style={{width: '45%'}}>
          <span>OVERLINE</span>
          <br />
          <h1>
            Sapien ipsum
            <br />
            scelerisque
            <br />
            convallis fusce
          </h1>
          <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dicta, sequi animi delectus odit deserunt
          </span>
          <br />
          <br />
          <section>
            <button className="btn2">Get started</button>
            <button className="btn">Learn more</button>
          </section>
        </div>
        <div style={{width: "55%"}}>
          <img src={require("../public/Right - Image.png")} width="100%" />
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
