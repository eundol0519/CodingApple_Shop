import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import data from './data.js' // data.js를 import 한다.

function App() {

  let [shoes, shoes변경] = useState(data)

  return (
    <div className="App">
      {/* 상단 nav 부분 */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">eundol shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* jibmotron 부분 */}
      <div className="jumbotron">
        <h3>20% Season OFF</h3>
        <p>세상에나 마상에나 jumbotron 왜 없어</p>
        <button type="button" className="btn btn-secondary">Secondary</button>
      </div>

      {/* 상품 정보 부분 */}
      <div className="container">
        <div className="row">
          {shoes.map((item, index)=>{
            return( // map을 사용하면 return()을 사용해야 한다.
              <div className="col-md-4" key={item.id}>
                <DataInfo key={index} src={item.src} title={item.title} content={item.content} price={item.price}></DataInfo>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

const DataInfo = (props) => {
  return (
    <>
      <img src={props.src} width="100%"></img>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.price}</p>
    </>
  );
}
