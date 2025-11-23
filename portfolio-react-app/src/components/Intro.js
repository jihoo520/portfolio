import React from 'react';
import Card from './Card';
import './Intro.css';

function Intro() {
  const introCard = {
    id: 0,
    name: "자기 소개",
    img: process.env.PUBLIC_URL + "/img/JH.jpeg",
    description: "",
    modalDescription: (
      <div className="intro-modal-content">
        <div><strong>Email :</strong> king107031@naver.com</div>
        <div><strong>Phone :</strong> 010-3949-1071</div>
        <div><strong>학력 :</strong> 2019.03 ~ 2025.02(졸업)<br/>세명대학교 컴퓨터학부</div>
        <div><strong>병역 :</strong> 육군 병장 만기 전역</div>
        <div><strong>경력 :</strong> 2022.06 ~ 2023.08<br/>선데이 브리즈</div>
      </div>
    ),
    type: "intro"
  };

  return (
    <div className="intro-container">
      <Card card={introCard} />
      
      <div className="intro-text">
        <h2 className="intro-greeting">안녕하세요!</h2>
        <p className="intro-paragraph">
          저는 풀스택을 공부중인 <strong className="intro-name">전지후</strong>입니다.<br />
          개발자가 되기 위해 국비과정과 자격증 공부를 하고 있습니다.
        </p>
        <p className="intro-paragraph">
          React, SpringBoot, Java, Oracle을 활용한 웹, 앱 프로젝트를 진행하고 있으며,<br />
          사람들에게 편리성을 제공하고 실생활 기반 프로젝트에도 관심이 많습니다.
        </p>
        <p className="intro-note">
          카드를 클릭하면 상세내용을 볼 수 있습니다.<br/>
          모바일에서는 제대로 구현되지 않을 수 있습니다.<br/>
          모바일은 2025. 6. 4. 기준 배우는 중입니다!<br/>
          지속 업데이트 예정입니다!!
        </p>
        <a 
          href="https://github.com/jihoo520" 
          target="_blank" 
          rel="noreferrer"
          className="github-link"
        >
          🔗 GitHub 바로가기
        </a>
      </div>
    </div>
  );
}

export default Intro;