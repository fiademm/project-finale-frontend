import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DefaultHeader } from '../Headers';
import { DefaultFooter } from '../Footers';
import { FilledButton } from '../Buttons';
import { BadgeDetailsModal } from '../Modals';
import ThumbnailImg from '../../images/become-a-student.jpg';

const LandingPage = () => {
    const reviews = [
        {
            id: '1',
            name: "Michael Ohene Gyan", 
            thumbnail: ThumbnailImg,
            comment: "I'm so glad I found this website! It's been a lifesaver for me. I'm a busy working mom and I don't have a lot of time to go to school or take classes. But with this website, I can learn at my own pace and on my own time. I've already taken several courses and I've learned so much. I'm so grateful for this website!"
        },
        {
            id: '2',
            name: "Emmanuel Tenkorang", 
            thumbnail: ThumbnailImg,
            comment: "I've been using this website for a few months now and I'm really impressed. The courses are well-organized and easy to follow. The instructors are knowledgeable and engaging. And the prices are very reasonable. I would definitely recommend this website to anyone who wants to learn new skills or advance their career."
        },
        {
            id: '3',
            name: "Samuel Opare", 
            thumbnail: ThumbnailImg,
            comment: "I'm a lifelong learner and I love to learn new things. I've tried a lot of different online learning platforms, but this one is by far my favorite. The courses are high-quality, the instructors are experts in their field, and the prices are very reasonable. I would definitely recommend this website to anyone who is looking to learn new skills or advance their career."
        }
    ]

    return(
        <>
            <DefaultHeader />
            <section className='home-container'>
                <section className='home-container-1'>
                    <section style={{textAlign: 'left', display: 'flex', flexDirection: 'column', width: '40%', gap: '0.5vw'}}>
                        <h3 style={{fontFamily: "CinzelBold", fontSize: '1.6vw'}}>AVAILABLE COURSES <hr style={{width: '14%', height: '0.2vw', backgroundColor: 'black'}} /></h3>
                        <p style={{fontSize: '1vw'}}>Education is the process of learning knowledge, strengthening one’s decision-making abilities, and getting ready to live a normal life.</p>
                    </section>
                </section>
                <section className='home-container-2'>
                    <section style={{textAlign: 'left', display: 'flex', flexDirection: 'column', width: '40%', gap: '0.5vw'}}>
                        <h3 style={{fontFamily: "CinzelBold", fontSize: '1.6vw'}}>WHY VIRTUAL LEARNING method? <hr style={{width: '14%', height: '0.2vw', backgroundColor: 'black'}} /></h3>
                        <p style={{fontSize: '1vw'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, officiis placeat eveniet numquam rem dolores fuga. Voluptate, mollitia voluptas cumque eveniet, tempora neque ad maiores temporibus autem quo aspernatur fugiat.</p>
                    </section>
                    <section className="review-section">
                        {reviews.map((review) => (
                            <section key={review.id} style={{padding: '1vw 4vw'}}>
                                    <img src={review.thumbnail} alt="" style={{width: '5vw', height: '5vw', borderRadius: '50%'}} />
                                <p>{review.name}</p>
                                <p>{review.comment}</p>
                        </section>
                        ))}
                        
                    </section>
                </section>
                <section className='home-container-3'>
                    <section style={{textAlign: 'left', display: 'flex', flexDirection: 'column', width: '40%', gap: '0.5vw'}}>
                        <h3 style={{fontFamily: "CinzelBold", fontSize: '1.6vw'}}>FROM THE STEMAIDE COMMUNITY <hr style={{width: '14%', height: '0.2vw', backgroundColor: 'black'}} /></h3>
                        <p style={{fontSize: '1vw', color: '#555555'}}>Feedback from some members of the community.</p>
                    </section>
                </section>
                <section className='home-container-4'>
                    <section style={{textAlign: 'left', display: 'flex', flexDirection: 'column', width: '40%', gap: '0.5vw'}}>
                        <h3 style={{fontFamily: "CinzelBold", fontSize: '1.6vw'}}>TRAINING DELIVERY APPROACH <hr style={{width: '14%', height: '0.2vw', backgroundColor: 'black'}} /></h3>
                        <p style={{fontSize: '1vw'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, officiis placeat eveniet numquam rem dolores fuga. Voluptate, mollitia voluptas cumque eveniet, tempora neque ad maiores temporibus autem quo aspernatur fugiat.</p>
                    </section>
                </section>
                <section className='home-container-5'>
                    <section style={{textAlign: 'left', display: 'flex', flexDirection: 'column', width: '40%', gap: '0.5vw'}}>
                        <h3 style={{fontFamily: "CinzelBold", fontSize: '1.6vw'}}>BECOME OUR STUDENT TODAY <hr style={{width: '14%', height: '0.2vw', backgroundColor: 'black'}} /></h3>
                        <p style={{fontSize: '1vw'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, officiis placeat eveniet numquam rem dolores fuga. Voluptate, mollitia voluptas cumque eveniet, tempora neque ad maiores temporibus autem quo aspernatur fugiat.</p>
                    </section>
                    <section className="header-illustration-container">
                        <img src={ThumbnailImg} alt="" style={{height: '24vw', backgroundColor: 'transparent'}} />
                    </section>
                </section>
            </section>
            <DefaultFooter />
        </>
    );
};

export default LandingPage;