import Card from "../Components/Card/Card";

export default function Bookmark({ cards, deleteCard }) {
  return (
    <ul className="card-list">
      {cards.map((card, index) => {
        if (card.isBookmarked) {
          return (
            <Card
              key={index}
              tags={card.tags}
              answer={card.answer}
              question={card.question}
              id={card.id}
              isBookmarked={card.isBookmarked}
              deleteCard={deleteCard}
            />
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}
