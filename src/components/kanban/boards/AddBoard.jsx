import React, { Component } from 'react';

import { addBoardAction } from '../../../actions/kanban/addBoard'

class addBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        
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
)(AddBoard);