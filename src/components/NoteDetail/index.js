import { Component } from "react";

import "./index.css";

class NoteDetail extends Component {
  state = { noteData: {} };

  componentDidMount() {
    this.getNoteData();
  }

  getNoteData = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const data = localStorage.getItem("notesList");
    const parsedData = JSON.parse(data);
    const foundNote = parsedData.filter((each) => each.id === id);
    this.setState({ noteData: foundNote });
  };

  render() {
    const { noteData } = this.state;
    const { title, description, imageLink } = noteData;
    return (
      <div className="note-detail-cont">
        <h1 className="note-title">{title}</h1>
        <p className="note-description">{description}</p>
        <p className="note-image">{imageLink}</p>
      </div>
    );
  }
}

export default NoteDetail;
