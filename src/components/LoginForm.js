import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// STYLES
import "./../css/LoginForm.scss";

function LoginForm({ setAuth }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [pass, setPass] = useState("");
  const [passError, setpassError] = useState(false);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePass = (e) => setPass(e.target.value);
  const navigate = useNavigate();
  /**
   * email: bayanacademy@gmail.com
   * pass: 1234
   */
  const checkUser = () => {
    setEmailError(email.length === 0);
    setpassError(pass.length === 0);
    // VALIDATE ONCE EMAIL AND PASS IS SPECIFIED
    if (email.length > 0 && pass.length > 0) {
      if (email === "bayanacademy@gmail.com" && pass === "1234") {
        setAuth(true);
        alert("Login Success");
        navigate("/dashboard");
      } else {
        alert("Login failed, invalid email or password");
      }
    }
  };

  return (
    <div className="login-form-container">
      <Box className="form-box">
        <h1>Sign In</h1>
        <div className="input-container">
          <TextField
            autoComplete="off"
            InputLabelProps={{ style: { color: "white" } }}
            sx={{
              input: {
                color: "white",
                background: "rgba(20, 20, 20, 0.8)",
                borderRadius: "5px",
              },
            }}
            label="Email or Phone Number"
            variant="filled"
            value={email}
            onChange={handleEmail}
            onBlur={() => setEmailError(email.length === 0)}
            error={emailError && email.length === 0}
            helperText={
              emailError && email.length === 0 ? "Please enter your email" : ""
            }
          />
        </div>
        <div className="input-container">
          <TextField
            InputLabelProps={{ style: { color: "white" } }}
            sx={{
              input: {
                color: "white",
                background: "rgba(20, 20, 20, 0.8)",
                borderRadius: "5px",
              },
            }}
            type="password"
            label="Password"
            variant="filled"
            value={pass}
            onChange={handlePass}
            onBlur={() => setpassError(pass.length === 0)}
            error={passError && pass.length === 0}
            helperText={
              passError && pass.length === 0 ? "Please enter your password" : ""
            }
          />
        </div>
        <div className="sign-container">
          <button onClick={checkUser}>Sign in</button>
        </div>
        <div className="btn-footer">
          <FormControlLabel
            control={<Checkbox defaultChecked style={{ color: "white" }} />}
            label="Remember me?"
          />
          <label className="help">Need Help?</label>
        </div>
        <div className="new-container">
          <label>
            New to Netflix?<span>Sign Up Now</span>
          </label>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="learn">Learn more.</span>
          </p>
        </div>
      </Box>
    </div>
  );
}

export default LoginForm;
