import React from 'react'
import Layout from '../layout/Layout';
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"

const AboutUs = () => {
  const cardsData = [
    {
      id: 1,
      image: img1,
      description: 'at first we conducted the survey. 1.Regular Handwashing: One of the most fundamental practices for maintaining good health and hygiene is regular handwashing. Our hands come into contact with countless surfaces throughout the day, accumulating germs and bacteria. By washing our hands frequently with soap and water, especially before eating or preparing food, after using the restroom, or after coughing or sneezing, we can prevent the spread of harmful pathogens and reduce the risk of infections such as colds, flu, and gastrointestinal illnesses.2.Proper Dental Care: Oral health is an integral part of overall health. Practicing good dental hygiene helps prevent dental caries, gum diseases, and bad breath. Brush your teeth at least twice a day with fluoride toothpaste, floss daily to remove plaque between the teeth, and visit your dentist regularly for check-ups and cleanings. Maintaining proper oral hygiene can also contribute to better cardiovascular health and reduce the risk of certain medical conditions.3.Regular Physical Activity: Engaging in regular physical activity offers numerous health benefits. Exercise helps in maintaining a healthy weight, strengthening muscles and bones, improving cardiovascular health, and enhancing overall mood and mental well-being. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week. Additionally, incorporate strength training exercises to improve muscle strength and flexibility.4.Adequate Sleep: Quality sleep is crucial for our overall health and well-being. Lack of sleep can lead to fatigue, impaired cognitive function, weakened immune system, and increased risk of chronic conditions such as obesity, diabetes, and cardiovascular diseases. Aim for 7-9 hours of uninterrupted sleep every night, establish a regular sleep schedule, and create a conducive sleep environment by keeping the bedroom dark, quiet, and comfortable.',
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

  return (
    <Layout>
      <h1>AboutUs</h1>
      <div className="about-us-page">
      <h1>About Us</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={card.id} className={`card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className="card-image">
              <img src={card.image} alt={`Image ${card.id}`} />
            </div>
            <div className="card-description">
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