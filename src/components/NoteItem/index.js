import { Link } from "react-router-dom";

import "./index.css";

const NoteItem = (props) => {
  const { noteItemDetails } = props;
  const { title, description, imageLink, id } = noteItemDetails;
  return (
    <li className="each-note">
      <Link to={`/note/${id}`} className="link-item">
        <h1 className="note-title">{title}</h1>
        <p className="note-description">{description}</p>
        <p className="note-image">{imageLink}</p>
      </Link>
    </li>
  );
};

export default NoteItem;
