import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { LearningPathList } from '../CardsList';

const LearningPaths = () => {
    const learningPaths = [
        {
          title: "Web Development",
          description: "Learn how to build web applications using HTML, CSS, and JavaScript.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 20
        },
        {
          title: "Data Science",
          description: "Master the tools and techniques for working with data, including Python, SQL, and machine learning.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 25
        },
        {
          title: "Mobile App Development",
          description: "Build native mobile apps for iOS and Android using Swift, Kotlin, and React Native.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 15
        },
        {
          title: "Game Development",
          description: "Create your own games using Unity, C#, and 3D graphics.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 18
        },
        {
          title: "Cybersecurity",
          description: "Protect your computer systems and networks from cyber attacks using tools like Wireshark, Nmap, and Metasploit.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 30
        }
      ];

    return(
        <>
            <LoggedInHeader />
            <section className='list-component-container'>
                <h2 style={{textAlign: 'left', background: 'none', fontFamily: 'Jost-SemiBold', display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>Learning Paths <hr /></h2>
                <LearningPathList learningPaths={learningPaths} />
            </section>
            <LoggedInFooter />
        </>
    );
};

export default LearningPaths;