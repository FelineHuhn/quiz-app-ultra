import "./Create.css";
// import { useEffect, useState } from "react";

export default function Create({ appendCard, navigateTo }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    appendCard(data.input__question, data.input__answer, data.input__tag);
    navigateTo("home");
  }

  // const [karte, setKarte] = useState(() => {
  //   try {
  //     return JSON.parse(localStorage.getItem("quiz-cards-list") ?? []);
  //   } catch (error) {
  //     return [];
  //   }
  // });
  // const [input, setInput] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("quiz-cards-list", JSON.stringify(karte));
  // });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input__question">Your question:</label>
      <textarea
        type="text"
        name="input__question"
        className="input__question"
        maxLength="150"
        required
      ></textarea>
      <p className="word-counter">0/150</p>
      <label htmlFor="input__answer">Your answer:</label>
      <textarea
        type="text"
        name="input__answer"
        className="input__answer"
        maxLength="150"
        required
      ></textarea>
      <p className="word-counter">0/150</p>
      <label htmlFor="input__tag">Tag:</label>
      <input
        id="input__tag"
        type="text"
        name="input__tag"
        className="input__tag"
        required
      />
      <button
        type="submit"
        name="submit-button"
        className="form__button--submit"
      >
        Submit
      </button>
    </form>
  );
}
