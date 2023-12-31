import React,{useState,useEffect} from 'react'
import Layout from '../layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import i3 from "../images/i3.png"
import { FaThumbsUp } from 'react-icons/fa';

const Testimonials = () => {

  const remainingRegistrations = 20;
  const navigate = useNavigate();

  const [auth]=useAuth();
  const [commentOpen,setCommentOpen] = useState(true);
  const [commentLike,setCommentLike] = useState([]);
  const [fullComments,setFullComments] = useState([]);
  const [fullReplies,setFullReplies] = useState([]);
  const [fullLikes,setFullLikes] = useState([]);
  const [reply,setReply]=useState(0);
  const [commentIdReply,setCommentIdReply]=useState();
    const [open,setOpen]=useState(0);
    const [open2,setOpen2]=useState(0);
    const [activities, setActivities] = useState([]);
    const [userId,setUserId]= useState();
    const [userId2,setUserId2]= useState();
    const [id,setId]=useState();
    const [name,setName]=useState();
    const [aname,setAname]=useState();
    const [activity,setActivity]=useState();
    const [activity2,setActivity2]=useState();
    const [activity3,setActivity3]=useState();
    const [description,setDescription]=useState();
    const [descriptionReply,setDescriptionReply]=useState();
    const [comment,setComment]=useState();
    const [email,setEmail]=useState();
    const [contact,setContact]=useState();
    const [showComments, setShowComments] = useState(false);

    const allUserLikes = async()=>{
      try{
        let uId=auth.user.id;
        const res = await axios.get(`https://healthandhygeinebackend-huew.onrender.com/api/v1/like/all-user-likes/${uId}`);
        
        console.log(res);
        setCommentLike(res?.data?.like);
        localStorage.setItem('commentLike',JSON.stringify(res.data));
      } catch(err){
        console.log(err);
      }
     }

     useEffect(()=>{
      allUserLikes();
    },[auth]);

    const handleInvolvement = (aid,aname,userId,uname)=>{
      navigate("/get-involved",{state:{userId,aid,aname,uname}});
    }
    
    /* const arrayImages =["https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&rs=1&c=1&qlt=95&w=198&h=124","https://tse1.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&rs=1&c=1&qlt=95&w=192&h=124","https://tse1.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&rs=1&c=1&qlt=95&w=221&h=124"]; */
    useEffect(()=>{
        getAllActivities();
    },[]);
    useEffect(()=>{
      AOS.init({duration:2000,offset:300});
    },[])
    const getAllActivities =async()=>{
        try{
            const res = await axios.get("https://healthandhygeinebackend-huew.onrender.com/api/v1/activity/activity");
            setActivities(res?.data?.activity);
            console.log(auth);            
        }catch(error){
            console.log(error);
        }       
    }
    const getAllCommentsById =async(id)=>{
        try{
            console.log(id);
            setId(id);
            setShowComments(!showComments);
            console.log(showComments);
            const res = await axios.get(`https://healthandhygeinebackend-huew.onrender.com/api/v1/comment/comment/${id}`);
            setComment(res?.data?.comment);
            setCommentOpen(false);
            console.log(res);
            
        }catch(error){
            console.log(error);
        }        
    }
    console.log(showComments);
    const allComments=async()=>{
      const res = await axios.get(`https://healthandhygeinebackend-huew.onrender.com/api/v1/comment/all-comment`);
      setFullComments(res?.data)
    }
    console.log(fullComments);

    const like=async(comment)=>{
      const check= commentLike.find((commentId)=> commentId===comment);
      if(!check){
        try{
          const res = await axios.post(`https://healthandhygeinebackend-huew.onrender.com/api/v1/like/like`,{users:auth.user.id,comment:comment,thumbsup:1});
          console.log(res.data.message);
          allLikes();
        }
        catch(err){
          console.log(err.data.message);
        }
      }
      else{
        try{
          const res = await axios.delete(`https://healthandhygeinebackend-huew.onrender.com/api/v1/like/like/${check}/${auth.user.id}`);
          allUserLikes();
          allLikes();
        }
        catch(err){
          console.log(err.data.message);
        }
      }

    }
    
    const allLikes = async()=>{
      const res = await axios.get(`https://healthandhygeinebackend-huew.onrender.com/api/v1/like/all-likes`);
      setFullLikes(res.data.like);
      console.log(fullLikes);
    }

    const allReplies=async(reid)=>{
      const res = await axios.get(`https://healthandhygeinebackend-huew.onrender.com/api/v1/reply/reply/${reid}`);
      setCommentIdReply(reid);
      console.log(res);
      setFullReplies(res?.data?.reply);
      console.log(fullReplies);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        /* console.log(auth.user);
        console.log("submitted");
        console.log(userId);
        console.log(activity,email,phone); */
        const productData = new FormData();
            productData.append("userId", userId);
            productData.append("activity", activity);
            productData.append("email", email);
            productData.append("contact", contact);
        try{
            const res = await axios.post("https://healthandhygeinebackend-huew.onrender.com/api/v1/activity/activity-register",productData);
            if(res.data.success){
                console.log(res.data.message);
            }
            else{
                console.log(res.data.message);
            }
            setOpen(0);
        } catch(err){
            console.log(err);
            console.log("something went wrong");
        }


    }
    const writeComment=async(aid)=>{
        /* e.preventDefault(); */
        setOpen2(1);
        /* setUserId2(auth.user.id);
        setActivity2(aid);
        console.log(activity2); */
        /* setActivity2(aId); */
     /*    const commentData=FormData();
        commentData.append("userId", userId);
        commentData.append("activity", activity);
        commentData.append("description",description); */
        try{
            const res = await axios.post("https://healthandhygeinebackend-huew.onrender.com/api/v1/comment/create-comment",{userId:auth.user.id,activity:aid,description});
            if(res.data.success){
                console.log(res.data.message);
            }
            else{
                console.log(res.data.message);
            }
            setDescription("");
            allComments();
            /* getAllCommentsById(); */
        } catch(err){
            console.log(err);
            console.log("something went wrong");
        }
    }

    const writeReply=async()=>{
      try{
          const res = await axios.post("https://healthandhygeinebackend-huew.onrender.com/api/v1/reply/reply",{users:auth.user.id,comment:commentIdReply,description:descriptionReply});
          if(res.data.success){
              console.log(res.data.message);
          }
          else{
              console.log(res.data.message);
          }
          setDescriptionReply("");
          allReplies(commentIdReply);
          /* getAllCommentsById(); */
      } catch(err){
          console.log(err);
          console.log("something went wrong");
      }
  }
  
  const activitiesImages = [
      'https://s3-ap-northeast-1.amazonaws.com/assets-eaglenews/2018/05/Australia-Binhi-cleanup-03.jpg',      
      'https://tse1.mm.bing.net/th?id=OIP.OhiXFJbxQVu2G7hzzjePZQHaD5&pid=Api&P=0&h=180',
      'https://tse1.mm.bing.net/th?id=OIP.bsGVZCZxvZ8sgc5n47fMEwHaEK&pid=Api&P=0&h=180',
      'https://www.14news.com/resizer/BPF6BO5CFN6745e3BRkA5k3XQHU=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/64UCSYDVIFCEDEPAN5TXZ4GBKI.png',
      'https://tse2.mm.bing.net/th?id=OIP.EtUlRo1MGCXAmtrbUUoUhAHaEK&pid=Api&P=0&h=180',
    // Add more activities here
  ];
  useEffect(()=>{
    allComments();
    allLikes();
  },[])
  return (
    <Layout>
      <div className="scrolling-text-container" data-aos="fade">
        <div className="scrolling-text">
          <p>Hurry up there are only 10 places left for the free sanitizers distribution.</p>
        </div>
      </div>
      {/* <marquee>This is a scrolling text</marquee> */}
      <div className="activities-page">
      <div className="activities-header-image" data-aos="flip-left">
        <img src={i3} />
        <div className="activities-header-text">
          <h1>Sanitizer Drive</h1>
          <p>
            only few slots are left
          </p>
        </div>
        {/* <img className="activities-hurry-up-image" src="https://tse4.mm.bing.net/th?id=OIP.T9qwOpqOiqgsY64-5TdVHAHaFd&pid=Api&P=0&h=180" alt="Hurry Up" /> */}
      </div>

      <div className="activities-container">
        {activities.map((activity,i) => (
          <div className="activities-card" data-aos="fade-down" key={activity.id}>
            <div className="activities-card-image">
              <img src={activitiesImages[i]} alt={activity.name} />
            </div>
            <div className="activities-card-details">
              <h3>{activity.name}</h3>
              <p className='activity-day'>
                <strong>Day:</strong> {activity.day}
              </p>
              <p className='activity-place'>
                <strong>Place:</strong> {activity.venue}
              </p>
              <p className='activity-status'>
                <strong>Status:</strong> Ongoing (or) about to come
              </p>
              <button onClick={()=>handleInvolvement(activity._id,activity.name,auth.user.id,auth.user.name)} className='activity-button'>Get-Involved</button>
              <p className='activity-members'>
                 58 members registered
              </p>
              <div className={` ${activity3===activity._id && reply ? 'hide-comment' : 'home-card-comments'}`}>
                <div className="home-card-comment-input">
                  <input
                    type="text"
                    placeholder="Add a comment"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                  <button onClick={()=>{
                    writeComment(activity._id)}
                    }>Add Comment</button>
                </div>
                <div className="home-card-comment-list" key={activity._id}>
                  { fullComments.filter((c)=> c.activity===activity._id)
                  .map((comment, index) => (<div className='commentdes'>
                    <p className='des1' key={index}>{comment.users.name} :</p>
                    {/* <br className='break'></br> */}
                    <p className='des2' key={index}>{comment.description}</p>
                    <div className='btn-cont'>
                      <button className={`like-btn ${ commentLike && commentLike.find((commentId)=> commentId===comment._id) ? 'thumbsup-btn' : ''}`}onClick={()=>{
                          setCommentLike([...commentLike,comment._id]);
                          like(comment._id);
                        }}><FaThumbsUp /> <span className='likesNo'>{fullLikes && fullLikes.filter((like)=> like.comment === comment._id).length
                        }</span></button>
                      <button className='btn-reply' onClick={()=>{
                        setReply(1);
                        allReplies(comment._id);
                        setActivity3(comment.activity);
                      }}>replies</button>
                    </div>
                    <p className='line-comment'></p>
                    </div>
                  ))}
                </div>
              </div>
              {activity3===activity._id && <div className={` ${reply ? 'home-card-comments' : 'hide-reply'}`}>
                <div className="home-card-comment-input">
                  <input
                    type="text"
                    placeholder="Add a reply"
                    value={descriptionReply}
                    onChange={(e)=>setDescriptionReply(e.target.value)}
                  />
                  <button onClick={
                    writeReply
                    }>Add Reply</button>
                </div>
                <div className="home-card-comment-list" key={activity._id}>
                  <button className='btn-goback' onClick={()=>{
                      setReply(0);
                      setFullReplies([]);
                    }}>&larr;</button>
                  { fullReplies && fullReplies .map((reply, index) => (<div className='commentdes'>
                    <p className='des1' key={index}>{reply.users.name} :</p>
                    {/* <br className='break'></br> */}
                    <p className='des2' key={index}>{reply.description}</p>
                    
                    </div>
                  ))}
                </div>

              </div>}
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export default Testimonials