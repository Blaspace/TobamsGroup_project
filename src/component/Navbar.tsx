import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="nav-con">
      <div className="nav">
        <div className="logo">
          <img src={require(`../public/Logo.png`)} alt="logo" height="30px" />
        </div>
        <ul>
          <li
          onClick={()=>navigate('../')}
          >Auction</li>
          <li
          onClick={()=>navigate('/single')}
          >Roadmap</li>
          <li
          onClick={()=>navigate('../')}
          >Discover</li>
          <li onClick={()=>navigate('/single')}>Community</li>
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