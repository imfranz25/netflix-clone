import React from "react";
// COMPONENTS
import Header from "./../components/Header";
import LoginForm from "./../components/LoginForm";
import Footer from "./../components/Footer";

function Login({ setAuth }) {
  return (
    <div className="login-container">
      <Header innerContent={<LoginForm setAuth={setAuth} />} />
      <Footer />
    </div>
  );
}

export default Login;
