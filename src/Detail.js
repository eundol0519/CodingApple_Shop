import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

function Detail(props) {

    let history = useHistory();
    // 방문 기록 등을 저장 해놓은 Object
    let {id} = useParams();
    // -> {id : 1}

    // or let param = useParams();
    // -> {id : 1}

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>

                    <button className="btn btn-danger" onClick={()=>{
                        history.push("/")
                        // or history.goBack()
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;