import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
// import './Detail.scss'

function Detail(props) {

    let history = useHistory();
    // 방문 기록 등을 저장 해놓은 Object
    let { id } = useParams();
    // -> {id : 1}

    // or let param = useParams();
    // -> {id : 1}

    let [상태, 상태변경] = useState(true)
    let [input, input변경] = useState('');
    let [재고, 재고변경] = useState(props.info)

    useEffect(() => {

        // 2초 후에 alert 창을 안보이게 해주셈
        let 타이머 = setTimeout(() => {
            상태변경(false)
        }, 2000)

        return () => {
            // unmount 때 실행할 코드
            clearTimeout(타이머)
        }
    },[상태])

    return (
        <div className="container">
            <박스>
                <제목 className="red" 색상='red'>Detail</제목>
                {/* or <제목 색상={'red'}>Detail</제목> */}
                {input}
                <input onChange={(e)=>{input변경(e.target.value)}}/>
                {
                    (상태 == true) ?
                        (<div className="my-alert2">
                            <p>재고가 얼마 남지 않았습니다.</p>
                        </div>)
                        :
                        null
                }
            </박스>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <p><Info info={재고[id]}></Info></p>
                    <button className="btn btn-danger" onClick={()=> {
                        const arr = [...재고]
                        arr[id] -= 1;
                        재고변경(arr)
                    }}>주문하기</button>

                    <button className="btn btn-danger" onClick={() => {
                        history.push("/")
                        // or history.goBack()
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    );
}

function Info(props){
    return(
        <div>재고 : {props.info}</div>
    );
}

const 박스 = styled.div`
    padding : 20px;
`;

const 제목 = styled.h4`
    font-size: 30px;
    color : ${props => props.색상}
`

export default Detail;