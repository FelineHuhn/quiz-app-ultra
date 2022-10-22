import Card from "../Components/Card/Card";

export default function Home({ cards }) {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return (
          <Card
            tags={card.tags}
            answer={card.answer}
            question={card.question}
            id={card.id}
            isBookmarked={card.isBookmarked}
          />
        );
      })}
    </ul>
  );
}
