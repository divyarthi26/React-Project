import React, { Component } from "react";
import "./App.css";
import Google from "./components/images.png"
import GoogleAccount from "./components/download.jpg"
import { Link } from "react-router-dom";

export default class MyApp extends Component {
  state = { firstName: "", lastName: "", email: "", password: "", confirm: "", };

  // inplace of e---> use any letter
  _handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("@Name:", name);

    this.setState({
      [name]: value,

    });

  }
  render() {
    const { firstName, lastName, email, password, confirm } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">

            <section className="section">
              <img src={Google} alt="Google" width="150px" />

              <h4 className="subHeading">Create your Google Account</h4>

              <div className="flex">
                <div className="form-group">
                  {/* <label>FirstName: </label> */}
                  <input
                    className="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={this._handleInputChange}
                    type="text"
                    placeholder="First Name"
                  />

                  <input
                    className="leftMargin"
                    name="lastName"
                    value={lastName}
                    onChange={this._handleInputChange}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                {/* <div className="columnFlex"> */}
                {/* <img src={GoogleAccount} alt="Google" width="150px" /> */}

                {/* <div style={{ textAlign: "center" }}>One account. All of Google working for you.</div> */}
              </div>
              {/* </div> */}
              <div className="form-group">
                <input
                  className="email"
                  name="email"
                  value={email}
                  onChange={this._handleInputChange}
                  type="text"
                  placeholder="UserName"
                  size="47"
                />
              </div>

              <div className="xxsmallText">You can use letters,numbers & periods</div>
              <div className="xsmallText">  Use my current email address instead</div>


              <div className="form-group">
                {/* <label>FirstName: </label> */}
                <input
                  className="password"
                  name="password"
                  value={password}
                  onChange={this._handleInputChange}
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="leftMargin"
                  name="confirm"
                  value={confirm}
                  onChange={this._handleInputChange}
                  type="password"
                  placeholder="Confirm"
                />
              </div>

              <div className="xxsmallText"> Use 8 or more characters with a mix of letters, numbers & symbols</div>
              {/* <div className="oneRow"> */}
              <p className="topMargin"> Sign in instead

                {/* <button className="button" type="button">
                  Next
                        </button> */}


                        <Link to="/sign" className="button">Next</Link>
              </p>
              {/* </div> */}
              {/* <div className="form-group">
                            <div>You Name:- {name}</div>
                            <div>Your Email:- {email}</div>

                        </div> */}
            </section>

          </div>

        </div>

        <p style={{ marginLeft: "220px", marginTop: "20px", fontSize: "10px" }}>
          <select name="dropdown">
            <option>English (United State)</option>
            <option>Hindi</option>
            <option>English (United Kingdom)</option>
          </select>

          <button className="button1" type="button">Help</button>
          <button className="button2" type="button">Privacy</button>
          <button className="button2" type="button">Terms</button>
        </p>

      </div>

    );
  }
}








