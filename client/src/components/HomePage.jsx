import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../layout/Layout'
import "./HomePage.css"
import Card from './Card'
import AOS from "aos";
import "aos/dist/aos.css";
import he from "../images/i7.png"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const HomePage = () => {
  const [activities,setActivities] = useState([]);
  const images = [
    "https://tse1.mm.bing.net/th?id=OIP.mqxyLa9UevrlHN_EwumcGQHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.zlrI1uVuzrm02stclp3UUAHaCo&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.0Pch2nH39G2bLJ21Nyq2ZwHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.28cLZU6hNoThUzpOiTqaSgHaE8&pid=Api&P=0&h=180",
    "https://s3-ap-northeast-1.amazonaws.com/assets-eaglenews/2018/05/Australia-Binhi-cleanup-03.jpg",
  ]

  const getAllActivities =async()=>{
    try{
        const res = await axios.get("https://healthandhygeinebackend-huew.onrender.com/api/v1/activity/activity");
        setActivities(res?.data?.activity);          
    }catch(error){
        console.log(error);
    }       
}

  useEffect(()=>{
    AOS.init({duration:2000,offset:300});
  },[]);

  useEffect(()=>{
    getAllActivities();
  },[])
  return(
    <Layout>
        <div className="home-page">
      <div className="hero-slider" data-aos="zoom-in">
        <section className="slider-section">
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
            /* navigation={true} */
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((image)=>{ return (
              <SwiperSlide><img src={image} /></SwiperSlide>
            )
            })}
          </Swiper>
        </section>
      </div>

      <h2 className="section-heading" data-aos="fade-up">HEALTH</h2>
      <div className="gif-container" data-aos="zoom-in">
        <img src="https://media0.giphy.com/media/6lfloiq6Mkv57OZUg5/200w.webp?cid=ecf05e47g7liwzd17f9cz4v5xp1oxckjhylthncm80j1z9e7&ep=v1_gifs_search&rid=200w.webp&ct=g" alt="GIF" className="gif" />
        {/* <p className="gif-caption">Caption text on the GIF</p> */}
      </div>

      <h2 className="section-heading" data-aos="fade-up">HYGIENE</h2>
      <div className="hygiene-container">
        <img src="http://image.slidesharecdn.com/personalhygienegroomingslideshare-141002040529-phpapp01/95/personal-hygiene-grooming-3-638.jpg?cb=1424537143" alt="Hygiene" className="hygiene-image" data-aos="fade-right" data-aos-delay="100" />
        <p className="hygiene-description" data-aos="fade-in">Hygiene is a series of practices performed to preserve health. According to the World Health Organization (WHO), "Hygiene refers to conditions and practices that help to maintain health and prevent the spread of diseases."[2] Personal hygiene refers to maintaining the body's cleanliness. Hygiene activities can be grouped into the following: home and everyday hygiene, personal hygiene, medical hygiene, sleep hygiene and food hygiene. Home and every day hygiene includes hand washing, respiratory hygiene, food hygiene at home, hygiene in the kitchen, hygiene in the bathroom, laundry hygiene and medical hygiene at home.

Many people equate hygiene with 'cleanliness', but hygiene is a broad term. It includes such personal habit choices as how frequently to take a shower or bath, wash hands, trim fingernails, and wash clothes. It also includes attention to keeping surfaces in the home and workplace clean, including bathroom facilities. Adherence to regular hygiene practices is often regarded as a socially responsible and respectable behavior, while neglecting proper hygiene can be perceived as unclean or unsanitary, and may be considered socially unacceptable or disrespectful, while also posing a risk to public health.Hygiene in a variety of settings plays an important role in preventing the spread of infectious diseases.[8] It includes procedures used in a variety of domestic situations such as hand hygiene, respiratory hygiene, food and water hygiene, general home hygiene (hygiene of environmental sites and surfaces), care of domestic animals, and home health care (the care of those who are at greater risk of infection).[citation needed]

At present, these components of hygiene tend to be regarded as separate issues, although based on the same underlying microbiological principles. Preventing the spread of diseases means breaking the chain of infection transmission. Simply put, if the chain of infection is broken, infection cannot spread. "Targeted hygiene" is based on identifying the routes of pathogen spread in the home and introducing hygiene practices at critical times to break the chain of infection.[9] It is using a risk-based approach based on Hazard Analysis Critical Control Point (HACCP).[citation needed]
</p>
      </div>

      {/* <div className="card-container">
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
        <Card text={"hello"} image={"https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180"} />
      </div>
 */}
      <h3 className='section-heading' data-aos="fade-up">Various Diseases</h3>
      <div className='home-cardcontainer'>
        <div className="home-card" data-aos="fade-right" data-aos-delay="0">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse1.mm.bing.net/th?id=OIP.q2XFdKncIXd9TatXjI5m6wHaE8&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Preventing typhoid fever is crucial in regions where the disease is prevalent. To reduce the risk of infection, it is important to practice safe food and water habits by consuming only clean and properly cooked food and drinking treated water. Maintaining good hygiene is essential, including thorough handwashing before eating and after using the toilet. Vaccination is an effective preventive measure, with both injectable and oral vaccines available. Proper sanitation and waste management systems help prevent contamination of food and water sources. When traveling to typhoid-endemic regions, taking precautions such as drinking safe water and eating at reputable establishments is important. Health education and awareness about typhoid prevention play a vital role in promoting safe practices. By implementing these preventive measures, individuals can significantly reduce their risk of typhoid infection and contribute to the overall efforts in controlling this bacterial illness.</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="200">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://www.news-medical.net/image.axd?picture=2018%2f5%2fshutterstock_KATERYNA_KON-2.jpg" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Preventing malaria is crucial in regions where the disease is prevalent. Malaria, a mosquito-borne illness caused by parasites, poses a significant health threat. However, by implementing effective prevention strategies, the risk of infection can be greatly reduced.

One of the most effective preventive measures is the use of insecticide-treated bed nets (ITNs). Sleeping under ITNs creates a physical barrier, preventing mosquito bites during the night. These nets are treated with insecticides that repel and kill mosquitoes, making them highly effective in preventing malaria transmission.

Indoor residual spraying (IRS) is another important prevention method. By applying insecticides to the interior walls of houses and structures, mosquitoes that come into contact with these surfaces are killed, reducing the overall mosquito population and interrupting the transmission cycle.

Taking prescribed antimalarial medications is crucial for individuals residing in or traveling to malaria-endemic areas. These medications act as preventive measures by suppressing the malaria parasites in the body, preventing the onset of the disease. Consulting healthcare professionals for appropriate medications and dosages is essential.
</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="400">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://www.verywellhealth.com/thmb/jbHZYjyqyjYbhg7FHZF84alF50M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cholera-symptoms-5ad8b4591d64040039e84e71.png" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>
Preventing cholera is crucial in regions where the disease is prevalent. Cholera is a bacterial infection caused by the bacterium Vibrio cholerae, typically transmitted through contaminated food or water. To prevent cholera, it is essential to practice proper hygiene and sanitation measures. Thoroughly washing hands with soap and clean water before eating and after using the toilet is vital. Consuming safe and clean water is crucial, and it is recommended to drink boiled or treated water from reliable sources. Properly cooking food and avoiding raw or undercooked items can help minimize the risk of infection. Maintaining good sanitation practices, such as using clean and hygienic toilet facilities and disposing of waste properly, is important to prevent the spread of the disease. Promoting health education and raising awareness about cholera prevention play a significant role in reducing its incidence. Vaccination against cholera may also be recommended in high-risk areas. By implementing these preventive measures, individuals can significantly reduce the risk of cholera infection and contribute to the overall efforts in controlling and eliminating this bacterial illness.</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="600">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse2.mm.bing.net/th?id=OIP._4fyIxWDcwQskSuQd7SdpQHaHa&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>
Preventing diarrhea is crucial for maintaining good health and well-being. Diarrhea, characterized by frequent loose and watery bowel movements, can be caused by various factors including contaminated food and water, poor sanitation, and improper hygiene practices. To prevent diarrhea, it is important to practice proper hand hygiene by washing hands thoroughly with soap and clean water before handling food and after using the toilet. Drinking safe and clean water is essential, and it is advisable to boil or treat water from uncertain sources. Consuming well-cooked food and avoiding raw or undercooked items can help minimize the risk of infection. Good sanitation practices, such as using clean and hygienic toilet facilities and proper disposal of human waste, are crucial in preventing the spread of diarrheal diseases. Additionally, promoting health education and awareness about the importance of hygiene, safe food handling, and clean water sources can contribute to preventing diarrhea. By implementing these preventive measures, individuals can significantly reduce the incidence of diarrhea and promote better overall health.</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="800">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse4.mm.bing.net/th?id=OIP.g61xlCTSrGjVT0I-wBLi_AHaJs&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>
Preventing dental caries, also known as tooth decay, is essential for maintaining good oral health. Dental caries occur when bacteria in the mouth produce acids that attack the tooth enamel, leading to cavities. To prevent dental caries, it is important to practice good oral hygiene. This includes brushing teeth at least twice a day with fluoride toothpaste, flossing daily to remove plaque and food particles between the teeth, and using mouthwash to reduce bacteria. Limiting the consumption of sugary and acidic foods and beverages, such as candy, soda, and citrus fruits, can help prevent the formation of dental caries. Regular dental check-ups and professional cleanings are essential to detect and treat any early signs of decay. Fluoride treatments and dental sealants can provide additional protection against tooth decay. Educating individuals about proper oral hygiene practices, promoting a healthy diet, and encouraging regular dental visits are crucial in preventing dental caries. By following these preventive measures, individuals can maintain strong and healthy teeth, preventing the development of dental caries and ensuring optimal oral health.</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="1000">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="http://biocityhealthcare.com/wp-content/uploads/2020/09/What-is-the-Difference-Between-Type-1-and-Type-2-Diabetes-3-1.jpg" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>
Preventing diabetes is crucial for maintaining overall health and well-being. Diabetes is a chronic condition characterized by high blood sugar levels. Adopting a healthy lifestyle can significantly reduce the risk of developing type 2 diabetes, which is the most common form of the disease. Regular physical activity plays a crucial role in diabetes prevention. Engaging in moderate-intensity exercises, such as brisk walking, cycling, or swimming, for at least 150 minutes per week can help improve insulin sensitivity and regulate blood sugar levels. A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats is essential. Avoiding sugary drinks, processed foods, and excessive consumption of refined carbohydrates can lower the risk of diabetes. Maintaining a healthy weight is also important in preventing diabetes. Losing excess weight through a combination of healthy eating and regular exercise can reduce the likelihood of developing the condition. Limiting alcohol consumption and avoiding smoking are additional preventive measures. Regular medical check-ups and screenings for diabetes risk factors are recommended, especially for individuals with a family history of the disease or other risk factors. By adopting these preventive measures and making healthy lifestyle choices, individuals can significantly reduce their risk of developing diabetes and improve their overall health.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-section">
        <img src="https://www.pinerichland.org/cms/lib/PA01001138/Centricity/Domain/972/health%20wellness.png" alt="Resources" className="resources-image" data-aos="fade-up" />
        <Link href="/resources" className="resources-link">Explore Resources</Link>
      </div>
    </div>

    </Layout>
  )
}

export default HomePage