
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import code from "./Images/front.jpeg";



function Complete() {
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
    </Card>
  );
}

export default Complete;