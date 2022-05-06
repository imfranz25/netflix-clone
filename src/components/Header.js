import React from "react";
import { Link } from "react-router-dom";

import "./../css/Header.scss";

function Header({ innerContent, isHome }) {
  return (
    <header className="showcase">
      <nav className="showcase-top">
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
          alt="Netflix Logo"
        />
        If isHome var exist then show signin button
        {isHome && (
          <Link to="/login">
            <button className="submit" type="button">
              Sign In
            </button>
          </Link>
        )}
      </nav>
      {/*Header Dynamic Content/Component*/}
      {innerContent}
    </header>
  );
}

export default Header;
