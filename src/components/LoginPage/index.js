import { Component } from "react";

import "./index.css";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/HomePage");
  };

  onSubmitFailure = () => {
    this.setState({ showSubmitError: true });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const dummyUsername = "mitvir";
    const dummyPassword = "mitvir@123";

    const { username, password } = this.state;

    if (username === dummyUsername && password === dummyPassword) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure();
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="mitvir@123"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          placeholder="mitvir"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  render() {
    const { showSubmitError } = this.state;
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && (
            <p className="error-message">
              * Username and Password didn't match
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default LoginPage;
