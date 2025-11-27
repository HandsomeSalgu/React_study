import React from "react";  //18이후로는 굳이 안써도 되긴함
import {useState, useEffect} from "react"

//React는 함수형 컴포넌트에서 상태(state)나 사이드 이펙트(effect)를 쓰려면 Hook을 사용해야 함
//useState -> 상태(값 저장 & 변경) 관리
//useEffect -> 컴포넌트가 렌더된 후 실행될 코드(타이머, API 호출 등)

function Clock(props){
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return(
        <div>
            <h1>안녕, 리엑트!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;

//Clock이 처음 렌더링됨
//useState로 time에 현재 시각 저장
//useEffect가 실행됨 → 1초마다 setTime() 호출
//setTime()이 실행될 때마다 Clock이 다시 렌더링됨
//time이 업데이트되므로 화면의 “초” 부분이 바뀜
//root는 절대 리렌더링되지 않고 Clock만 업데이트됨

//참고로 지금 useEffect의 시간 초기화는 state를 초기화 시켜 현재 element를 다시 불러오는 역할을 함
//그래서 element가 다시 불러와지면 {new Date().toLocaleTimeString()}도 다시 불러와지기 때문에
//초가 계속 바뀜

