import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FifthSection() {
  const scrollAmount2: number = 5; // Scroll speed (higher = faster)
  const scrollContainer2 = useRef();
  let scrollInterval2;

  const handleScrole2 = (direction: number) => {
    stopScrolling2(); // Stop any existing scrolling
    scrollInterval2 = setInterval(() => {
      scrollContainer2.current.scrollLeft += direction * scrollAmount2;
    }, 10); // Adjust interval speed if needed
  };

  // Function to stop scrolling
  function stopScrolling2() {
    clearInterval(scrollInterval2);
  }

  const navigate = useNavigate()

  return (
    <div className="fifth-con">
      <div className="fifth">
            <section
            data-aos="fade-up"
            data-aos-duration="1000" >
          <br/>
          <h3>Checkout the hottest sales offerr</h3>
          <br/>
          <button
            className="scrollRight"
            id="scrollRight"
            style={{ top: "40%", right: "5px" }}
            onMouseOver={() => handleScrole2(1)}
            onMouseOut={() => stopScrolling2()}
          >
            <img src={require("../../public/Vector (1).png")} />
          </button>
          <button
            className="scrollLeft"
            id="scrollLeft"
            style={{ top: "40%", left: "5px" }}
            onMouseOver={() => handleScrole2(-1)}
            onMouseOut={() => stopScrolling2()}
          >
            <img src={require("../../public/Vector (1).png")} />
          </button>
          <br />
          <div className="product-fifth" ref={scrollContainer2}>
            <div>
              <img
                src={require("../../public/Image (6).png")}
                width="100%"
              />
              <p>Lorem ipsum dolor sit amet.</p>
              <span>
                <small>
                  <img src={require("../../public/Timer Icon.png")} /> 22:09
                </small>
                <small>1.15ETH</small>
              </span>
              <section>
                <span>
                  <p style={{ fontSize: "9px" }}>23 people are bidding</p>
                  <img src={require("../../public/Heart Icon (1).png")} />
                </span>
              </section>
            </div>
            <div>
              <img
                src={require("../../public/Image (3).png")}
                width="100%"
              />
              <p>Lorem ipsum dolor sit amet.</p>
              <span>
                <small>
                  <img src={require("../../public/Timer Icon.png")} /> 22:09
                </small>
                <small>1.15ETH</small>
              </span>
              <section>
                <span>
                  <p style={{ fontSize: "9px" }}>23 people are bidding</p>
                  <img src={require("../../public/Heart Icon (1).png")} />
                </span>
              </section>
            </div>
          </div>
          <br />
          <button className="btn" style={{ textAlign: "center", width: "100%" }} onClick={()=>navigate('/single')}>
            Show me more
          </button>
        </section>
        <article data-aos="fade-up"
            data-aos-duration="2000">
          <div style={{ display: "flex" }}>
            <div className="dotIcon">
              <img src={require("../../public/Ellipse (6).png")} width="7px" />
              <img src={require("../../public/Ellipse (6).png")} width="7px" />
              <img
                src={require("../../public/Ellipse (6).png")}
                width="7px"
              />{" "}
            </div>
            <div className="triangle"></div>
          </div>
          <section>
            <img  src={require('../../public/hand.png')} width="90%" className="hand"/>
            <h3>Get started creating and selling your NFTs</h3>
            <br/>
            <span style={{fontSize: '13px'}}>
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can
            </span>
            <br/>
            <button className="btn2" style={{width: '100%'}} onClick={()=>navigate('/single')}>Get started</button>
          </section>
        </article>
        <section 
        data-aos="fade-up"
            data-aos-duration="3000"
        >
          <h3>Top NFT at low price</h3>
          <br />
          <div className="nft">
            <img src={require("../../public/Item (1).png")} />
            <section>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <br />
              <span>
                <p style={{ fontSize: "12px" }}>
                  <img src={require("../../public/Timer Icon.png")} /> 22:09
                </p>
                <small>1.15ETH</small>
              </span>
              <span>
                <p style={{ fontSize: "9px" }}>50 people are bidding</p>
                <img src={require("../../public/Heart Icon (1).png")} />
              </span>
            </section>
          </div>
          <br />
          <div className="nft">
            <img src={require("../../public/Image-3 (4).png")} />
            <section>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <br />
              <span>
                <p style={{ fontSize: "12px" }}>
                  <img src={require("../../public/Timer Icon.png")} /> 22:09
                </p>
                <small>1.15ETH</small>
              </span>
              <span>
                <p style={{ fontSize: "9px" }}>23 people are bidding</p>
                <img src={require("../../public/Heart Icon (1).png")} />
              </span>
            </section>
          </div>
          <br />
          <div className="nft">
            <img src={require("../../public/Image-2 (4).png")} />
            <section>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <br />
              <span>
                <p style={{ fontSize: "12px" }}>
                  <img src={require("../../public/Timer Icon.png")} /> 22:09
                </p>
                <small>1.15ETH</small>
              </span>
              <span>
                <p style={{ fontSize: "9px" }}>23 people are bidding</p>
                <img src={require("../../public/Heart Icon (1).png")} />
              </span>
            </section>
          </div>
          <br />
          <div className="nft">
            <img src={require("../../public/Item.png")} />
            <section>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <br />
              <span>
                <p style={{ fontSize: "12px" }}>
                  <img src={require("../../public/Timer Icon.png")} /> 22:09
                </p>
                <small>1.15ETH</small>
              </span>
              <span>
                <p style={{ fontSize: "9px" }}>23 people are bidding</p>
                <img src={require("../../public/Heart Icon (1).png")} />
              </span>
            </section>
          </div>
          <br/>
          <button className="btn" style={{width: '100%'}} onClick={()=>navigate('/single')}>Show me more</button>
        </section>
      </div>
    </div>
  );
}

export default FifthSection;
