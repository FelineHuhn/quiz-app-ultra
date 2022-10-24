import Card from "../Components/Card/Card";

export default function Home({ cards, deleteCard, toggleBookmark }) {
  return (
    <ul className="card-list">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            tags={card.tags}
            answer={card.answer}
            question={card.question}
            id={card.id}
            isBookmarked={card.isBookmarked}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        );
      })}
    </ul>
  );
}
