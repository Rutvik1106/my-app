import React from "react";
import signupImg from "../../images/Login_images/signup.svg";
import "./style.scss";
import { Button } from "react-bootstrap";
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header"><b>Register</b></div>
        <br></br>
        <div className="content">
          <div className="image">
            <img src={signupImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <Button variant="primary">Sign up</Button>
        </div>
      </div>
    );
  }
}
