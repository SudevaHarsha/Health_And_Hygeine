import React from 'react'
import Layout from '../layout/Layout';
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
import img4 from "../images/image4.jpg"
import img5 from "../images/image5.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutUs = () => {
  const cardsData = [
    {
      id: 1,
      image: img1,
      description: 'Conducting a Survey on the Level of Awareness about Health and Hygiene in People During the first week, a survey was conducted to assess the level of awareness about health and hygiene among the people. The survey aimed to gather information about their knowledge and practices related to personal hygiene, sanitation, and overall health awareness. The survey included questions about hand hygiene, proper food handling, cleanliness of living spaces, and knowledge of common diseases. The data collected from the survey will serve as a baseline to understand the existing awareness levels and identify areas for improvement.'
    },
    {
      id: 2,
      image: img2,
      description: 'In the second week, an awareness programme on dental health and oral hygiene was organized. The programme included educational sessions and interactive activities to promote proper dental care practices. Participants were educated about the importance of brushing teeth twice a day, flossing, and using mouthwash. They were also provided with information on common dental problems, the impact of diet on oral health, and the benefits of regular dental check-ups. Leaflets and brochures highlighting oral hygiene tips and recommendations were distributed to reinforce the knowledge gained during the programme.',
    },
    {
      id: 3,
      image: img4,
      description: 'During the third week, a sanitization drive was conducted to raise awareness about the importance of sanitization and maintaining cleanliness in the community. The drive involved cleaning and disinfecting public spaces, such as parks, community centers, and shared facilities. Community members were actively involved in the drive, participating in cleaning activities and learning about proper sanitization practices. Educational materials and demonstrations were provided to teach effective sanitization techniques, including the use of disinfectants, hand sanitizers, and proper waste management. The drive aimed to instill a sense of responsibility and promote a cleaner and healthier environment.',
    },
    {
      id: 4,
      image: img3,
      description: 'Explaining the Importance of Nutrition and Balanced Diet. In the fourth week, an educational session was conducted to explain the importance of nutrition and a balanced diet for overall health and well-being. Participants were informed about the different food groups, essential nutrients, and the role of a balanced diet in preventing various health conditions, including diabetes and heart disease. The session emphasized the importance of incorporating fruits, vegetables, whole grains, lean proteins, and healthy fats into daily meals. Practical tips for meal planning and healthy cooking methods were shared to help participants make informed dietary choices. The goal was to empower individuals to make healthier food choices and improve their overall nutritional intake.',
    },
    {
      id: 5,
      image: img5,
      description: 'During the fifth week, an educational session emphasized the importance of vaccination and prevention in avoiding diseases. Participants learned about the benefits of vaccines and how they stimulate the immune system to fight diseases. The session highlighted the ease and effectiveness of preventing diseases through immunization. Participants were educated about herd immunity and how widespread vaccination protects vulnerable individuals. The role of public health campaigns and vaccination drives in promoting awareness and accessibility was discussed. The session aimed to address concerns, provide accurate information, and encourage informed decision-making regarding vaccination for individual and public health.',
    },
  ];

  useEffect(()=>{
    AOS.init({duration:2000,offset:300});
  },[])

  return (
    <Layout>
      <h1 className='heading' data-aos="fade-down">AboutUs</h1>
      <div className="about-us-page">
      <div className="cards-container-about">
        {cardsData.map((card, index) => (
          <div key={card.id} className={`card-about ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className="card-image-about" data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}>
              <img src={card.image} alt={`Image ${card.id}`} />
            </div>
            <div className="card-description-about" data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export default AboutUs;