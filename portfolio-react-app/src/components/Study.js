import React from 'react';
import Card from './Card';
import './Card.css';

// 학습 데이터
const studyCards = [
  {
    id: 1,
    name: "국비수업",
    img: "/img/aws.png",
    description: "📘 국비 6개월 과정 정리",
    modalDescription: (
      <div>
        제가 배운 수업을<br />
        정리해 보았습니다!<br />
        Notion으로 정리한 내용은<br />
        아래에서 확인해주세요!
        <br />
        <br />
        📅 학습 기간:<br />
        2025.02.19~2025.08.07<br />
        <a href="https://glimmer-panda-a17.notion.site/1bae5c3f5d17806da208f08c1bf3bde2" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          📄 Notion 정리 보기
        </a>
        <a href="https://github.com/guensoo/AWS-Full_stack_developer_traning" target="_blank" rel="noreferrer" style={{
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
    type: "study"
  },
  {
    id: 2,
    name: "Linux",
    img: "/img/linux.png",
    description: "📘 Linux 공부",
    modalDescription: (
      <div>
        Linux 독학내용을<br />
        정리하였습니다.<br />
        Notion으로 정리한 내용은<br />
        아래에서 확인해주세요!
        <br />
        <br />
        📅 학습 기간:<br />
        2025.08.07~진행중<br />
        {/* <a href="https://glimmer-panda-a17.notion.site/1bae5c3f5d17806da208f08c1bf3bde2" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          📄 Notion 정리 보기
        </a>
        <a href="https://github.com/guensoo/AWS-Full_stack_developer_traning" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 GitHub 코드 보기
        </a> */}
      </div>
    ),
    type: "study"
  }
];

function Study() {
  return (
    <section className="section">
      <h2 className="section-title">📚 학습 과정</h2>
      <div className="section-content">
        {studyCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Study;