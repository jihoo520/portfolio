import Card from "./Card";

function CardList({ cards }) {
  //test
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;