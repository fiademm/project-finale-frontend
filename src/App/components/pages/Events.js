import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { EventsList } from '../CardsList';


const Events = () => {
    const events = [
        {
            id: 1,
            company: 'DCS, University of Ghana',
            title: 'Women Empowerment - The Tech Industry',
            date: '2023 - 07 - 25',
            time: '2:00 PM - 4:30 PM',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            link: '',
            otherDetails: 'No further details',
            location: 'Accra, Ghana',
            duration: '2 hours 30 minutes'
        },
        {
            id: 2,
            company: 'DCS, University of Ghana',
            title: 'Women Empowerment - The Tech Industry',
            date: '2023 - 07 - 25',
            time: '2:00 PM - 4:30 PM',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            link: '',
            otherDetails: 'No further details',
            location: 'Accra, Ghana',
            duration: '2 hours 30 minutes'
        },
        {
            id: 3,
            company: 'DCS, University of Ghana',
            title: 'Women Empowerment - The Tech Industry',
            date: '2023 - 07 - 25',
            time: '2:00 PM - 4:30 PM',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            link: '',
            otherDetails: 'No further details',
            location: 'Accra, Ghana',
            duration: '2 hours 30 minutes'
        },
        {
            id: 4,
            company: 'DCS, University of Ghana',
            title: 'Women Empowerment - The Tech Industry',
            date: '2023 - 07 - 25',
            time: '2:00 PM - 4:30 PM',
            briefDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae aspernatur doloremque tempore et eveniet numquam, recusandae expedita fuga quas. Atque inventore consequuntur totam quas repudiandae ipsum qui vel reiciendis!',
            link: '',
            otherDetails: 'No further details',
            location: 'Accra, Ghana',
            duration: '2 hours 30 minutes'
        },
    ];

    return(
        <>
            <LoggedInHeader />
            <div className='page-heading'>
                <Link to='/profiles' className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
                <h3>Events</h3>
            </div>
            <section className='list-component-container'>
              <EventsList events={events} />
            </section>
            <LoggedInFooter />
        </>
    );
}

export default Events;