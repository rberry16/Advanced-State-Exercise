import React from 'react'
import { connect } from 'react-redux'
import { changeQuestion, changeTrue, changeFalse, postQuiz } from '../state/action-creators'


// axios.post('http://localhost:9000/api/quiz/new', {question_text: 'hi', true_answer_text: 'hey', false_answer_text: 'ho'})
//   .then(res => {
//     console.log(res)
//   })

export function Form(props) {
  const {newQuestion, newTrueAnswer, newFalseAnswer, changeQuestion, changeTrue, changeFalse, postQuiz} = props;

  const onChangeQ = evt => {
    evt.preventDefault();
    changeQuestion(evt.target.value);
  }

  const onChangeT = evt => {
    evt.preventDefault();
    changeTrue(evt.target.value);
  }

  const onChangeF = evt => {
    evt.preventDefault();
    changeFalse(evt.target.value);
    
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz({question_text: newQuestion, true_answer_text: newTrueAnswer, false_answer_text: newFalseAnswer});
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value ={newQuestion} onChange={onChangeQ} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} value={newTrueAnswer} onChange={onChangeT} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} value={newFalseAnswer} onChange={onChangeF} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={newQuestion.trim().length > 1 && newTrueAnswer.trim().length > 1 && newFalseAnswer.trim().length > 1 ? false : true} >Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  console.log(state.form)
  if (state.form !== '') {
  return {
    ...state,
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer,
    successMessage: state.form.successMessage,
    infoMessage: state.infoMessage.infoMessage
  }
}
return state
}

export default connect(mapStateToProps, {changeQuestion, changeFalse, changeTrue, postQuiz})(Form)
