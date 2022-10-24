import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import { useState } from "react";
import { cardsList } from "./utils/db";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Bookmark from "./pages/Bookmark";

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCard] = useState(cardsList);

  function appendCard(question, answer, tag) {
    const tagsArray = tag.split(" ");
    const newCard = { question, answer, tags: tagsArray };

    setCard((cardsList) => {
      const newCardsList = [...cardsList, newCard];
      return newCardsList;
    });
  }

  // function toggleBookmark(id) {
  //   const cardToEdit = cards.find((card) => card.id === id);
  //   console.log(cardToEdit);
  // }

  function deleteCard(id) {
    setCard((cards) => {
      const newCardsList = cards.filter((card) => card.id !== id);
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
            // toggleBookmark={toggleBookmark}
            deleteCard={deleteCard}
          />
        ) : null}
        {page === "bookmark" ? (
          <Bookmark cards={cards} deleteCard={deleteCard} />
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
