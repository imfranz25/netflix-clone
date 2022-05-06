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
  const [pass, setPass] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePass = (e) => setPass(e.target.value);
  const navigate = useNavigate();
  /**
   * email: bayanacademy@gmail.com
   * pass: 1234
   */
  const checkUser = () => {
    if (email === "bayanacademy@gmail.com" && pass === "1234") {
      setAuth(true);
      alert("Login Success");
      navigate("/dashboard");
    } else {
      alert("Login Failed, please try again !");
    }
  };

  return (
    <div className="login-form-container">
      <Box className="form-box" autoComplete="off">
        <h1>Sign In</h1>
        <div className="input-container">
          <TextField
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: "white" } }}
            label="Email or Phone Number"
            variant="filled"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="input-container">
          <TextField
            InputLabelProps={{ style: { color: "white" } }}
            sx={{ input: { color: "white" } }}
            type="password"
            label="Password"
            variant="filled"
            value={pass}
            onChange={handlePass}
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
