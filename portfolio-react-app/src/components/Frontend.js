import Card from './Card';

const frontendCards = [
  { id: 1, name: "HTML", img: process.env.PUBLIC_URL + "/img/html.svg.png", description: "웹의 뼈대",
    modalDescription: 
    (
      <div>
        웹 페이지의 구조를<br />
        설계하는 마크업 언어<br />
        <br />
        학습기간:<br />
        2025.02.19~2025.08.07
      </div>
    ),
    type: "frontend" },
  { id: 2, name: "CSS", img: process.env.PUBLIC_URL + "/img/css.svg.png", description: "스타일링",
    modalDescription: (
    <div>
      HTML 요소를 꾸미는<br/>
      스타일 시트 언어<br/>
      <br/>
      학습기간:<br/>
      2025.02.19~2025.08.07
      </div>
      ),
    type: "frontend" },
  { id: 3, name: "JavaScript", img: process.env.PUBLIC_URL + "/img/JavaScript.png", description: "로직 처리",
    modalDescription: (
    <div>
      동적 기능과 로직 제어를<br/>
      위한 스크립트 언어<br/><br/>
      학습기간:<br/>
      2025.02.19~2025.08.07
      </div>
    ),
    type: "frontend" },
  { id: 4, name: "React", img: process.env.PUBLIC_URL + "/img/logo512.png", description: "컴포넌트 기반",
    modalDescription: (
    <div>
      컴포넌트 기반 UI<br/>
      상태관리, 라우팅,<br/>
      API 연동 등<br/><br/>
      학습기간:<br/>
      2025.02.19~2025.08.07
      </div>
      ),
    type: "frontend" },
  { id: 5, name: "ReactNative", img: process.env.PUBLIC_URL + "/img/RN.png", description: "컴포넌트 기반",
    modalDescription: (
      <div>
        앱 개발 프레임워크<br/>
        React 기반 컴포넌트 & 이벤트 처리<br/><br/>
        학습기간:<br/>
        2025.02.19~2025.08.07
      </div>
    ),
    type: "frontend" },
];

function Frontend() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {frontendCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Frontend;