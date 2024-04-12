import { Component } from "react";
import { useNavigate } from "react-router-dom";
import NotesContext from "../../context/NotesContext";
import NoteItem from "../NoteItem";

import "./index.css";

class HomePage extends Component {
  renderHomePage = () => (
    <NotesContext.Consumer>
      {(value) => {
        const { notesList } = value;

        const navigate = useNavigate(); // Using useNavigate hook to get navigation functionality

        const onClickNote = () => {
          navigate("/NoteForm"); // Use navigate function to redirect
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

  render() {
    return <>{this.renderHomePage()}</>;
  }
}

export default HomePage;
