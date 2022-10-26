import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Bookmark from "./pages/Bookmark";

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCard] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cardsList") ?? []);
    } catch (error) {
      console.warn(error);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cardsList", JSON.stringify(cards));
  }, [cards]);

  function appendCard(question, answer, tag) {
    const tagsArray = tag.split(" ");
    const newCard = { question, answer, tags: tagsArray };

    setCard((cardsList) => {
      const newCardsList = [...cardsList, newCard];

      return newCardsList;
    });
  }

  function toggleBookmark(id) {
    const newCardArray = cards.map((card) => {
      if (card.question === id) {
        return {
          ...card,
          isBookmarked: !card.isBookmarked,
        };
      } else {
        return card;
      }
    });
    setCard(newCardArray);
  }

  function deleteCard(id) {
    setCard((cards) => {
      const newCardsList = cards.filter((card) => card.question !== id);
      return newCardsList;
    });
  }

  return (
    <>
      <Header />
      <main>
        {page === "home" ? (
          <Home
            cards={cards}
            toggleBookmark={toggleBookmark}
            deleteCard={deleteCard}
          />
        ) : null}
        {page === "bookmark" ? (
          <Bookmark
            cards={cards}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        ) : null}
        {page === "create" ? (
          <Create appendCard={appendCard} navigateTo={setPage} />
        ) : null}
        {page === "profile" ? <Profile /> : null}
      </main>
      <NavBar currentPage={page} navigateTo={setPage} />
    </>
  );
}

export default App;
