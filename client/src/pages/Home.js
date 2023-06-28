import Wrapper from "../assets/wrappers/Home";
import Note from "../components/Note";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useTranslation } from "react-i18next";
const initialState = {
  title: "",
};

const Home = () => {
  const [note, setNote] = useState(initialState);
  const { createNote, getNote, deleteNote, updateNote } = useAppContext();
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("all");
  const { t } = useTranslation();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const fetchedNotes = await getNote();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNoteChange = (event) => {
    setNote({ ...note, title: event.target.value });
  };

  const handleAddNote = async () => {
    const { title } = note;
    if (title.trim() !== "") {
      await createNote(title);
      setNote({ title: "" });
      fetchData();
    } else {
      return;
    }
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const handleClearCompleted = async () => {
    try {
      const completedNotes = notes.filter((note) => note.isCompleted);
      const completedNoteIds = completedNotes.map((note) => note._id);
      await Promise.all(completedNoteIds.map((noteId) => deleteNote(noteId)));
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleCheck = async (noteId, isChecked) => {
    try {
      await updateNote(noteId, isChecked);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredNotes =
    filter === "all"
      ? notes
      : filter === "active"
      ? notes.filter((note) => !note.isCompleted)
      : notes.filter((note) => note.isCompleted);

  const totalNotes = notes.length;
  const completedNotes = notes.filter((note) => note.isCompleted).length;
  const remainingNotes = totalNotes - completedNotes;

  return (
    <Wrapper id="notes">
      <div className="top">
        <input
          className="form-input"
          type="text"
          value={note.title}
          onChange={handleNoteChange}
          placeholder={t("notes.input")}
        />
        <button className="btn" onClick={handleAddNote}>
          {t("notes.btn")}
        </button>
      </div>
      <div className="notes">
        {filteredNotes.map((note) => (
          <Note
            key={note._id}
            note={note}
            handleDeleteNote={handleDeleteNote}
            handleToggleCheck={handleToggleCheck}
          />
        ))}
      </div>
      <div className="stats">
        {filter === "all" && (
          <p>
            {totalNotes} {t("notes.items")}
          </p>
        )}
        {filter === "active" && (
          <p>
            {remainingNotes} {t("notes.items")}
          </p>
        )}
        {filter === "completed" && (
          <p>
            {completedNotes} {t("notes.items")}
          </p>
        )}

        <p>
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            {t("notes.all")}
          </button>
          <button
            className={filter === "active" ? "active margin" : "margin"}
            onClick={() => handleFilterChange("active")}
          >
            {t("notes.active")}
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => handleFilterChange("completed")}
          >
            {t("notes.completed")}
          </button>
        </p>
        <p>
          <button onClick={handleClearCompleted}>
            {t("notes.clearcompleted")}
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

export default Home;
