import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Login.css";
import axios from "axios";
import { useNavigate , useLocation} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [role, setRole] = useState("");  

  const backendUrl = "http://localhost:4000/api";

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e);
    
    try {
      const response = await axios.post(`${backendUrl}/login`, {
        email,
        password,
      });
      if (response.data?.token) {
        alert("Login Successfully");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem('isLoggedIn' , 'true');
        localStorage.setItem('username', response.data.name);
      } else {
        throw new Error("Unexpected response format");
      }
      navigate(from)
    } catch (error) {
      alert("Login Failed: " + error.response?.data?.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post(`${backendUrl}/signup`, {
        name,
        email,
        password,
        role,  // Send the role data as well
      });
      alert("SignUp Successfully! Please Login!");
      localStorage.setItem("token", response.data.token); // Corrected 'response.token.data'
       localStorage.setItem('username' , response.data.name);
      setActiveTab("login");
    } catch (error) {
      alert("Signup Failed: " + error.response?.data?.message);
    }
  };

  return (
    <div className="login-container">
       <video autoPlay loop muted className="background-video">
         <source src='./video/UI.mp4' type="video/mp4" />
       </video>
      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`tab-button ${activeTab === "signup" ? "active" : ""}`}
          onClick={() => setActiveTab("signup")}
        >
          Signup
        </button>
      </div>

      {activeTab === "login" ? (
        <div className="login-box">
          <div className="login-icon">
            <i className="fa fa-user"></i>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="login-box">
          <div className="login-icon">
            <i className="fa fa-user-plus"></i>
          </div>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {/* Select Role */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Visitor">Visitor</option>
            </select>

            <button type="submit" className="login-button">
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;