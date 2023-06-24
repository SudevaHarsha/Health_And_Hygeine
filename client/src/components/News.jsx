import React,{useEffect, useState} from 'react'
import Layout from '../layout/Layout'
import NewsCard from './NewsCard';

const News = () => {
  const newsData = [
    {
      id: 1,
      image: `https://tse3.mm.bing.net/th?id=OIP.E3lw1ddUXrA9tkpYzqfHbwHaFr&pid=Api&P=0&h=180`,
      title: 'Breaking News 1',
      description: 'Short description of breaking news 1.',
      origin: 'News Source A',
      publishedDaysAgo: 2,
      fullArticle: `1.Regular Handwashing: One of the most fundamental practices for maintaining good health and hygiene is regular handwashing. Our hands come into contact with countless surfaces throughout the day, accumulating germs and bacteria. By washing our hands frequently with soap and water, especially before eating or preparing food, after using the restroom, or after coughing or sneezing, we can prevent the spread of harmful pathogens and reduce the risk of infections such as colds, flu, and gastrointestinal illnesses.
      <br />
      2.Proper Dental Care: Oral health is an integral part of overall health. Practicing good dental hygiene helps prevent dental caries, gum diseases, and bad breath. Brush your teeth at least twice a day with fluoride toothpaste, floss daily to remove plaque between the teeth, and visit your dentist regularly for check-ups and cleanings. Maintaining proper oral hygiene can also contribute to better cardiovascular health and reduce the risk of certain medical conditions.
      <br />
      3.Regular Physical Activity: Engaging in regular physical activity offers numerous health benefits. Exercise helps in maintaining a healthy weight, strengthening muscles and bones, improving cardiovascular health, and enhancing overall mood and mental well-being. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week. Additionally, incorporate strength training exercises to improve muscle strength and flexibility.
      <br />
      4.Adequate Sleep: Quality sleep is crucial for our overall health and well-being. Lack of sleep can lead to fatigue, impaired cognitive function, weakened immune system, and increased risk of chronic conditions such as obesity, diabetes, and cardiovascular diseases. Aim for 7-9 hours of uninterrupted sleep every night, establish a regular sleep schedule, and create a conducive sleep environment by keeping the bedroom dark, quiet, and comfortable.`,
    },
    {
      id: 2,
      image:` https://tse2.mm.bing.net/th?id=OIP.miDl5C30TCnx6-fE8cPGuAHaHH&pid=Api&P=0&h=180`,
      title: 'Breaking News 2',
      description: 'Short description of breaking news 2.',
      origin: 'News Source B',
      publishedDaysAgo: 4,
      fullArticle: 'Full article of breaking news 2.',
},
    {
      id: 3,
      image: 'news2.jpg',
      title: 'Breaking News 3',
      description: 'Short description of breaking news 2.',
      origin: 'News Source C',
      publishedDaysAgo: 2,
      fullArticle: 'Full article of breaking news 2.',
},
    {
      id: 4,
      image: 'news2.jpg',
      title: 'Breaking News 4',
      description: 'Short description of breaking news 2.',
      origin: 'News Source C',
      publishedDaysAgo: 2,
      fullArticle: 'Full article of breaking news 2.',
},
    {
      id: 5,
      image: 'news2.jpg',
      title: 'Breaking News 5',
      description: 'Short description of breaking news 2.',
      origin: 'News Source C',
      publishedDaysAgo: 2,
      fullArticle: 'Full article of breaking news 2.',
},
    {
      id: 6,
      image: 'news2.jpg',
      title: 'Breaking News 6',
      description: 'Short description of breaking news 2.',
      origin: 'News Source C',
      publishedDaysAgo: 2,
      fullArticle: 'Full article of breaking news 2.',
},
];

    const [expandedCardId, setExpandedCardId] = useState(null);
    const [open, setOpen] = useState(false);
  
    const handleCardClick = (cardId) => {
      setExpandedCardId(cardId);
      setOpen(!open);
    };
  
    const filteredNewsData = expandedCardId&&open ? newsData.filter((news) => news.id === expandedCardId) : newsData;
  
  /* const data = newsData.filter((news)=>{
    return news.id > id;
  })
  console.log(data); */

 /*  const [prevId,setPrevId] = useState();

  const sortAgain = (news)=>{
    news.id= news.id!==0 ? 0 : prevId;
    setPrevId(news.id);
    console.log(news.id);
  }

  useEffect(()=>{
    newsData.sort((a,b)=>a.id-b.id);
  },[prevId]) */
  return (
    <Layout>
        <h1 className='heading'>News</h1>
        <div className="news-page">
        {filteredNewsData.map((news) => (
          <NewsCard key={news.id} news={news} onClick={() => handleCardClick(news.id)} />
        ))}
    </div>
    </Layout>
  )
}

export default News