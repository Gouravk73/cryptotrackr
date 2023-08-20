import React from 'react';
import { Link } from 'react-router-dom';
import{HashLink} from"react-router-hash-link"


const Header = () => {
  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      <div className="left-section">
        <Link to="/" onClick={goToHome}>
          <p>CryptoTrackr</p>
        </Link>
      </div>
      <div className="right-section">
        <HashLink to="/#aboutus">About Us</HashLink>
        <HashLink to="/#market">Market</HashLink>
        <HashLink to="/#news">News</HashLink>
        <Link to="/#contactUs">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Header;
