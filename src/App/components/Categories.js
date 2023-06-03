import React from 'react'
import code from "./Images/front.jpeg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Categories() {
    const course = [
        {
            id: 1,
            src: code,
            name: 'Data Science',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',
            items: ['Programming', 'Machine Learning Models', 'Statistics'],


        },
        {
            id: 2,
            src: code,
            name: 'Full Stack Development',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',

        },
        {
            id: 3,
            src: code,
            name: 'AI and Machine Learning',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',

        },
        {
            id: 4,
            src: code,
            name: ' Cloud Computing',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',

        },
        {
            id: 5,
            src: code,
            name: 'UI/UX Design',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',

        },
        {
            id: 6,
            src: code,
            name: 'IT and Network Administration',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',

        },
        {
            id: 7,
            src: code,
            name: 'Software Development',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',

        },
        {
            id: 8,
            src: code,
            name: ' CyberSecurity',
            info: 'Data Scientists analyze data to discover insights,build machine learning models and develop data solutions',
        },
    ];

    return (

        <div className='mt-3'>
            <h1>Course Categories</h1>
            <h3>Education is the process of learning knowledge,strengthening one's decision-making <br />abilities and getting ready
                to live a normal life.
            </h3>

            <Container className='mt-5'>
               <Row>
                
                {
                    course.map((book,index) =>
                    <Col md='6' className='mb-5'>
                    <Card style={{ width: '34rem' }}>
                    <Card.Img variant="top" src={book.src} />
                    <Card.Body>
                      <Card.Title>{book.name}</Card.Title>
                      <Card.Text>
                      <p>{book.info}</p>
                      <li key={index}>{book.items}</li>
                      </Card.Text>
                      <Button variant="primary">Enroll</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    )
                    
                }
                
               </Row>
            </Container>


        </div>

    )
}

export default Categories
