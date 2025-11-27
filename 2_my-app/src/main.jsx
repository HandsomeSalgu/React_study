import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList'
import NotificationList from './chapter_06/NottificationList'
import Click from './test/Click'

//render : React Element를 실제 DOM으로 렌더링 하는 함수
//즉 render안에 있는 JSX가 React Element객체로 변환됨
// 그리고 .render()가 React Element를 실제 DOM붙임

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
    <CommentList />
    <NotificationList />
    <Click />
  </StrictMode>
)


