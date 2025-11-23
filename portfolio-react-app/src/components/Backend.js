import Card from './Card';

const backendCards = [
  { id: 5, name: "C", img: process.env.PUBLIC_URL + "/img/c.png", description: "컴퓨팅 언어의 근본", 
    modalDescription: (
      <div>
        컴퓨터 구조와 포인터<br />
        개념 학습에 적합한<br />
        저수준 언어<br />
        <br />
        학습기간:<br />
        2024.10.16~2024.11.11
      </div>
    ),
    type: "backend" },
  { id: 6, name: "Python", img: process.env.PUBLIC_URL + "/img/python.webp", description: "쉽고 빠른 개발", 
    modalDescription: (
      <div>
        간결한 문법으로<br />데이터 처리와 빠른<br />
        학습에 적합한 언어
        <br />
        <br />
        학습기간:<br />
        2024.12.10~2025.02.13
      </div>
    ),
    type: "backend" },
  { id: 7, name: "Java", img: process.env.PUBLIC_URL + "/img/java.png", description: "백엔드 핵심",
    modalDescription: (
      <div>
        객체지향 기반의<br />
        백엔드 프로그래밍 언어<br />
        <br />
        학습기간:<br />
        2025.02.19~2025.08.07
      </div>
    ),
    type: "backend" },
  { id: 8, name: "SpringBoot", img:process.env.PUBLIC_URL + "/img/springBoot.png", description: "백엔드 프레임워크",
    modalDescription: (
      <div>
        REST API 구현에 적합한<br />
        Java 기반 프레임워크<br />
        <br />
        학습기간:<br />
        2025.02.19~2025.08.07
      </div>
    ),
    type: "backend" },
];

function Backend() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {backendCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Backend;