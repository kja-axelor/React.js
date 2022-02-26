import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Expense Tracker <i className="fi-rr-credit-card"></i>
        </div>
        <div className="header-button">
          <a
            href="https://github.com/kja-axelor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original"></i>
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
