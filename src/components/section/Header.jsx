import React from 'react'

// 리액트 아이콘
import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header_logo">
        <a href="/">
          <em aria-hidden='true'></em>
          <span>webs<br />youtube</span>
        </a>
      </h1>

      <nav className='header_menu'>
        <ul className='menu'>
          <li class='active'>
            <a href='/'>
              <CiBaseball />김윤주</a>
          </li>
          <li>
            <a href='/today'>
              <CiMoneyBill />추천영상</a>
          </li>
          <li>
            <a href='/developer'>
              <CiCoins1 />추천 개발자</a>
          </li>
          <li>
            <a href='/webd'>
              <CiBoxes /> 웹디자인기능사
            </a>
          </li>
          <li>
            <a href='/website'>
              <CiBullhorn /> 웹표준 사이트
            </a>
          </li>
          <li>
            <a href='/gsap'>
              <CiCoffeeCup /> GSAP Parallax
            </a>
          </li>
          <li>
            <a href='/port'>
              <CiDumbbell /> 포트폴리오 사이트
            </a>
          </li>
          <li>
            <a href='/youtube'>
              <CiFries /> 유튜브 클론 사이트
            </a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href='/search/kyj'>김윤주</a>
          </li>
          <li>
            <a href='/search/html'>HTML</a>
          </li>
          <li>
            <a href='/search/css'>CSS</a>
          </li>
          <li>
            <a href='/search/javascript'>JavaScript</a>
          </li>
          <li>
            <a href='/search/react.js'>React.js</a>
          </li>
          <li>
            <a href='/search/vue.js'>Vue.js</a>
          </li>
          <li>
            <a href='/search/next.js'>Next.js</a>
          </li>
          <li>
            <a href='/search/node.js'>Node.js</a>
          </li>
          <li>
            <a href='/search/sql'>SQL</a>
          </li>
          <li>
            <a href='/search/React Portfolio'>portfolio</a>
          </li>
          <li>
            <a href='/search/NewJeans'>music</a>
          </li>
        </ul>
      </nav>

      <div className="header_sns">
        <ul>
          <li>
            <a href='https://yunjuk.github.io/kyj_resume/' rel='noopener noreferrer'>
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href='https://github.com/yunjuk' el='noopener noreferrer'>
              <AiFillYoutube />
            </a>
          </li>
          <li>
            <a href='https://blog.naver.com/kkyyjj1126' rel='noopener noreferrer'>
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>

    </header>
  )
}

export default Header