import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import congrat from "./Images/CONGRAT.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { Pagination } from 'react-bootstrap';


function Section1() {
    
    
  return (
<div>
    
       
    <Card >
      <Card.Header>
        
        <Nav variant="pills" defaultActiveKey="#complete">
          <Nav.Item>
            <Nav.Link >Section 1: Principles of Architecture</Nav.Link>
          </Nav.Item>
         
        </Nav>
      </Card.Header>
    
        
      <Card.Body>
         <img src={congrat}  width="340px" height="240px"/>
                      <Card.Title>Keep On learning</Card.Title>
                      <Card.Text>
                      The courses you've completed will show up here
                      </Card.Text>
                     
                      
                      
                      
                                    
                    </Card.Body>
      
       
      </Card>
      <Pagination className="justify-content-end mt-3 ">
      <Pagination.Prev />
      <Pagination.Next />
    </Pagination>
  
      </div>
    
  );
}

export default Section1;