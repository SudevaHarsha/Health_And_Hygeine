import React,{useEffect, useState} from 'react'
import Layout from '../layout/Layout'
import NewsCard from './NewsCard';

const News = () => {
  const newsData = [
    {
      id: 1,
      image: `https://etimg.etb2bimg.com/photo/101134748.cms`,
      title: 'Influenza A(H1N1) variant virus - Brazil',
      description: 'The World Health Organisation (WHO) announced last month that COVID was now "an  ..',
      origin: 'web',
      publishedDaysAgo: 1,
      fullArticle: `On 7 June 2023, Brazil notified the World Health Organization (WHO) of a fatal laboratory-confirmed human case of infection with a swine-origin influenza A(H1N1) variant (v) virus in the inner state of Paraná.

      Sporadic human cases of influenza A(H1N1)v have been reported previously, including from Brazil. According to the International Health Regulations (IHR) 2005, a human infection caused by a novel influenza A virus subtype is an event that has the potential for high public health impact and must be notified to the WHO.
      
      Based on the information currently available, WHO considers this a sporadic case, and there is no evidence of person-to-person transmission of this event. The likelihood of community-level spread among humans and/or international disease spread through humans is low.
      
      Description of the case
      
      On 7 June 2023, the Brazil IHR National Focal Point (NFP) notified WHO of a fatal human infection caused by a swine-origin influenza A(H1N1)v virus detected by the National Influenza Centre (NIC), Oswaldo Cruz Foundation, Rio de Janeiro.
      
      The patient was a 42-year-old woman with underlying medical conditions who lived near a swine farm. She developed fever, headache, sore throat, and abdominal pain on 1 May 2023 and was hospitalized on 3 May with a severe acute respiratory infection. On 4 May, the patient was admitted to the Intensive Care Unit (ICU) and she passed away on 5 May.
      
      Ongoing investigations reported that the patient did not have any direct contact with pigs, however, two of her close contacts worked at the swine farm. The two contacts did not develop respiratory disease and tested negative for influenza. To date, no human-to-human transmission associated with this case has been identified. 
      
      `,
    },
    {
      id: 2,
      image:` https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/12/full/1683872038-0758.jpeg?im=FeatureCrop,width=826,height=465`,
      title: 'Plant-based meal for low BMI children',
      description: 'Researchers from Massachusetts General Hospital and Boston Children..',
      origin: 'News Source B',
      publishedDaysAgo: 4,
      fullArticle: 'Taking a "food is medicine" approach, according to a new study undertaken by experts at the Mass General Brigham hospital system, could increase nutrition security for families while simultaneously lowering children body mass index (BMI).Researchers from Massachusetts General Hospital and Boston Children Hospital explored if providing weekly plant-based snacks to families seeking food assistance during the epidemic affected children weight.The team found an association between increasing receipt of food packages and decreased BMI. The findings, published in the journal Preventing Chronic Disease, add to a growing body of evidence that providing plant-based foods could be a useful strategy to prevent childhood obesity in children from food-insecure families. "Its important to encourage healthy eating habits during childhood to help prevent co-morbidities associated with obesity later in life, but many families to do not have access to expensive healthy foods, such as produce," said senior author Lauren Fiechtner, MD, MPH, Director of the Pediatric Nutrition Center at Mass General for Children and Health and Research Advisor at The Greater Boston Food Bank. "Food pantries like MGH Revere that can provide families with healthy foods are a huge help in making sure that kids have a long, healthy future and have the best cardiovascular and metabolic health possible from a young age.Food insecurity increased by 55% percent in the United States in 2020, affecting 42% of households with children. This increase was driven by a variety of factors, such as the economic impacts of the pandemic, the closure of schools, and disruption of food supply chains. As food insecurity increased, so did the prevalence of childhood obesity, rising from 19.3% to 22.4% between August 2019 and August 2020. For families dealing with food insecurity, the challenge is usually one of food quality as much as food quantity."Children in families with food insecurity are frequently skipping meals or skipping food for a whole day because their family does not have enough money for food," said Fiechtner. "One way for parents to stretch a tight food budget and make sure their children are at least eating something is to buy the cheapest foods available, which are often not nutritious and contribute to obesity and other health problems."',
},
    {
      id: 3,
      image: 'https://static01.nyt.com/images/2021/07/13/science/12SCI-BRODY-HANDWASHING/12SCI-BRODY-HANDWASHING-jumbo.jpg?quality=75&auto=webp',
      title: 'The Pandemic Habit We Should Not Break',
      description: 'As we get back into the world and the germs that inhabit it, we shouldn’t drop the hand-washing habits ...',
      origin: 'News Source C',
      publishedDaysAgo: 2,
      fullArticle: 'After a year of obsessive 20-second hand-washings every time I touched something from outside my home, I think I should have stocked up on hand cream, not toilet paper, at the start of the pandemic. It was certainly not a good time for CVS to discontinue my favorite product, Healthy Hands lotion, which could have kept my skin from resembling sandpaper these many months.Nonetheless, I don’t regret this habit that, along with consistent mask-wearing and social distancing, helped me remain hale and hearty while waves of Covid-19 ravaged New York City. Not only did I stay free of the coronavirus, I never even got a sniffle despite daily outdoor exercise and dog walks and a stubborn refusal to let others do my grocery shopping.Now, with many people seeming to have caught a cold in recent weeks as we get back into the world and drop our guard, it’s a good reminder that we shouldn’t drop the hand-washing habits we learned during the pandemic.On average, our hands come into contact with many hundreds of surfaces a day, exposing them to hundreds of thousands of microorganisms. Fortunately, most are innocuous. Still, given that we touch our faces about 16 or more times an hour, without proper hand hygiene, we risk the chance of introducing a not-so-harmless infectious organism, including the Delta variant of the coronavirus, into our mouths, noses or eyes.',
},
    {
      id: 4,
      image: 'https://tse1.mm.bing.net/th?id=OIP.aWopzAtJS75VucK_niZxbgHaFj&pid=Api&P=0&h=180',
      title: 'WHO calls for better hand hygiene and other infection control practices',
      description: 'WHO’s survey on implementation of infection prevention highlights the need in the availability of good hand hygiene ',
      origin: 'web',
      publishedDaysAgo: 3,
      fullArticle: 'Hand Hygiene Day, 5 May is more important than ever, to help sustain the promotion of this basic but critical action.This action, that takes just a few seconds, does save lives! WHO calls upon all key players around this slogan Seconds save lives – clean your hands!WHO has also declared 2021 the “Year of the Health and Care Worker”. In order to protect these vital workers, evidence has shown that appropriate hand hygiene practices reduce infections during care delivery. So, engaging different health professionals, as well as patients and everyone in the society in the World Hand Hygiene Day 2021 is critical also to supporting the “Year of Health and Care Workers”.Health care workers’ compliance with hand hygiene practices is one of the key performance indicators for IPC, patient safety and quality of health services worldwide. The new monitoring portal can play an important part in improving this.',
},
    {
      id: 5,
      image: 'https://www.livemint.com/lm-img/img/2023/06/24/600x338/Covid_1687567637400_1687567637694.JPG',
      title: 'Covid-19 origin mystery: ‘No direct evidence that it started in…’, says US intelligence report',
      description: 'US intelligence agencies have found no direct evidence to suggest the Covid-19 pandemic  ... ',
      origin: 'web',
      publishedDaysAgo: 4,
      fullArticle: '“There is no direct evidence found that the Covid-19 pandemic stemmed from an incident at China’s Wuhan Institute of Virology," a four-page report by US intelligence agencies said on Friday. It said the intelligence agencies could not rule out the possibility that the virus came from a laboratory. However, the agencies have not been to discover the Covid-19 pandemic origin, according to a report published by Reuters. "The Central Intelligence Agency and another agency remain unable to determine the precise origin of the Covid-19 pandemic, as both (natural and lab) hypotheses rely on significant assumptions or face challenges with conflicting reporting," the report said.The agencies said that while "extensive work" had been conducted on coronaviruses at the Wuhan Institute (WIV), they had not found evidence of a specific incident that could have caused the outbreak."We continue to have no indication that the WIVs pre-pandemic research holdings included SARSCoV-2 or a close progenitor, nor any direct evidence that a specific research-related incident occurred involving WIV personnel before the pandemic that could have caused the COVID pandemic," the report added.The SARS-CoV-2 virus was first identified in the Chinese city of Wuhan in December 2019 before fanning out around the world and killing nearly 7 million people.Earlier in April, another report suggested that illegally traded wild animals in the Chinese city had triggered the coronavirus pandemic. But researchers have published the first-ever peer-reviewed analysis of biological evidence taken from the Wuhan wet market.“The analysis confirms that swabs from the Huanan Seafood Wholesale Market — which closed in January 2020 and has long been linked to the start of the pandemic — contained genetic material from wild animals and tested positive for SARS-CoV-2," the paper said.Meanwhile, the World Health Organization reiterated calls for China to share information, insisting that all hypotheses would continue to remain on the table until this happened.Data from the early days of the COVID pandemic was briefly uploaded by Chinese scientists to an international database last month. It included genetic sequences found in more than 1,000 environmental and animal samples taken in January 2020 at the Huanan seafood market in Wuhan.',
},
    {
      id: 6,
      image: 'https://static.toiimg.com/thumb/msid-4369140,imgsize-111966,width-400,resizemode-4/4369140.jpg',
      title: 'Exploring the Pros and Cons of Quick Weight Loss Diets',
      description: 'Losing weight is a common goal for many individuals seeking to improve their health and appearance... ',
      origin: 'web',
      publishedDaysAgo: 4,
      fullArticle: 'Understanding Quick Weight Loss Diets:Quick weight loss diets typically involve severe calorie restriction, elimination of entire food groups, or the consumption of specific food combinations. These diets often promise significant weight loss within a short period, usually a few weeks or months.Potential Benefits of Quick Weight Loss Diets:Rapid initial weight loss: Quick weight loss diets may yield noticeable results in a short time, which can provide motivation and boost confidence.Structured approach: These diets often provide specific guidelines and meal plans, making it easier for individuals to follow a structured eating plan.The Drawbacks of Quick Weight Loss Diets:Nutrient deficiencies: Severely restricting calories or eliminating food groups can lead to nutrient deficiencies, affecting overall health and well-being.Muscle loss: Rapid weight loss can result in the loss of lean muscle mass, which can negatively impact metabolism and long-term weight management.Unsustainable approach: Quick weight loss diets are often challenging to maintain over the long term, leading to weight regain once the diet is discontinued.Potential Health Risks:Reduced metabolic rate: Severe calorie restriction can slow down the bodys metabolic rate, making it harder to lose weight in the future.Gallstone formation: Rapid weight loss may increase the risk of gallstone formation, particularly in individuals predisposed to gallbladder issues.Emotional and psychological impact: Strict dieting can contribute to feelings of deprivation, frustration, and an unhealthy relationship with food.A Balanced Approach to Weight Loss:Instead of resorting to quick weight loss diets, adopting a balanced and sustainable approach is often recommended. This includes:Consistently consuming a well-rounded diet that includes fruits, vegetables, whole grains, lean proteins, and healthy fats.Engaging in regular physical activity that combines cardiovascular exercise, strength training, and flexibility exercises.Establishing realistic weight loss goals and focusing on long-term lifestyle changes rather than short-term fixes.',
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