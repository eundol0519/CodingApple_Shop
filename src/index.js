import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
// or HashRouter : 라우팅 안전하게 할 수 있도록 도와줌
// 주소 뒤에 #이 붙는 데 # 뒤에 적는 것은 서버로 전달 되지 X
// BrowserRouter는 라우팅을 리액트가 아니라, 서버에서 요청 할 수도 있어서 위험

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
