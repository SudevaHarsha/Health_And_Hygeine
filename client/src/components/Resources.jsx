import React from 'react'
import Layout from '../layout/Layout';

const Resources = () => {
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
    // Add more frequently asked questions...
  ];

  const externalResources = [
    {
      id: 1,
      title: 'Clean: The New Science of Skin',
      description: 'Explore the science behind skin health in this informative book by James Hamblin.',
      link: 'https://example.com/book',
    },
    // Add more external resources...
  ];

  const localServices = [
    {
      id: 1,
      name: 'Local Health Clinic',
      description: 'Find a nearby health clinic that offers medical services and consultations.',
      contact: '123-456-7890',
      website: 'https://example.com/clinic',
    },
    // Add more local services...
  ];

  return (
    <Layout>
      <h1>Resources</h1>
      <div className="resources-page">
      <h1>Resources</h1>

      <section>
        <h2>Articles</h2>
        {articles.map((article) => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </section>

      <section>
        <h2>Videos</h2>
        {videos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Video</a>
          </div>
        ))}
      </section>

      <section>
        <h2>Infographics</h2>
        {infographics.map((infographic) => (
          <div key={infographic.id}>
            <h3>{infographic.title}</h3>
            <p>{infographic.description}</p>
            <img src={infographic.image} alt={infographic.title} />
          </div>
        ))}
      </section>

      <section>
        <h2>Downloads</h2>
        {downloads.map((download) => (
          <div key={download.id}>
            <h3>{download.title}</h3>
            <p>{download.description}</p>
            <a href={download.file} download>Download PDF</a>
          </div>
        ))}
      </section>

      <section>
        <h2>Recommended Websites</h2>
        {websites.map((website) => (
          <div key={website.id}>
            <h3>{website.title}</h3>
            <p>{website.description}</p>
            <a href={website.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        ))}
      </section>

      <section>
        <h2>Frequently Asked Questions (FAQs)</h2>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>External Resources</h2>
        {externalResources.map((resource) => (
          <div key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </section>

      <section>
        <h2>Local Services and Support</h2>
        {localServices.map((service) => (
          <div key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Contact: {service.contact}</p>
            <a href={service.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        ))}
      </section>
    </div>
    </Layout>
  )
}

export default Resources