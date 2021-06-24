import React from "react";
import ValidationError from "./validation-error";
import AuthApiService from "../services/auth-api-service";

export default class Signup extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        value: "",
        touched: false
      },
      lastName: {
        value: "",
        touched: false
      },
      email: {
        value: "",
        touched: false
      },
      password: {
        value: "",
        touched: false
      },
      repeatPassword: {
        value: "",
        touched: false
      }
    };
  }

  updateFirstName(firstName) {
    this.setState({ firstName: { value: firstName, touched: true } });
  }

  updateLastName(lastName) {
    this.setState({ lastName: { value: lastName, touched: true } });
  }

  updateEmail(email) {
    this.setState({ email: { value: email, touched: true } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  handleLoginSuccess = user => {
    window.location = "/login";
  };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { firstName, lastName, email, password } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value
    })
      .then(user => {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";

        this.handleLoginSuccess();
      })
      .catch(res => {
        alert(res.error);
      });
  };

  validateFirstName(fieldValue) {
    const firstName = this.state.firstName.value.trim();
    if (firstName.length === 0) {
      return "First name is required";
    } else if (firstName.length < 2) {
      return "Name must be at least 2 characters long";
    }
  }

  validateLastName(fieldValue) {
    const lastName = this.state.lastName.value.trim();
    if (lastName.length === 0) {
      return "Last name is required";
    } else if (lastName.length < 2) {
      return "Last name must be at least 2 characters long";
    }
  }

  validateEmail(fieldValue) {
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
      <div className="signup-page">
        <h1>Signup</h1>
        <form className="log-in" onSubmit={this.handleSubmitBasicAuth}>
          <div className="signup-form-entry">
            <label htmlFor="first-name">First name</label>
            <input
              className="registration-control"
              type="text"
              name="firstName"
              id="first-name"
              onChange={e => this.updateFirstName(e.target.value)}
            />
            {this.state.firstName.touched && (
              <ValidationError message={this.validateFirstName()} />
            )}
          </div>
          <div className="signup-form-entry">
            <label htmlFor="last-name">Last name</label>
            <input
              className="registration-control"
              type="text"
              name="lastName"
              id="last-name"
              onChange={e => this.updateLastName(e.target.value)}
            />
            {this.state.lastName.touched && (
              <ValidationError message={this.validateLastName()} />
            )}
          </div>
          <div className="signup-form-entry">
            <label htmlFor="email">Email</label>
            <input
              className="registration-control"
              type="text"
              name="email"
              id="email"
              onChange={e => this.updateEmail(e.target.value)}
            />
            {this.state.email.touched && (
              <ValidationError message={this.validateEmail()} />
            )}
          </div>
          <div className="signup-form-entry">
            <label htmlFor="password">Password</label>
            <input
              className="registration-control"
              type="password"
              name="password"
              id="password"
              onChange={e => this.updatePassword(e.target.value)}
            />
            {this.state.password.touched && (
              <ValidationError message={this.validatePassword()} />
            )}
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
