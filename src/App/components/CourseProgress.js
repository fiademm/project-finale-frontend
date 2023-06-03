import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import code from "./Images/front.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Tutorial() {
    const course = [
        {
            id: 1,
            src: code,
            name: 'Frontend Development Beginner',
            
        },
    ]
  return (

    
     
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#courseprogress">
          <Nav.Item>
            <Nav.Link href="#first"> Courses Catalog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="courseprogress">In Progress</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Completed
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Container className='mt-5'>
               <Row>
                
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
                     
                      <ProgressBar now={60} />
                      <h6>Not Started</h6>
                      <Button className='mt-2' variant="primary">Resume learning</Button>

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

export default Tutorial;