import React from 'react';

const LogoSection: React.FC = () => {
  return (
    <div className="logo-section">
      <div>
        <ul>
          {[2, 1, 2, 3].map((index) => (
            <li key={index}>
              <img src={require(`../../public/Vector-${index}.png`)} alt={`vector-${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoSection;