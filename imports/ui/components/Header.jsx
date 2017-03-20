import React, { PropTypes } from 'react';

const Header = props => {
  return (
    <div>
      <header>
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <h1 className="title">RocketWatch</h1>
            </a>
          </div>
        </nav>
      </header>      
    </div>
  );
};

Header.propTypes = {
  
};

export default Header;
