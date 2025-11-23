import Card from './Card';

const dataBaseCards = [
  { id: 9, 
    name: "MySQL", 
    img: process.env.PUBLIC_URL + "/img/mysql.png", 
    description: "관계형 DB",
    modalDescription: (
      <div>
        경량 오픈소스 관계형 데이터베이스<br />
        <br />
        학습기간:<br />
        2024.11.13~2024.12.09
      </div>
    ),
    type: "DB" },

  { id: 10, 
    name: "ORACLE",
    img: process.env.PUBLIC_URL + "/img/oracle.png", 
    description: "자바와 찰떡궁합",
    modalDescription: (
      <div>
        기업용 상용 DBMS<br />
        DB 안에서 저장된 명령어<br />
        사용 가능<br />
        <br />
        학습기간:<br />
        2025.02.19~2025.08.07
      </div>
    ),
    type: "DB" },
  ];

function dataBase() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {dataBaseCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default dataBase;