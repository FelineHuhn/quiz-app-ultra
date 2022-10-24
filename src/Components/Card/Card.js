import "./Card.css";
import { useState } from "react";

const inititalState = "show";

export default function Card({
  question,
  answer,
  tags,
  isBookmarked,
  id,
  deleteCard,
  toggleBookmark,
}) {
  const [state, setState] = useState(inititalState);
  const [bookmarkState, setBookmark] = useState(isBookmarked);
  return (
    <li id={id} className="card-list__item">
      <article className="card">
        <h2 className="card__question">{question}</h2>
        <button
          onClick={() => {
            setState(() => {
              if (state === "hidden") {
                return "show";
              } else {
                return "hidden";
              }
            });
          }}
          className="card__button-answer"
          type="button"
        >
          {state === "show" ? "Show Answer" : "Hide Answer"}
        </button>
        <p
          className={state === "show" ? "card__answer" : "card__answer--active"}
        >
          {answer}
        </p>
        <ul className="card__tag-list">
          {tags?.map((tag) => {
            return (
              <li key={tag.index} className="card__tag-list-item">
                #{tag}
              </li>
            );
          })}
        </ul>
        <div className="card__button-bookmark">
          <button
            onClick={() => {
              toggleBookmark(id);

              setBookmark(() => {
                if (bookmarkState === true) {
                  return false;
                } else {
                  return true;
                }
              });
            }}
            className={bookmarkState ? "bookmark bookmark--active" : "bookmark"}
            aria-label="bookmark"
            type="button"
          >
            <svg
              className="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </div>
        <button
          onClick={() => deleteCard(id)}
          className="card__button-delete"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </button>
      </article>
    </li>
  );
}
