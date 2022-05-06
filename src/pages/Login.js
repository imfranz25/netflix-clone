import React from "react";
// COMPONENTS
import Header from "./../components/Header";
import LoginForm from "./../components/LoginForm";
import Footer from "./../components/Footer";

function Login() {
  return (
    <div className="login-container">
      <Header innerContent={<LoginForm />} />
      <Footer />
    </div>
  );
}

export default Login;
