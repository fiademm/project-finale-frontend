import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { JobsList } from '../CardsList';


const JobBoard = () => {
    const jobs = [
        {
            id: 1,
            company: 'Nokia',
            position: 'Lead Software Engineer',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            jobType: 'Full Time',
            location: 'Accra, Ghana',
            salary: 3000,
            postedOn: '',
            description: ''
        },
        {
            id: 2,
            company: 'Samsung',
            position: 'Technical Support Assistant',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            jobType: 'Full Time',
            location: 'Tema, Ghana',
            salary: 2500,
            postedOn: '',
            description: ''
        },
        {
            id: 3,
            company: 'PKAYD Technologies',
            position: 'Computer Hardware Specialist',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            jobType: 'Full Time',
            location: 'Zongo Junction, Ghana',
            salary: 1000,
            postedOn: '',
            description: ''
        },
        {
            id: 4,
            company: 'Sydney Towers',
            position: 'Senior Information Technology Manager',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            jobType: 'Full Time',
            location: 'Sydney, Australia',
            salary: 1500,
            postedOn: '',
            description: ''
        },
    ];

    return(
        <>
            <LoggedInHeader />
            <div className='page-heading'>
                <Link to='/profiles' className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
                <h3>Recommended Jobs</h3>
            </div>
            <section className='list-component-container'>
              <JobsList jobs={jobs} />
            </section>
            <LoggedInFooter />
        </>
    );
}

export default JobBoard;