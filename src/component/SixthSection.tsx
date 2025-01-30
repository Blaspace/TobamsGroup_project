import React from "react";

function SixthSection() {
  return (
    <div className="sixth-con">
      <div className="sixth">
        <div>
          <img src={require("../public/Left - Image.png")} width="100%" />
        </div>
        <div>
          <span>OVERLINE</span>
          <h1>
            Lorem ipsum sit
            <br />
            dolor sit amet <br />
            consectetur.
          </h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, odit? Fugiat, esse sint soluta sed autem quaerat
          </span>
          <br />
          <br />
          <br />
          <section>
            <div>
              <img src={require("../public/Icon.png")} width="30px" />
              <br />
              <p>
                <b>Sollicitudin sapion</b>
              </p>
              <span>Cursuss fermentus</span>
            </div>
            <div>
              <img src={require("../public/Icon (1).png")} width="30px" />
              <br />
              <p>
                <b>Sollicitudin sapion</b>
              </p>
              <span>Cursuss fermentus</span>
            </div>
          </section>
          <br />
          <section>
            <button className="btn2">Get started</button>
            <button className="btn">Learn more</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
