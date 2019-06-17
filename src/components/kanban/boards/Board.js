import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from '../..//auth/'
//import { Link } from "react-router-dom";

import { getBoardAction } from "../../../actions/kanban/getBoard";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("i was triggered during component did mount");
    this.props.getBoard(this.props.match.params.boardId);
  }
  render() {
    console.log(
      678,
      this.props.state.board.boardData[0].name &&
        this.props.state.board.boardData[0].name
    );
    return (
      <div>
        {/* <p>{this.props.state.board.boardData.name}</p> */}
        <p>hello</p>
        <p>
          {/* {this.props.state.board.boardData[0].name &&
            this.props.state.board.boardData[0].name} */}
        </p>
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
    getBoard: id => dispatch(getBoardAction(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
