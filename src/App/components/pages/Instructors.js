import React from 'react';
import { LoggedInFooter } from '../Footers';
import { LoggedInHeader } from '../Headers';
import { CourseList, EnrolledCourseList, InstructorList } from '../CardsList';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const Instructors = () => {
    const courseid = 2;
    const instructors = [
        {
          thumbnail: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',  
          name: 'Samuel Ohene Gyan',
            emailAddress: 'sogyan@openlearn.com',
            phoneNumber: '0201231234',
            role: 'React Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic neque cum non temporibus ullam ea, sequi vitae? Corrupti voluptatem nostrum quibusdam perferendis cum rem ab, ea itaque alias similique?',
            course: courseid,
            location: 'Sydney, Australia',
            linkedin: 'https://www.linkedin.com/in/israel-otchere-77a676199/'
            // select title from courses where courseid = courseid
        },
        {
          thumbnail: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',  
          name: 'Grace Osei',
            emailAddress: 'graceosei@example.com',
            phoneNumber: '0245678901',
            role: 'Full Stack Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic neque cum non temporibus ullam ea, sequi vitae? Corrupti voluptatem nostrum quibusdam perferendis cum rem ab, ea itaque alias similique?',
            course: courseid,
            location: 'Leeds, England',
            linkedin: 'https://www.linkedin.com/in/israel-otchere-77a676199/'
          },
          {
            thumbnail: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
            name: 'Kwame Boateng',
            emailAddress: 'kwameboateng@example.com',
            phoneNumber: '0278901234',
            role: 'UI/UX Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic neque cum non temporibus ullam ea, sequi vitae? Corrupti voluptatem nostrum quibusdam perferendis cum rem ab, ea itaque alias similique?',
            course: courseid,
            location: 'London, England',
            linkedin: 'https://www.linkedin.com/in/israel-otchere-77a676199/'
          },
          {
            thumbnail: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
            name: 'Ama Mensah',
            emailAddress: 'amamensah@example.com',
            phoneNumber: '0263456789',
            role: 'Data Analyst',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic neque cum non temporibus ullam ea, sequi vitae? Corrupti voluptatem nostrum quibusdam perferendis cum rem ab, ea itaque alias similique?',
            course: courseid,
            location: 'Kumasi, Ghana',
            linkedin: 'https://www.linkedin.com/in/israel-otchere-77a676199/'
          },
          {
            thumbnail: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
            name: 'Kwesi Mensah',
            emailAddress: 'kwesimensah@example.com',
            phoneNumber: '0209876543',
            role: 'Backend Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic neque cum non temporibus ullam ea, sequi vitae? Corrupti voluptatem nostrum quibusdam perferendis cum rem ab, ea itaque alias similique?',
            course: courseid,
            location: 'Accra, Ghana',
            linkedin: 'https://www.linkedin.com/in/israel-otchere-77a676199/'
          }
    ]

    return(
        <>
            <LoggedInHeader />
            <div className='page-heading'>
                <Link to='/profiles' className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
                <h3>Instructors</h3>
            </div>
            <section className='list-component-container'>
              <InstructorList instructors={instructors} />
            </section>
            <LoggedInFooter />
        </>
    );
};

export default Instructors;