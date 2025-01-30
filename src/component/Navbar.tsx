import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="nav-con">
      <div className="nav">
        <div className="logo">
          <img src={require(`../public/Logo.png`)} alt="logo" height="30px" />
        </div>
        <ul>
          <li>Auction</li>
          <li>Roadmap</li>
          <li>Discover</li>
          <li>Community</li>
        </ul>
        <section>
          <button className="btn">Contact</button>
          <button className="btn2">My account</button>
        </section>
      </div>
    </div>
  );
};

export default Navbar;