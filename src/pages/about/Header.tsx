import React from "react";
import './about.css'

function Header() {
  return (
    <div className="single-con">
      <div className="single">
        <img src={require("../../public/Item (3).png")} />
        <div>
          <section>
            <h1>metadata used when your web app is </h1>
            <br />
            <p style={{fontSize: "13px", color: "#7780a1"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos libero numquam cumque voluptatum, exercitationem
              distinctio.
            </p>
            <br />
            <div>
              <span>
                <img src={require("../../public/Ellipse (4).png")} width="50px" />
                <article>
                  <small style={{color: '#7780a1'}}>lorem due</small>
                  <p>@lorem den</p>
                </article>
              </span>
              <span>
                <img src={require("../../public/Ellipse (4).png")}width="50px" />
                <article>
                  <small style={{color: '#7780a1'}}>lorem due</small>
                  <p>@lorem den</p>
                </article>
              </span>
            </div>
          </section>
          <section className="etc-price">
                <div style={{gap: '50px'}}>
                    <spna>
                        <small style={{color: '#7780a1'}}>Current price</small>
                        <br/>
                        <h1>22.5 <small>ETH</small></h1>
                    </spna>
                    <spna>
                    <small style={{color: '#7780a1'}}>Time left</small>
                        <br/>
                        <h1><small>22:56</small></h1>
                    </spna>
                </div>
                <br/>
                <button className="btn2" style={{width:"100%"}}>Place a bid</button>
          </section>
          <section>
            <img src={require('../../public/Frame 78.png')}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Header;
