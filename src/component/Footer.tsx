import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <img src={require("../public/Logo (1).png")} alt="logo" width="70%" />
          <ol>
            <li>Support</li>
            <li>Terms of service</li>
            <li>License</li>
          </ol>
        </div>
        <div
          style={{
            borderLeft: "1px solid #262840",
            borderRight: "1px solid #262840",
          }}
        >
          <ul>
            <li>Auctions</li>
            <li>Roadmap</li>
            <li>Discover</li>
            <li>Community</li>
            <br />
            <button className="btn2">My account</button>
          </ul>
          <ol style={{ width: "60%" }}>
            {["Facebook", "LinkedIn", "Github", "Twitter", "Instagram"].map(
              (platform) => (
                <li key={platform}>
                  <img
                    src={require(`../public/${platform} Icon.png`)}
                    alt={`${platform}-icon`}
                  />
                </li>
              )
            )}
          </ol>
        </div>
        <div>
          <p style={{ fontSize: "13px", color: "#7780a1" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            illo laboriosam minima, rerum cum magnam soluta earum praesentium
          </p>
          <form>
            <input type="text" placeholder="Newsletter" />
            <p>Signup</p>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
