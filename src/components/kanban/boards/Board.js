import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

import { getBoardAction } from "../../../actions/kanban/getBoard";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("i was triggered during component did mount")
    this.props.getBoard(this.props.match.params.boardId);
  }
  render() {
    return (
      <div>
        <p>hello</p>
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
