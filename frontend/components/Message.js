import React from 'react'
import { connect } from 'react-redux'



const Message = (props) => {
  const {infoMessage} = props;
  return <div id="message">{infoMessage === '' ? '' : infoMessage.message}</div>
}

const mapStateToProps = (state) => {
  return {
    ...state,
  infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps)(Message)