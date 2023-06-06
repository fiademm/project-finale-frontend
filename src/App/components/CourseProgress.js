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
            name: 'Frontend Advanced',
            
      },

              
    ]
  return (

    
     
    <Card>
      <h1 >My LEARNING</h1>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#courseprogress">
          <Nav.Item>
            <Nav.Link href="tutorial"> Courses Catalog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="courseprogress">In Progress</Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link href="complete"> Completed </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Container className='mt-5  container d-flex align-items-center justify-content-center vh-100"'>
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
                     
                      <ProgressBar now={30} />
                            <h6 className='mt-2'>30% Complete</h6>
                            <div className="container">
      <div className="row">
        <div className="col">
          <button className="btn btn-primary">Course Outline</button>
        </div>
        <div className="col">
          <button className="btn btn-secondary ml-2">Resume learning</button>
        </div>
      </div>
    </div>
                     

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