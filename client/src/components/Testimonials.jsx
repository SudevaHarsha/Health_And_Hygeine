import React from 'react'
import Layout from '../layout/Layout';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {

  const remainingRegistrations = 20;
  const navigate = useNavigate();

  const handleInvolvement = ()=>{
    navigate("/get-involved");
  }
  
  const activities = [
    {
      id: 1,
      image: 'https://s3-ap-northeast-1.amazonaws.com/assets-eaglenews/2018/05/Australia-Binhi-cleanup-03.jpg',
      name: 'Activity 1',
      day: 'Monday',
      place: 'Park',
      status: 'About to start',
    },
    {
      id: 2,
      image: 'activity2.jpg',
      name: 'Activity 2',
      day: 'Tuesday',
      place: 'Gym',
      status: 'Completed',
    },
    // Add more activities here
  ];
  return (
    <Layout>
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <p>Hurry up there are only 10 places left for the free sanitizers distribution.</p>
        </div>
      </div>
      {/* <marquee>This is a scrolling text</marquee> */}
      <div className="activities-page">
      <div className="activities-header-image">
        <img src="https://tse4.mm.bing.net/th?id=OIP.1C6r-zxwf5cQyQyY4DTs_gHaEK&pid=Api&P=0&h=180" />
        <div className="activities-header-text">
          <h1>Welcome to Activities Page</h1>
          <p>
            <span>{remainingRegistrations}</span> people remaining to register
          </p>
        </div>
        {/* <img className="activities-hurry-up-image" src="https://tse4.mm.bing.net/th?id=OIP.T9qwOpqOiqgsY64-5TdVHAHaFd&pid=Api&P=0&h=180" alt="Hurry Up" /> */}
      </div>

      <div className="activities-container">
        {activities.map((activity) => (
          <div className="activities-card" key={activity.id}>
            <div className="activities-card-image">
              <img src={activity.image} alt={activity.name} />
            </div>
            <div className="activities-card-details">
              <h3>{activity.name}</h3>
              <p className='activity-day'>
                <strong>Day:</strong> {activity.day}
              </p>
              <p className='activity-place'>
                <strong>Place:</strong> {activity.place}
              </p>
              <p className='activity-status'>
                <strong>Status:</strong> {activity.status}
              </p>
              <button onClick={handleInvolvement} className='activity-button'>Get-Involved</button>
              <p className='activity-members'>
                 58 members registered
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export default Testimonials