import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import NoteDetail from "./components/NoteDetail";

import "./App.css";
import NotesContext from "./context/NotesContext";
import NoteForm from "./components/NoteForm";

class App extends Component {
  state = { notesList: [] };

  addNotes = (note) => {
    const { notesList } = this.state;
    const newNote = [...notesList, note];
    this.setState({ notesList: newNote });
  };

  render() {
    const { notesList } = this.state;
    return (
      <NotesContext.Provider value={{ notesList, addNotes: this.addNotes }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/Home" component={HomePage} />
            <Route exact path="/note/:id" component={NoteDetail} />
            <Route exact path="/NoteForm" component={NoteForm} />
          </Routes>
        </BrowserRouter>
      </NotesContext.Provider>
    );
  }
}

export default App;
