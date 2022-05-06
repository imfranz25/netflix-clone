import React from "react";

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <h1>
        Unlimited movies, TV <br /> shows, and more.
      </h1>
      <p className="para-1">Watch anywhere. Cancel anytime.</p>
      <p className="para-2">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="email-container">
        <input type="text" name="email" placeholder="Email Address" />
        <button type="submit">Get Started ></button>
      </div>
    </div>
  );
};

export default GetStarted;
