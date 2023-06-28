import Wrapper from "../assets/wrappers/Note";
import { FaTimes, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";

const Note = ({ note, handleDeleteNote, handleToggleCheck }) => {
  const [isChecked, setIsChecked] = useState(note.isCompleted);

  useEffect(() => {
    setIsChecked(note.isCompleted);
  }, [note.isCompleted]);

  const handleToggleChange = () => {
    const updatedIsChecked = !isChecked;
    setIsChecked(updatedIsChecked);
    handleToggleCheck(note._id.toString(), updatedIsChecked);
  };

  const onDeleteNote = () => {
    handleDeleteNote(note._id.toString());
  };

  return (
    <Wrapper>
      <label className={`check-label ${isChecked ? "checked" : ""}`}>
        <input
          className="check-input"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div className="checkmark">
          <FaCheck />
        </div>
      </label>
      <h5 className={`note-title ${isChecked ? "done" : ""}`}>{note.title}</h5>
      <button className="delete-btn" type="button" onClick={onDeleteNote}>
        <FaTimes size={24} />
      </button>
    </Wrapper>
  );
};

export default Note;
