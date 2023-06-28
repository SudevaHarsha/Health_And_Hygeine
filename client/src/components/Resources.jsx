import React,{useEffect, useState} from 'react';
import Layout from '../layout/Layout';
import {FaDownload,FaChevronDown, FaChevronUp} from "react-icons/fa";
import "./resources.css";
import h1 from "../h1.pdf";
import h2 from "../kehe103.pdf";
import h3 from "../h3.pdf";
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzra6f4mX-2rVFoaizL2exR4ZdJExn58nnOg&usqp=CAU",
    "https://tse1.mm.bing.net/th?id=OIP.jQp29hf30YBMSi4KXev2fAHaK4&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.28cLZU6hNoThUzpOiTqaSgHaE8&pid=Api&P=0&h=180",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_kvEjP-K5tQyTGzRDPkqS9_HIZD02PyY1Q&usqp=CAU",
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
      question: 'What is the relationship between health and hygiene?',
      answer: 'Physical and mental health are equally important and require a hygienic condition. Health and hygiene are two terms that are correlated. Hygiene can be outlined as the practice of a few habits in order to maintain good health, overall. Maintenance of hygiene can be at the community level (social hygiene) or personal level (personal hygiene).',
    },
    {
      id: 3,
      question: 'What is maintenance of Hygiene?',
      answer: 'Maintenance of hygiene can be at the community level (social hygiene) or personal level (personal hygiene). Personal hygiene: It covers physical exercise, cleanliness, sleep, proper rest and other related practices such as keeping away from consuming alcohol, smoking, drugs etc.',
    },
    {
      id: 4,
      question: 'Why is good hygiene important?',
      answer: 'Good hygiene is critical for preventing the spread of infectious diseases and helping children lead long, healthy lives. It also prevents them from missing school, resulting in better learning outcomes. For families, good hygiene means avoiding illness and spending less on health care.'
    },
    {
      id: 5,
      question: 'What is the difference between social hygiene and personal hygiene?',
      answer: 'It is recommended to wash your hands for at least 20 seconds, especially before eating and after using the restroom.',
    },
    {
      id: 1,
      question: 'How often should I wash my hands?',
      answer: 'Personal hygiene: It covers physical exercise, cleanliness, sleep, proper rest and other related practices such as keeping away from consuming alcohol, smoking, drugs etc. Many diseases can be prevented to a great extent just by maintaining good personal hygiene. Social hygiene: The surrounding and other public places around us are our society.',
    },
    // Add more frequently asked questions...
  ];
    // Add more local services...

  let player;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = h1;
    link.download = 'Health tips.pdf';
    link.click();
  };
  const handleDownload2 = () => {
    const link = document.createElement('a');
    link.href = h2;
    link.download = 'Nutrition.pdf';
    link.click();
  };
  const handleDownload3 = () => {
    const link = document.createElement('a');
    link.href = h3;
    link.download = 'diseases propagation.pdf';
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
      
  
    <div className="resources-page">
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
      <section className="who-section">
        <div className="who-description">
          <h2 data-aos="fade">About WHO</h2>
          <p data-aos="fade-right">The World Health Organization (WHO) is a specialized agency of the United Nations responsible for international public health.[2] It is headquartered in Geneva, Switzerland and has six regional offices and 150 field offices worldwide.[3]

The WHO was established on 7 April 1948 and convened its first meeting on 24 July of that year.[4][5] It incorporated the assets, personnel, and duties of the League of Nations' Health Organization and the Paris-based Office International d'Hygiène Publique, including the International Classification of Diseases (ICD).[6] The agency's work began in earnest in 1951 after a significant infusion of financial and technical resources.[7]

The WHO's official mandate is to promote health and safety while helping the vulnerable worldwide. It provides technical assistance to countries, sets international health standards, collects data on global health issues, and serves as a forum for scientific or policy discussions related to health.[2] Its official publication, the World Health Report, provides assessments of worldwide health topics</p>
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
          <p>nfections are caused by microscopic organisms known as pathogens—bacteria, viruses, fungi, or parasites—that enter the body, multiply, and interfere with normal functions. Infectious diseases are a leading cause of illness and death in the United States and around the world. For certain people--particularly those with underlying illnesses like heart disease or cancer, those who have serious injuries, or those who are taking medications that weaken the immune system—it's more difficult to avoid getting sick with an infection. Living in an affluent country like the United States, the threat we face from deadly viruses, bacteria, and parasites can seem remote, but these infectious microbes are ever present among us, according to Dr. Michael Klompas, writing in the Harvard Medical School Special Health Report Viruses and Disease. Dr. Klompas is an infectious disease specialist at Harvard-affiliated Brigham and Women's Hospital. However, for most healthy people, following a few basic principles can go a long way in helping to prevent infections.</p>
        </div>
      </section>

      <section className="yoga-section">
        <div className="yoga-left-image" data-aos="fade-right">
          <img src="https://tse2.mm.bing.net/th?id=OIP.8jjEffUwDFhQCzzVPwJmQAHaEp&pid=Api&P=0&h=180" />
        </div>
        <div className="yoga-content">
          <h2 data-aos="fade">Yoga for Wellness</h2>
          <p data-aos="flip-left">Yoga (/ˈjoʊɡə/ (listen);[1] Sanskrit: योग, lit. 'yoke' or 'union' pronounced [joːɡɐ]) is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha). There is a wide variety of schools of yoga, practices, and goals[2] in Hinduism, Buddhism, and Jainism,[3][4][5] and traditional and modern yoga is practiced worldwide.[6]

Yoga-like practices were first mentioned in the ancient Hindu text known as Rigveda.[7] Yoga is referred to in a number of the Upanishads.[8][9][10] The first known appearance of the word "yoga" with the same meaning as the modern term is in the Katha Upanishad,[11][12] which was probably composed between the fifth and third centuries BCE.[13][14] Yoga continued to develop as a systematic study and practice during the fifth and sixth centuries BCE in ancient India's ascetic and Śramaṇa movements.[</p>
        </div>
        <div data-aos="fade-left" className="yoga-right-image">
          <img src="https://tse3.mm.bing.net/th?id=OIP.WKTRnMhuWeri92x5ow9ycgHaEK&pid=Api&P=0&h=180" />
        </div>
      </section>

      <section className='yoga-video' data-aos="zoom-in">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Eml2xnoLpYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>

      <section className="download-cards-section">
        <h3 className="download-heading" data-aos="fade">Downloadable Resources</h3>
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
              <FaDownload className="card-overlay-icon" onClick={handleDownload2} />
              {/* Download PDF */}
            </div>
          </div>
          <div className="card" data-aos="fade-right" data-aos-delay="400">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/81a8OIliJ%2BL.png" alt="Card 3" className="card-image" />
            <div className="card-overlay">
              <FaDownload className="card-overlay-icon" onClick={handleDownload3} />
              {/* Download PDF */}
            </div>
          </div>
        </div>
      </section>

      <h3 className='faq-heading' data-aos="fade">Faq's</h3>
      <section className="faq-section">
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