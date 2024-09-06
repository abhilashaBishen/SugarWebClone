import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import loginBgImage from "../Components/Assets/LargeLogo/largeIconimg.jpg";

const LoginSignup = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (!data || data.status !== 'S') {
        throw new Error(data.message);
      }
  
      localStorage.setItem("token",data.token);

      console.log("Login successful");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
    // console.log("Logging in with", { email, password });
    // Navigate to another page on successful login, e.g., home
    // navigate("/");
  };

  const handleRegister = async () => {
    // Registration logic
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // console.log("Registering with", { email, password });

    try {
      const response = await fetch("http://localhost:5001/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email,password}),
      });
      const data = await response.json();
      if(!response.ok){
        throw new Error(data.message);
      }

      console.log('Registration is successfully done');
      setIsRegistering(false);

    } catch (err) {
      alert(err.message)
    }
  

   
  };

  return (
    <div className="loginContainer">
      <div className="loginImage">
        <img src={loginBgImage} alt="Background image" />
      </div>
      <div className="loginForm">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <div className="loginbutton">
          <button onClick={isRegistering ? handleRegister : handleLogin}>
            {isRegistering ? "Register" : "Login"}
          </button>
        </div>
        <p>
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
