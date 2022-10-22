import Card from "../Components/Card/Card";

export default function Bookmark({ cards }) {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        if (card.isBookmarked) {
          return (
            <Card
              tags={card.tags}
              answer={card.answer}
              question={card.question}
              id={card.id}
              isBookmarked={card.isBookmarked}
            />
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}
