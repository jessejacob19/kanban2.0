import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addBoardAction } from "../../../actions/kanban/addBoard";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.addBoard();
  }
  render() {
    return (
      <div>
        {this.props.state.boards.boardData.map(data => {
          return (
            // <Link >
            //   <p>{data.name}</p>
            // </Link>
            <div>
              <Link to={`/board/${data.id}`}>{data.name}</Link>
            </div>
          );
        })}
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
    addBoard: () => dispatch(addBoardAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
