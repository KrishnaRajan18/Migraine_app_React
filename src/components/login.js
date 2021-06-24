import React from "react";
import ValidationError from "./validation-error";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import RecordContext from "../context/record-context";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        touched: false
      },
      password: {
        value: "",
        touched: false
      }
    };
  }

  handleLoginSuccess = () => {
    window.location = "/dashboard";
  };

  updateEmail(email) {
    this.setState({ email: { value: email, touched: true } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;
    AuthApiService.postLogin({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.userId);
        TokenService.getUserId(res.userId);
        TokenService.saveUserName(res.userName);
        TokenService.getUserName(res.userName);
        window.location = "/dashboard";
      })

      .then()
      .catch(res => {
        alert(res.error);
      });
  };

  validateEmail() {
    const email = this.state.email.value.trim();
    if (email.length === 0) {
      return "Email is required";
    } else if (email.length < 5) {
      return "Email must be at least 5 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 25) {
      return "Password must be between 6 and 25 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form className="log-in" onSubmit={this.handleSubmitJwtAuth}>
          <div className="login-form-entry">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              name="email"
              id="email"
              onChange={e => this.updateEmail(e.target.value)}
            />
            {this.state.email.touched && (
              <ValidationError message={this.validateEmail()} />
            )}
          </div>
          <br></br>
          <div className="login-form-entry">
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => this.updatePassword(e.target.value)}
            />
            {this.state.password.touched && (
              <ValidationError message={this.validatePassword()} />
            )}
            <div>
              <p></p>
            </div>
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}
