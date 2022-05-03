import React, { useState, useEffect } from "react";
import "./../css/Nav.scss";

function Nav() {
  const [show, toggleShow] = useState(false);

  /**
   * Add event listener scroll
   * if the user scroll downward ---> > 100
   * then add a black background in nav portion
   */
  useEffect(() => {
    const setToggle = () => {
      toggleShow(window.scrollY > 100 ? true : false);
    };
    window.addEventListener("scroll", setToggle);
    return () => {
      window.removeEventListener("scroll", setToggle);
    };
  }, []);

  return (
    <div className={`nav-container ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
