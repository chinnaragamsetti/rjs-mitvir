import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotesContext from "./context/NotesContext";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import NoteDetail from "./components/NoteDetail";
import NoteForm from "./components/NoteForm";

import "./App.css";

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
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/HomePage" component={HomePage} />
            <Route exact path="/NoteForm" component={NoteForm} />
            <Route exact path="/note/:id" component={NoteDetail} />
          </Switch>
        </BrowserRouter>
      </NotesContext.Provider>
    );
  }
}

export default App;
