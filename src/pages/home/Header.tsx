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
              <img
                src={require("../../public/Vector.png")}
                alt="vector"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </span>
            <br />
            <span style={{ marginLeft: "15px" }}>
              <img
                src={require("../../public/Frame.png")}
                alt="frame"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
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
              <img
                src={require("../../public/Arrow Down Icon.png")}
                alt="arrow"
              />
            </span>
            <img src={require("../../public/Search Icon.png")} alt="search" />
          </form>
        </div>
      </div>

      {/* Floating images */}

      <section
        style={{ backgroundImage: `url(${require("../../public/Image.png")})` }}
        className="floating-img img"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={require("../../public/Image-1.png")} />
      </section>
      <section
        style={{
          backgroundImage: `url(${require("../../public/Image-2.png")})`,
        }}
        className="floating-img img1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={require("../../public/Image-3.png")} />
      </section>
      <section
        style={{
          backgroundImage: `url(${require("../../public/Image-4.png")})`,
        }}
        className="floating-img img2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={require("../../public/Image-5.png")} />
      </section>
      <section
        style={{
          backgroundImage: `url(${require("../../public/Image-6.png")})`,
        }}
        className="floating-img img3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={require("../../public/Image-7.png")} />
      </section>
      <section
        style={{
          backgroundImage: `url(${require("../../public/Image-8.png")})`,
        }}
        className="floating-img img4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={require("../../public/Image-9.png")} />
      </section>
      <section
        style={{
          backgroundImage: `url(${require("../../public/Image-10.png")})`,
        }}
        className="floating-img img5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={require("../../public/Image-11.png")} />
      </section>
    </div>
  );
};

export default Header;
