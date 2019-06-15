import React, { Component } from 'react';
import {connect} from 'react-redux'

import {getAllBoardsAction} from '../../actions/'


class GetAllBoards extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <p>this is the getallboards</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    getAllBoards: () => dispatch(getAllBoardsAction)
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GetAllBoards);