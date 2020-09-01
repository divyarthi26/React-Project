
import React, { Component } from "react";
// import "./App.css";

export default class SignInPage extends Component {

    render() {
        return (
            <div>
                <div className="acontainer">
                    <div className="row">

                        <section className="section">
                            <h1 className="ah1">USER LOGIN</h1>
                            <div className="aform-group">
                                <label>UserName: </label><br />

                                <input
                                    className="email"
                                    name="email"
                                    type="text"
                                    placeholder="UserName"
                                />
                            </div>

                            <div className="aform-group">
                                <label>Password: </label><br />
                                <input
                                    className="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />

                            </div>


                            <button className="abutton" type="button">
                                SIGN IN
                        </button>
                            <h6 className="axsmallText">Forgotten Account</h6>
                            <button className="abutton" type="button">
                                Create New Account
                        </button>


                        </section>
                    </div>
                </div>



            </div>

        );
    }
}