import React from "react";
import { useNavigate } from "react-router-dom";

function Auction() {
  const auction = [
    {
      img: require("../../public/Image (3).png"),
      name: "Lorem ipsum dolor sit amet.",
      bidding: 33,
    },
    {
      img: require("../../public/Image-1 (3).png"),
      name: "Lorem ipsum dolor sit amet.",
      bidding: 22,
    },
    {
      img: require("../../public/Image-2 (3).png"),
      name: "Lorem ipsum dolor sit amet.",
      bidding: 8,
    },
    {
      img: require("../../public/Image-3 (3).png"),
      name: "Lorem ipsum dolor sit amet.",
      bidding: 12,
    },
    {
      img: require("../../public/Image (4).png"),
      name: "Lorem ipsum dolor sit amet.",
      bidding: 25,
    },
    {
      img: require("../../public/Image (5).png"),
      name: "Lorem ipsum dolor sit amet.",
      bidding: 22,
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="seventh-con">
      <span style={{ fontSize: "13px" }}>OVERLINE</span>
      <h2>Most populer live auction</h2>
      <section style={{ display: "flex", gap: "10px" }}>
        <button
          className="btn"
          style={{ height: "35px", border: "1px solid #7780a1" }}
          onClick={() => navigate("/single")}
        >
          Architecture
        </button>
        <button
          className="btn"
          style={{ height: "35px", border: "1px solid #7780a1" }}
          onClick={() => navigate("/single")}
        >
          Photography
        </button>
        <button
          className="btn"
          style={{ height: "35px", border: "1px solid #7780a1" }}
          onClick={() => navigate("/single")}
        >
          Games
        </button>
        <button
          className="btn"
          style={{ height: "35px", border: "1px solid #7780a1" }}
          onClick={() => navigate("/single")}
        >
          Music
        </button>
      </section>
      <div className="seventh">
        {auction.map((value, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration={i + "000"}
              onClick={() => navigate("/single")}
            >
              <img src={value.img} width="100%" height="250px" />
              <span>
                <p>{value.name}</p>
                <small>1.15ETH</small>
              </span>
              <small>
                <img src={require("../../public/Timer Icon.png")} /> 233 min
                left
              </small>
              <section>
                <span>
                  <p style={{ fontSize: "9px" }}>
                    {value.bidding} people are bidding
                  </p>
                </span>
                <span>
                  <img
                    src={require("../../public/Heart Icon (1).png")}
                    width="20px"
                    height="20px"
                  />
                  <p style={{ fontSize: "9px" }}>12</p>
                </span>
              </section>
            </div>
          );
        })}
      </div>
      <button className="btn">Show more</button>
    </div>
  );
}

export default Auction;
