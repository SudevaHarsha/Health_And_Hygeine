import React from 'react'
import Layout from '../layout/Layout';
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutUs = () => {
  const cardsData = [
    {
      id: 1,
      image: img1,
      description: 'at first we conducted the survey. 1.Regular Handwashing: One of the most fundamental practices for maintaining good health and hygiene is regular handwashing. Our hands come into contact with countless surfaces throughout the day, accumulating germs and bacteria. By washing our hands frequently with soap and water, especially before eating or preparing food, after using the restroom, or after coughing or sneezing, we can prevent the spread of harmful pathogens and reduce the risk of infections such as colds, flu, and gastrointestinal illnesses.2.Proper Dental Care: Oral health is an integral part of overall health. Practicing good dental hygiene helps prevent dental caries, gum diseases, and bad breath. Brush your teeth at least twice a day with fluoride toothpaste, floss daily to remove plaque between the teeth, and visit your dentist regularly for check-ups and cleanings. Maintaining proper oral hygiene can also contribute to better cardiovascular health and reduce the risk of certain medical conditions.3.Regular Physical Activity: Engaging in regular physical activity offers numerous health benefits. Exercise helps in maintaining a healthy weight, strengthening muscles and bones, improving cardiovascular health, and enhancing overall mood and mental well-being. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week. Additionally, incorporate strength training exercises to improve muscle strength and flexibility.'
    },
    {
      id: 2,
      image: img2,
      description: 'Description 2',
    },
    {
      id: 3,
      image: "image4.jpg",
      description: 'Description 3',
    },
    {
      id: 4,
      image: 'image4.jpg',
      description: 'Description 4',
    },
    {
      id: 5,
      image: 'image5.jpg',
      description: 'Description 5',
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