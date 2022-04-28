import React from 'react'
import { connect } from 'react-redux'



const Message = (props) => {
  const {infoMessage, successMessage} = props;
  return <div id="message">{infoMessage}</div>
}

const mapStateToProps = (state) => {
  return {
    ...state,
  infoMessage: state.infoMessage.message,
  successMessage: state.form.successMessage
  }
}

export default connect(mapStateToProps)(Message)