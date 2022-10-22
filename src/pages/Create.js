import "./Create.css";

export default function Create() {
  return (
    <form>
      <label for="input__question">Your question:</label>
      <textarea
        type="text"
        name="input__question"
        className="input__question"
        maxlength="150"
      ></textarea>
      <p className="word-counter">0/150</p>
      <label for="input__answer">Your answer:</label>
      <textarea
        type="text"
        name="input__answer"
        className="input__answer"
        maxlength="150"
      ></textarea>
      <p className="word-counter">0/150</p>
      <label for="input__tag">Tag:</label>
      <input
        id="input__tag"
        type="text"
        name="input__tag"
        className="input__tag"
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
