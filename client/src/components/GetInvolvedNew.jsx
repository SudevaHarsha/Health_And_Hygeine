import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate,useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../styles/AuthStyles.css"
import Layout from '../layout/Layout';
import { useAuth } from '../context/Auth';

const GetInvolved = () => {

    const [userId,setUserId]= useState();
    const [email,setEmail]=useState();
    const [contact,setContact]=useState();
    const [activity,setActivity]=useState();
    const [otherPage,setOtherPage] = useState();

    const {auth} = useAuth();
    setUserId(auth.user.id);
    const location = useLocation();

    const handleSubmit = async(e) =>{
      setActivity(aid);
      e.preventDefault();
      const productData = new FormData();
          productData.append("userId", userId);
          productData.append("activity", activity);
          productData.append("email", email);
          productData.append("contact", contact);
      try{
          const res = await axios.post("http://localhost:3500/api/v1/activity/activity-register",productData);
          if(res.data.success){
              console.log(res.data.message);
          }
          else{
              console.log(res.data.message);
          }
      } catch(err){
          console.log(err);
          console.log("something went wrong");
      }


  }
  return (
    <Layout>
        <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
              <input
                type="text"
                value={useraId}
                onChange={(e) => setUseraId(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder={uname}
                required
                autoFocus
                disabled
              /> 
          </div>
          <div className="mb-3">
            <input
              type="email"
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
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder={aname}
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default GetInvolved