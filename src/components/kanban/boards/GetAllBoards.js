import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllBoardsAction } from "../../../actions/kanban/getAllBoards";

class GetAllBoards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    this.props.getAllBoards();
  };
  render() {
    return (
      <div>
        <p>this is the getallboards</p>
        <button onClick={this.handleClick}>get all boards</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAllBoards: () => dispatch(getAllBoardsAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAllBoards);
