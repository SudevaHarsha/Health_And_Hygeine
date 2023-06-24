import React from 'react'
import Layout from '../layout/Layout'
import "./HomePage.css"
import Card from './Card'
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const HomePage = () => {
  const images = [
    "https://tse2.mm.bing.net/th?id=OIP.Wlvv15fHG-QSfBHCTIHiygHaDX&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.6h-Qr-Mt0lMrOW3MdvUM9QHaD4&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.jQp29hf30YBMSi4KXev2fAHaK4&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.28cLZU6hNoThUzpOiTqaSgHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.b0X0i36PqxsDdXEsigfqegHaFp&pid=Api&P=0&h=180",
  ]

  useEffect(()=>{
    AOS.init({duration:2000,offset:300});
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
        <p className="hygiene-description" data-aos="fade-in">Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It provides organisms with nutrients, which can be metabolized to create energy and chemical structures. Failure to obtain sufficient nutrients causes malnutrition. Nutritional science is the study of nutrition, though it typically emphasizes human nutrition.

The type of organism determines what nutrients it needs and how it obtains them. Organisms obtain nutrients by consuming organic matter, consuming inorganic matter, absorbing light, or some combination of these. Some can produce nutrients internally by consuming basic elements, while some must consume other organisms to obtain pre-existing nutrients. All forms of life require carbon, energy, and water as well as various other molecules. Animals require complex nutrients such as carbohydrates, lipids, and proteins, obtaining them by consuming other organisms. Humans have developed agriculture and cooking to replace foraging and advance human nutrition. Plants acquire nutrients through the soil and the atmosphere. Fungi absorb nutrients around them by breaking them down and absorbing them through the mycelium.</p>
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
     
      <div className='home-cardcontainer'>
        <div className="home-card" data-aos="fade-right" data-aos-delay="0">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Back of the Card</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="200">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Back of the Card</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="400">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Back of the Card</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="600">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Back of the Card</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="800">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Back of the Card</p>
            </div>
          </div>
        </div>
        <div className="home-card" data-aos="fade-right" data-aos-delay="1000">
          <div className="home-card-inner">
            <div className="home-card-front">
              <img src="https://tse2.mm.bing.net/th?id=OIP.cEZstogG0im_acwxHl3WqgHaE5&pid=Api&P=0&h=180" alt="Card Image" />
              {/* <h3>Front of the Card</h3> */}
            </div>
            <div className="home-card-back">
              <p>Back of the Card</p>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-section">
        <img src="https://tse1.mm.bing.net/th?id=OIP.9A3Xdo0z4nzCd9dvwlvSPQHaDF&pid=Api&P=0&h=180" alt="Resources" className="resources-image" data-aos="fade-up" />
        <Link href="/resources" className="resources-link">Explore Resources</Link>
      </div>
    </div>

    </Layout>
  )
}

export default HomePage