import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import { useState } from "react";
import { cards } from "./utils/db";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Bookmark from "./pages/Bookmark";

function App() {
  const [page, setPage] = useState("home");
  // const [card, setCard] = useState(cards);

  // function appendCard(question, answer, tag) {
  //   function handleSubmit(event) {
  //     const formData = new FormData(event.target);
  //     const data = Object.fromEntries(formData);

  //     setCard(oldValue) => {
  //       const newValue = [...oldValue, data.cards]
  //     }
  //   }
  // }

  return (
    <>
      <Header />
      <main>
        {page === "home" ? <Home cards={cards} /> : null}
        {page === "bookmark" ? <Bookmark cards={cards} /> : null}
        {page === "create" ? <Create /> : null}
        {page === "profile" ? <Profile /> : null}
      </main>
      <NavBar currentPage={page} navigateTo={setPage} />
    </>
  );
}

export default App;
