import React, { Component } from 'react';
import {connect} from 'react-redux'

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        this is boards
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
    // addBoard: () => dispatch(addBoardAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards);