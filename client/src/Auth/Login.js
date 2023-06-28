import React, { useState } from "react";
import Layout from '../layout/Layout';
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import toast from "react-hot-toast";
/* import "../styles/AuthStyles.css"; */
import { useAuth } from "../context/Auth.js";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Login = () => {

  const form = useRef();

  const regStyles ={
    color:"black",
    marginTop:"10px",
    textAlign:"center",
    cursor:"pointer",
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth();

  const navigate = useNavigate();
  const location=useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://healthandhygeinebackend-huew.onrender.com/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        emailjs.sendForm('service_u73ocld', 'template_mcqvhfj', form.current, 'vPK75gA9Ebzz3jI4d')
       .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        navigate(location.state ||"/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
    <div className="cont">
      <div className="form-container ">
        <form ref={form} onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
      
          <div className="mb-3">
            <button type="submit" className="btn btn-primary" onClick={()=>navigate('/forgot-password')}>
              FORGOT ANSWER
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          <p style={regStyles} onClick={()=>navigate("/register")}>did not register yet?..</p>
        </form>
      </div>
      </div></Layout>
  )
}

export default Login