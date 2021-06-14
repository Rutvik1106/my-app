import React from "react";
import loginImg from "../../images/Login_images/login.svg";
import "./style.scss";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      CardStyle: {
        boxShadow: "0px 0px 35px rgba(145, 145, 145, 0.22)",
        borderRadius: "9px",
      },
    };
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">
          <b>Login</b>
        </div>
        <br></br>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Button variant="primary">Login</Button>
        </div>
      </div>
    );
  }
}
