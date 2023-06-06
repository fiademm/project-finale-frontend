import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import code from "./Images/front.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Horizontal = () => {
     const course = [
        {
            id: 1,
            src: code,
            name: 'Frontend Development Beginner',
            
        },
        {
            id: 2,
            src: code,
            name: 'Frontend Development Intermediate',
           

        },
        {
            id: 3,
            src: code,
            name: 'Frontend Devlopment Advanced',
           

        },
    ]
    return (
        
    <Card>
      <h1>Explore Courses</h1>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="tutorial"> Courses Catalog </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="courseprogress">In Progress</Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link href="complete"> Completed </Nav.Link>
          </Nav.Item>
        </Nav>
            </Card.Header>
            
            <div class="container mt-5">
                <div class="card">
                    <div class="row">
                        <div>
              <div class="col-md-4 ">
                        <img src={code} class="img-fluid" />
                        </div>
                        
                        
                        <div class="col-md-8">
                            
                         <h2 class="card-title mt-2">Frontend Development</h2>
                        <ProgressBar className='mt-4'  now={0} />
                      <p><h6 >Not Started</h6></p>
                      <Button className='mt-2' variant="primary">Start learning</Button>
                            
                  </div>
                     </div>
                  </div>
              </div> 
          </div>
            
            </Card>
  )
}

export default Horizontal;