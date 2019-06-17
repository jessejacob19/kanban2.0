import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

//kanban imports
//import GetAllBoards from "./components/kanban/GetAllBoards";
import Boards from "./components/kanban/boards/Boards";
import Board from "./components/kanban/boards/Board";
//import Boards from "./components/kanban/boards/Boards";

//auth imports
import LoginForm from "./components/auth/login";
import RegisterForm from "./components/auth/register";
import Logout from "./components/auth/logout";

//other imports
import Nav from "./components/common/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerToggle: false
    };
  }

  //this just toggles whether the user wants to see login or register forms
  registerToggle = () => {
    this.setState(prevState => ({
      registerToggle: !prevState.registerToggle
    }));
  };

  render() {
    console.log(44, this.props);
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* only unauthenticated users can login */}
            <Route path="/" component={Nav} />
            {!this.props.auth.isAuthenticated && (
              // <LoginForm registerToggle={this.registerToggle} />
              <Route exact path="/login" component={LoginForm} />
            )}

            {/* only unauthenticated users can register */}
            {!this.props.auth.isAuthenticated && (
              <Route exact path="/register" component={RegisterForm} />
            )}

            {/* Only authenticated users can see logout and our other cat components - you can try force change the state but routes are protected so they'll just load indefinitely and no data will show */}
            {this.props.auth.isAuthenticated && (
              <React.Fragment>
                <Logout user={this.props.auth.user.username} />
                <Route exact path="/board" component={Boards} />
                <Route exact path="/board/:boardId" component={Board} />
              </React.Fragment>
            )}
          </header>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth //this is all of our auth information, check out the dev tools!
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
