import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header-con">
      <div className="header">
        <div>
          <small>NON FUNGIBLE TOKEN</small>
          <br />
          <h1>
            A new NFT
            <span>
              <img src={require('../public/Vector.png')} alt="vector" />
            </span>
            <br />
            <span style={{ marginLeft: "15px" }}>
              <img src={require("../public/Frame.png")} alt="frame" />
            </span>
            Experience.
          </h1>
          <br />
          <small>Discover, collect and sell</small>
          <br />
          <form>
            <input type="text" placeholder="Items, collection and creators" />
            <span>
              Category
              <img src={require("../public/Arrow Down Icon.png")} alt="arrow" />
            </span>
            <img src={require("../public/Search Icon.png")} alt="search" />
          </form>
        </div>
      </div>

      {/* Floating images */}
    
      <section
        style={{backgroundImage: `url(${require('../public/Image.png')})`}}
        class="floating-img img"
      >
        <img src={require("../public/Image-1.png")} />
      </section>
      <section
        style={{backgroundImage: `url(${require('../public/Image-2.png')})`}}
        class="floating-img img1"
      >
        <img src={require("../public/Image-3.png")} />
      </section>
      <section
        style={{backgroundImage: `url(${require('../public/Image-4.png')})`}}
        class="floating-img img2"
      >
        <img src={require("../public/Image-5.png")} />
      </section>
      <section
        style={{backgroundImage: `url(${require('../public/Image-6.png')})`}}
        class="floating-img img3"
      >
        <img src={require("../public/Image-7.png")} />
      </section>
      <section
        style={{backgroundImage: `url(${require('../public/Image-8.png')})`}}
        class="floating-img img4"
      >
        <img src={require("../public/Image-9.png")} />
      </section>
      <section
        style={{backgroundImage: `url(${require('../public/Image-10.png')})`}}
        class="floating-img img5"
      >
        <img src={require("../public/Image-11.png")} />
      </section>
    </div>
  );
};

export default Header;
