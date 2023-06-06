import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import code from "./Images/front.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Mobile() {
    const course = [
        {
            id: 1,
            src: code,
            name: 'Android Development',
            
        },
        {
            id: 2,
            src: code,
            name: 'iOS Development',
           

        },
                {
            id: 3,
            src: code,
            name: 'Crossplatform Development (iOS & Android)',
           

        },
    ]
  return (

    
     
      <Card>
          <h1>Explore Courses</h1>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#mobile">
          <Nav.Item>
            <Nav.Link href="courses"> UI Design </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="mobile">Mobile App Development</Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link href="web"> Web Development </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Container className='mt-5 '>
               <Row >
                
                {
                    course.map((book) =>
                    <Col md='4' className='mb-5'>
                        <Card style={{ width: '20rem' }}>
                          
                    <Card.Img variant="right" src={book.src} />
                    <Card.Body>
                      <Card.Title>{book.name}</Card.Title>
                      <Card.Text>
                      {book.info}
                      </Card.Text>
                     
                      <ProgressBar now={0} />
                      <h6 className='mt-2'>Not Started</h6>
                      <Button className='mt-2' variant="primary">Start learning</Button>

                    </Card.Body>
                    </Card>
                    </Col>
                    )
                    
                }
                
               </Row>
            </Container>



    </Card>
  );
}

export default Mobile;