import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NotesContext from "../../context/NotesContext";

import "./index.css";

class NoteForm extends Component {
  state = { title: "", description: "", imageLink: "" };

  onChangeImage = (event) => {
    this.setState({ imageLink: event.target.value });
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  renderNoteForm = () => (
    <NotesContext.Consumer>
      {(value) => {
        const { addNotes } = value;
        const onAddNotes = () => {
          const { title, description, imageLink } = this.state;
          addNotes({ title, description, imageLink, id: uuidv4() });
        };

        return (
          <div className="note-form-cont">
            <form className="form-cont">
              <label className="title-label" htmlFor="title-label">
                Title
              </label>
              <input
                className="title-input"
                onChange={this.onChangeTitle}
                type="text"
                id="title-label"
              />
              <label className="des-label" htmlFor="des-label">
                Description
              </label>
              <textarea
                id="des-label"
                rows="4"
                cols="50"
                onChange={this.onChangeDescription}
              ></textarea>
              <label className="image-label" htmlFor="image-label"></label>
              <input
                className="image-input"
                onClick={onAddNotes}
                type="text"
                id="image-label"
              />
              <button onClick={this.onAddNotes}>Add Note</button>
            </form>
          </div>
        );
      }}
    </NotesContext.Consumer>
  );

  render() {
    return <>{this.renderNoteForm()}</>;
  }
}

export default NoteForm;
