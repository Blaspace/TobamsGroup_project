import React from "react";
import { useNavigate } from "react-router-dom";

function FourthSection() {
  const navigate = useNavigate()
  return (
    <div className="fourth-con">
      <div className="fourth">
        <div style={{ width: "45%" }}>
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
            <button className="btn2" onClick={()=>navigate('/single')}>Get started</button>
            <button className="btn" onClick={()=>navigate('/single')}>Learn more</button>
          </section>
        </div>
        <div style={{ width: "55%" }}>
          <img
            src={require("../../public/Right - Image.png")}
            width="100%"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
