import React from "react";
import "./../css/Header.scss";

function Header() {
  return (
    <header class="showcase">
      <nav class="showcase-top">
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        />
        <button class="submit" type="submit">
          Sign In
        </button>
      </nav>
      <div class="get-started-container">
        <h1>
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <p class="para-1">Watch anywhere. Cancel anytime.</p>
        <p class="para-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="text" name="email" placeholder="Email Address" />
        <button type="submit">Get Started ></button>
      </div>
    </header>
  );
}

export default Header;
