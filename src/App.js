import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data.js' // data.js를 import 한다.
import Detail from './Detail.js'

import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios';

function App() {

  let [shoes, shoes변경] = useState(data)
  let [재고, 재고변경] = useState([10, 11, 12])
  // 중요한 데이터는 상위 컴포넌트에 만들어 놓고
  // 위에서 아래로 흐르는 게 좋음

  return (
    <div className="App">
      {/* 상단 nav 부분 */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">eundol shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link> {/* 메인 화면 */}
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link> {/* 상세 페이지 */}
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

      <Switch>
        {/* 여러 개가 일치해도 하나만 보여주세요! && 택 1 */}
        {/* 중복 허용 X */}
        {/* 메인페이지 부분 */}
        <Route exact path="/">
          {/* jubmotron 부분 */}
          <div className="jumbotron">
            <h3>20% Season OFF</h3>
            <p>세상에나 마상에나 jumbotron 왜 없어</p>
            <button type="button" className="btn btn-secondary">Secondary</button>
          </div>

          {/* 상품 정보 부분 */}
          <div className="container">
            <div className="row">
              {shoes.map((item) => {
                return ( // map을 사용하면 return()을 사용해야 한다.
                  <div className="col-md-4" key={item.id}>
                    <DataInfo src={'https://codingapple1.github.io/shop/shoes' + (item.id + 1) + '.jpg'} title={item.title} content={item.content} price={item.price}></DataInfo>
                  </div>
                );
              })}
            </div>
            <button className='btn btn-primary'
              onClick={() => {

                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => { // 요청 성공 시 반환값을 인자(파라미터)로 받는다.
                    // console.log(result.data)
                    // Object 형식이 아니라, JSON 형식으로 결과값이 넘어옴
                    shoes변경([...shoes, ...result.data])
                    // shoes라는 state 변수에서 데이터를 관리하고 있기 떄문에 새배열을 만들어서 수정한다.
                  })
                  .catch(() => {
                    console.log("실패")
                  });

                // axios.get(데이터 요청할 URL)
                // 새로고침 없이 데이터를 가져옵니다.

                // .then : ajax 요청 성공 시
                // .catch : ajax 요청 실패 시
              }}>더보기</button>
          </div>
        </Route>

        {/* 상세페이지 부분 */}
        <Route path="/detail/:id">
          {/* 아무 문자나 받겠다는 URL 작명법 */}
          {/* 
            1. 콜론 뒤에 맘대로 작명
            2. 여러개 사용가능 -> /detail/:id/:id2
           */}
          <Detail shoes={shoes} info={재고}></Detail>
        </Route>
      </Switch >
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
