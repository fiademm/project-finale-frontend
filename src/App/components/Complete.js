import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import congrat from "./Images/CONGRAT.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


function Complete() {
    
    
  return (

    
       
    <Card >
      <Card.Header>
        <h1 >Explore Courses</h1>
        <Nav variant="pills" defaultActiveKey="#complete">
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
    
        
      <Card.Body>
         <img src={congrat}  width="340px" height="240px"/>
                      <Card.Title>Keep On learning</Card.Title>
                      <Card.Text>
                      The courses you've completed will show up here
                      </Card.Text>
                     
                      
                      
                      <Button className='mt-2' variant="primary">Explore the Catalog</Button>
                                    
                    </Card.Body>
      
      
                    </Card>
    
  );
}

export default Complete;