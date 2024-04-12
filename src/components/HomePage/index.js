import { Component } from "react";
import NotesContext from "../../context/NotesContext";
import NoteItem from "../NoteItem";

import "./index.css";

class HomePage extends Component {
  renderHomePage = () => (
    <NotesContext.Consumer>
      {(value) => {
        const { notesList } = value;

        const onClickNote = () => {
          const { history } = this.props;
          history.replace("/NoteFrom");
        };
        return (
          <div className="home-main-cont">
            <input
              type="search"
              className="search"
              placeholder="Search your notes"
            />
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

  render() {
    return <>{this.renderHomePage()}</>;
  }
}

export default HomePage;
