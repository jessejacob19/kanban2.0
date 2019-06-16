import React, { Component } from 'react';
import {connect} from 'react-redux'

import { addBoardAction } from '../../../actions/kanban/addBoard'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        this is board
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
