import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAllBoardsAction } from "../../../actions/kanban/getAllBoards";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getAllBoards();
  }
  render() {
    return (
      <div>
        {this.props.state.boards.boardData.map(data => {
          return (
            <div>
              <Link key={data.id} to={`/board/${data.id}`}>
                {data.name}
              </Link>
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
    getAllBoards: () => dispatch(getAllBoardsAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
