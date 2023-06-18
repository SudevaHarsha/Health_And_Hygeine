import React, { useState } from 'react';

const NewsCard = ({ news,onClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
    onClick();
  };

  console.log(news);
  return (
    <div className={`news-card ${expanded ? 'expanded' : ''}`}  onClick={handleCardClick}>
      <div>
        <div className={`image-container ${expanded ? 'expanded' : ''}`}>
          <img className={` ${expanded ? 'expanded' : ''}`} src={news.image} alt={news.title} />
        </div>
        <div className="content">
          <h2>{news.title}</h2>
          {!expanded && <p className="description">{news.description}</p>}
          <div className="metadata">
            <p className="origin">{news.origin}</p>
            <p className="published-days-ago">{`${news.publishedDaysAgo} days ago`}</p>
          </div>
      </div>
        </div>
        <div className='complete-article'>
          {expanded && <p className="full-article">{news.fullArticle}</p>}
        </div>
      </div>
  );
};

export default NewsCard;
