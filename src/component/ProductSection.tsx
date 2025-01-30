import React, { useRef } from "react";

const ProductSection: React.FC = () => {
  const scrollAmount: number = 5; // Scroll speed (higher = faster)
  const scrollContainer = useRef();
  let scrollInterval;

  const handleScrole = (direction: number) => {
    stopScrolling(); // Stop any existing scrolling
    scrollInterval = setInterval(() => {
      scrollContainer.current.scrollLeft += direction * scrollAmount;
    }, 10); // Adjust interval speed if needed
  };

  // Function to stop scrolling
  function stopScrolling() {
    clearInterval(scrollInterval);
  }

  const products = [
    {
      id: 1,
      image: require("../public/product.jpeg"),
      title: "Lorem ipsum dolor sit amet.",
      price: "1.15ETH",
    },
    {
      id: 2,
      image: require("../public/Image-1 (2).png"),
      title: "Lorem ipsum dolor sit amet.",
      price: "1.15ETH",
    },
    {
      id: 2,
      image: require("../public/Image-2 (2).png"),
      title: "Lorem ipsum dolor sit amet.",
      price: "1.15ETH",
    },
    {
      id: 2,
      image: require("../public/Image-3 (2).png"),
      title: "Lorem ipsum dolor sit amet.",
      price: "1.15ETH",
    },
    {
      id: 2,
      image: require("../public/Image-4 (2).png"),
      title: "Lorem ipsum dolor sit amet.",
      price: "1.15ETH",
    },
    {
      id: 2,
      image: require("../public/product-1.png"),
      title: "Lorem ipsum dolor sit amet.",
      price: "1.15ETH",
    },
  ];

  return (
    <div className="product-con">
      <h3>Latest live auction</h3>
      <button
        className="scrollRight"
        id="scrollRight"
        onMouseOver={() => handleScrole(1)}
        onmouseLeaver={() => stopScrolling()}
      >
        <img src={require("../public/Vector (1).png")} alt="scroll-right" />
      </button>
      <button
        className="scrollLeft"
        id="scrollLeft"
        onMouseOver={() => handleScrole(-1)}
        onmouseLeaver={() => stopScrolling()}
      >
        <img src={require("../public/Vector (1).png")} alt="scroll-left" />
      </button>
      <div className="product" ref={scrollContainer}>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="100%"
              height="350px"
            />
            <span>
              <p>{product.title}</p>
              <small>{product.price}</small>
            </span>
            <small>
              <img src={require("../public/Timer Icon.png")} alt="timer" /> 233
              min left
            </small>
            <section>
              <span>
                <span style={{ width: "110px" }}>
                  {[1, 2, 3, 4].map((index) => (
                    <img
                      key={index}
                      src={require(`../public/0${index}.png`)}
                      width="35px"
                      height="35px"
                      style={{ right: `${index * 10}px` }}
                      alt={`user-${index}`}
                    />
                  ))}
                </span>
                <p style={{ fontSize: "9px" }}>23 people are bidding</p>
              </span>
              <span>
                <img
                  src={require("../public/Heart Icon (1).png")}
                  width="20px"
                  height="20px"
                  alt="heart"
                />
                <p style={{ fontSize: "9px" }}>12</p>
              </span>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
