import NotesContext from "../../context/NotesContext";
import NoteItem from "../NoteItem";

import "./index.css";

const HomePage = () => (
  <NotesContext.Consumer>
    {(value) => {
      const { notesList } = value;

      const onClickNote = () => {
        const { history } = this.props;
        history.replace("/NoteForm");
      };

      return (
        <div className="home-main-cont">
          <input type="search" className="search" />
          <ul className="notes-list">
            {notesList.map((eachNote) => (
              <NoteItem key={eachNote.id} noteItemDetails={eachNote} />
            ))}
          </ul>
          <button className="floating-button" onClick={onClickNote}>
            +
          </button>
        </div>
      );
    }}
  </NotesContext.Consumer>
);

export default HomePage;
