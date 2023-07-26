import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoggedInHeader } from './Headers';
import { LoggedInFooter } from './Footers';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const API_KEY = '3653fb29e533310660db16c609a28363';
const TECH_NEWS_URL = `https://gnews.io/api/v4/search?q=technology&token=${API_KEY}`;

const News = () => {
  const [techNews, setTechNews] = useState([]);

  useEffect(() => {
    axios.get(TECH_NEWS_URL)
      .then(response => {
        setTechNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching tech news:', error);
      });
  }, []);

  return (
    <>
    <LoggedInHeader />
    <div className='page-heading'>
        <Link to='/profiles' className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
        <h3>Techology Related News</h3>
    </div>
    <section className='list-component-container'>
        <div className="card-deck">
            {techNews.map((newsItem, index) => (
                <div className="course-card">
                    {newsItem.image && <img className='course-card-image' src={newsItem.image} alt={newsItem.title} />}
                    <div className="course-card-body">
                        <section className='course-section-1'>
                            <h5 className="course-card-title" style={{fontFamily: 'Jost-SemiBold', fontSize: '0.93vw', color: '#1c1d1f'}}><a href={newsItem.url} target="_blank" rel="noopener noreferrer">{newsItem.title}</a></h5>
                            <p className="course-card-text" style={{fontFamily: 'Jost-Regular', fontSize: '0.83vw', color: '#1c1d1f'}}>{newsItem.description}</p>
                        </section>
                    <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                        <p style={{fontFamily: 'Jost-Regular', fontSize: '0.78vw', color: '#6a85bd'}}>Source: {newsItem.source.name}</p>
                        <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw'}}>Published: {new Date(newsItem.publishedAt).toLocaleString()}</p>
                    </section>
                    </div>
                </div>
            ))}
        </div>
    </section>
    <LoggedInFooter />
    </>
  );
};

export default News;
