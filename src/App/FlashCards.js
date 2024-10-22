import { useState } from "react";
import { questions } from "../Model/model";

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelected(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          onClick={() => handleSelected(question.id)}
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
