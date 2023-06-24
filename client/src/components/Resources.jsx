import React,{useEffect, useState} from 'react';
import Layout from '../layout/Layout';
import {FaDownload,FaChevronDown, FaChevronUp} from "react-icons/fa";
import "./resources.css";
import h1 from "../h1.pdf"
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Resources = () => {
  const [expandedQuestion,setExpandedQuestion] = useState(null);
  const images = [
    "https://tse2.mm.bing.net/th?id=OIP.Wlvv15fHG-QSfBHCTIHiygHaDX&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.6h-Qr-Mt0lMrOW3MdvUM9QHaD4&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.jQp29hf30YBMSi4KXev2fAHaK4&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.28cLZU6hNoThUzpOiTqaSgHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.b0X0i36PqxsDdXEsigfqegHaFp&pid=Api&P=0&h=180",
  ]
  const articles = [
    {
      id: 1,
      title: '10 Essential Personal Hygiene Practices',
      description: 'Learn about the ten key personal hygiene practices for maintaining good health.',
      link: 'https://example.com/article1',
    },
    // Add more articles...
  ];

  const videos = [
    {
      id: 1,
      title: 'Proper Handwashing Technique',
      description: 'Watch this video to learn the correct way to wash your hands to prevent the spread of germs.',
      link: 'https://youtube.com/video1',
    },
    // Add more videos...
  ];

  const infographics = [
    {
      id: 1,
      title: 'Food Safety Tips',
      description: 'This infographic provides essential food safety tips to prevent foodborne illnesses.',
      image: 'food-safety-infographic.jpg',
    },
    // Add more infographics...
  ];

  const downloads = [
    {
      id: 1,
      title: 'Healthy Habits Checklist for Kids',
      description: 'Download this checklist to teach kids about healthy habits such as handwashing and teeth brushing.',
      file: 'healthy-habits-checklist.pdf',
    },
    // Add more downloadable PDFs...
  ];

  const websites = [
    {
      id: 1,
      title: 'Centers for Disease Control and Prevention (CDC)',
      description: 'Access comprehensive health and hygiene information from the CDC.',
      link: 'https://www.cdc.gov',
    },
    // Add more recommended websites...
  ];

  const faqs = [
    {
      id: 1,
      question: 'How often should I wash my hands?',
      answer: 'It is recommended to wash your hands for at least 20 seconds, especially before eating and after using the restroom.',
    },
    {
      id: 2,
      question: 'How  should I  my head?',
      answer: 'It is recommended to wash your hands for at least 20 seconds, especially before eating and after using the restroom.',
    },
    // Add more frequently asked questions...
  ];
    // Add more local services...

  let player;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = h1;
    link.download = 'filename.pdf';
    link.click();
  };

  const handleQuestionClick = (id) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(id);
    }
  };

  useEffect(()=>{
    AOS.init({duration:2000,offset:300});
  },[])

  return (
    <Layout>
      <section className="slider-section" data-aos="zoom-in">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image)=>{ return (
          <SwiperSlide><img src={image} /></SwiperSlide>
        )
        })}
      </Swiper>
      </section>
  
    <div className="resources-page">
      <section className="who-section">
        <div className="who-description">
          <h2 data-aos="fade">About WHO</h2>
          <p data-aos="fade-right">Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It provides organisms with nutrients, which can be metabolized to create energy and chemical structures. Failure to obtain sufficient nutrients causes malnutrition. Nutritional science is the study of nutrition, though it typically emphasizes human nutrition.

The type of organism determines what nutrients it needs and how it obtains them. Organisms obtain nutrients by consuming organic matter, consuming inorganic matter, absorbing light, or some combination of these. Some can produce nutrients internally by consuming basic elements, while some must consume other organisms to obtain pre-existing nutrients. All forms of life require carbon, energy, and water as well as various other molecules. Animals require complex nutrients such as carbohydrates, lipids, and proteins, obtaining them by consuming other organisms. Humans have developed agriculture and cooking to replace foraging and advance human nutrition. Plants acquire nutrients through the soil and the atmosphere. Fungi absorb nutrients around them by breaking them down and absorbing them through the mycelium.</p>
        </div>
        <div className="who-image" data-aos="fade-left">
          <img src="https://i1.wp.com/www.ip-watch.org/weblog/wp-content/uploads/2016/01/WHO-logo.png?ssl=1" />
        </div>
      </section>

      <section className="vaccination-section">
        <h2 className="vaccination-heading" data-aos="fade">Vaccination and Prevention</h2>
        <div className="vaccination-video">
          <div id="player"></div>
          {/* <div id="placeholder-text">Click to play the video</div> */}
          <iframe data-aos="zoom-in" id="ytplayer"type="text/html" width="560" height="315" src="https://www.youtube.com/embed/O4vGOjOG2Ns?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {/* <div className="video-container">
          <video controls>
            <source src="https://youtu.be/O4vGOjOG2Ns" type="video/mp4" />
          </video>
          <div className="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div> */}
      </section>

      <section className="disease-prevention-section">
        <div className="disease-prevention-gif" data-aos="fade-right">
          <img src="https://media0.giphy.com/media/3WuYIcGImWfkiYXxeI/200w.webp?cid=ecf05e47husy6shbs1gespg27k72wxxfovzh01pyd5fcg7gi&ep=v1_gifs_search&rid=200w.webp&ct=g" />
        </div>
        <div className="disease-prevention-description" data-aos="fade-left">
          <p>Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It provides organisms with nutrients, which can be metabolized to create energy and chemical structures. Failure to obtain sufficient nutrients causes malnutrition. Nutritional science is the study of nutrition, though it typically emphasizes human nutrition.

The type of organism determines what nutrients it needs and how it obtains them. Organisms obtain nutrients by consuming organic matter, consuming inorganic matter, absorbing light, or some combination of these. Some can produce nutrients internally by consuming basic elements, while some must consume other organisms to obtain pre-existing nutrients. All forms of life require carbon, energy, and water as well as various other molecules. Animals require complex nutrients such as carbohydrates, lipids, and proteins, obtaining them by consuming other organisms. Humans have developed agriculture and cooking to replace foraging and advance human nutrition. Plants acquire nutrients through the soil and the atmosphere. Fungi absorb nutrients around them by breaking them down and absorbing them through the mycelium.</p>
        </div>
      </section>

      <section className="yoga-section">
        <div className="yoga-left-image" data-aos="fade-right">
          <img src="https://tse2.mm.bing.net/th?id=OIP.8jjEffUwDFhQCzzVPwJmQAHaEp&pid=Api&P=0&h=180" />
        </div>
        <div className="yoga-content">
          <h2 data-aos="fade">Yoga for Wellness</h2>
          <p data-aos="flip-left">Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It provides organisms with nutrients, which can be metabolized to create energy and chemical structures. Failure to obtain sufficient nutrients causes malnutrition. Nutritional science is the study of nutrition, though it typically emphasizes human nutrition.

The type of organism determines what nutrients it needs and how it obtains them. Organisms obtain nutrients by consuming organic matter, consuming inorganic matter, absorbing light, or some combination of these. Some can produce nutrients internally by consuming basic elements, while some must consume other organisms to obtain pre-existing nutrients. All forms of life require carbon, energy, and water as well as various other molecules. Animals require complex nutrients such as carbohydrates, lipids, and proteins, obtaining them by consuming other organisms. Humans have developed agriculture and cooking to replace foraging and advance human nutrition. Plants acquire nutrients through the soil and the atmosphere. Fungi absorb nutrients around them by breaking them down and absorbing them through the mycelium.</p>
        </div>
        <div data-aos="fade-left" className="yoga-right-image">
          <img src="https://tse3.mm.bing.net/th?id=OIP.WKTRnMhuWeri92x5ow9ycgHaEK&pid=Api&P=0&h=180" />
        </div>
      </section>

      <section className='yoga-video' data-aos="zoom-in">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Eml2xnoLpYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>

      <section className="download-cards-section">
        <div className="card-container">
          <div className="card" data-aos="fade-right" data-aos-delay="0">
            <img src="https://tse3.mm.bing.net/th?id=OIP.cjI6TRCMfyRiefRsTOnCkwHaE8&pid=Api&P=0&h=180" alt="Card 1" className="card-image" />
            <div className="card-overlay">
              <FaDownload className="card-overlay-icon" onClick={handleDownload} />
              {/* Download PDF */}
            </div>
          </div>
          <div className="card" data-aos="fade-right" data-aos-delay="200">
            <img src="https://tse2.mm.bing.net/th?id=OIP.qPFEnPSlz_j8iyIEHb60ygHaFj&pid=Api&P=0&h=180" alt="Card 2" className="card-image" />
            <div className="card-overlay">
              <FaDownload className="card-overlay-icon" onClick={handleDownload} />
              {/* Download PDF */}
            </div>
          </div>
          <div className="card" data-aos="fade-right" data-aos-delay="400">
            <img src="https://tse3.mm.bing.net/th?id=OIP.dw16OM11X4gZHjL42l0YSAHaD-&pid=Api&P=0&h=180" alt="Card 3" className="card-image" />
            <div className="card-overlay">
              <FaDownload className="card-overlay-icon" onClick={handleDownload} />
              {/* Download PDF */}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" data-aos="fade">
        {faqs.map((faq)=>{ return <>
          <div className="faq-question" key={faq.id}>
            <div
              className={`faq-question-header ${expandedQuestion === faq.id ? 'expanded' : ''}`}
              onClick={() => handleQuestionClick(faq.id)}
            >
              <h3>{faq.question}</h3>
              {expandedQuestion === faq.id ? (
                <FaChevronUp className="faq-arrow" />
              ) : (
                <FaChevronDown className="faq-arrow" />
              )}
            </div>
            {expandedQuestion === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
          </>
        })}
      </section>
    </div>
    </Layout>
  )
}

export default Resources