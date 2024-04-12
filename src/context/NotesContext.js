// context/NotesContext.js

import React from "react";

const NotesContext = React.createContext({
  notesList: [],
  addNotes: () => {},
});

export default NotesContext;
