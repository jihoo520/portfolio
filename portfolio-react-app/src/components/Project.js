import React from 'react';
import Card from './Card';
import './Card.css';

// 프로젝트 데이터
const projectCards = [
  {
    id: 11,
    name: "ai냉장고 레시피",
    img: process.env.PUBLIC_URL + "/img/refrAI_icon.png", 
    description: "팀 프로젝트",
    modalDescription: (
      <div>
        AI래시피 생성, 상담, 식단 생성<br />
        냉자고에 있는 재료를 이용하여 사용자에게 맞춤 
        레시피를 추천하는 Ai 기반 서비스
        <br />
        자세한 코드는{" "}
        깃허브에서<br />확인해주세요
        <br />
        <br />
        작업기간:<br />
        2025.06.10~2025.08.07<br />
        <a href="https://github.com/jihoo520/RefrAI-progect" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 GitHub 코드 보기
        </a>
        <a href="http://team-ai-refrigerator-react-project.s3-website.ap-northeast-2.amazonaws.com/" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 웹 페이지 보기
        </a>
      </div>
    ),
    type: "project"
  },
  {
    id: 12,
    name: "DREAMI",
    img: "/img/MainLogo.png",
    description: "첫 팀프로젝트",
    modalDescription: (
      <div>
        전국 유기동물 구조 현황<br />
        전국 보호소 위치도<br />
        내가 원하는 동물도<br />
        유기동물 입양 신청까지<br />
        <br />
        자세한 코드는{" "}
        깃허브에서<br />확인해주세요
        <br />
        <br />
        작업기간:<br />
        2023.03.06~2023.06.28.<br />
        <a href="http://127.0.0.1:5001" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 웹 페이지 보기
        </a>
        <a href="https://github.com/guensoo/TeamPJ-UKA" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 GitHub 코드 보기
        </a>
      </div>
    ),
    type: "project"
  },
  {
    id: 13,
    name: "OTT Movie Review",
    img: "/img/OMR_Main.png",
    description: "OTT/영화 리뷰 프로젝트",
    modalDescription: (
      <div>
        OTT와 영화의 리뷰를<br />
        앱으로 볼 수 있도록<br />
        준비되어있는!<br />
        <br />
        자세한 코드는{" "}
        깃허브에서<br />확인해주세요
        <br />
        <br />
        작업기간:<br />
        2025.07.18~2025.08.05.<br />
        <a href="https://github.com/guensoo/TeamProject-OMR" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 GitHub 코드 보기
        </a>
      </div>
    ),
    type: "project"
  }
];

function Project() {
  return (
    <section className="section">
      <h2 className="section-title">💻 프로젝트</h2>
      <div className="section-content">
        {projectCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Project;