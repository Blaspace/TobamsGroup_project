import React from "react";

function NinethSection() {
  return (
    <div className="nineth-con">
      <div className="nineth">
        <span style={{ display: "flex" }}>
          <div className="dotIcon">
            <img src={require("../../public/Ellipse (6).png")} width="7px" />
            <img src={require("../../public/Ellipse (6).png")} width="7px" />
            <img
              src={require("../../public/Ellipse (6).png")}
              width="7px"
            />{" "}
          </div>
          <div className="triangle"></div>
        </span>
        <section>
          <div>
            <span>OVERLINE</span>
            <br />
            <h1>
              Cours vitae <br />
              Sollicitudin donec
              <br />
              nascutur, Join now
            </h1>
            <br />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              possimus animi officia quam molestias
            </span>
            <br />
            <br />
            <button className="btn2">Get started</button>{" "}
            <button className="btn">Learn More</button>
          </div>
          <br />

          <div>
            <img
              src={require("../../public/Users.png")}
              width="100%"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default NinethSection;
