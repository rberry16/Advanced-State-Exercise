// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case(MOVE_CLOCKWISE):{
      if (state === 5) {
        return  state - 5
      }
      return state + 1
    }
    case(MOVE_COUNTERCLOCKWISE):{
      if (state === 0) {
        return state + 5
      }
      return state - 1
    }
  }
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case(SET_QUIZ_INTO_STATE): {
      const newQuiz = {
        question: action.payload.question,
        answers: action.payload.answers,
        quiz_id: action.payload.quiz_id,
        answer_ids: [action.payload.answers[0].answer_id, action.payload.answers[1].answer_id]
      }
      return {
        ...state,
        quiz: newQuiz
      }
    }
    
  }
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case(SET_SELECTED_ANSWER): {
      const selectedAnswer = {
        quiz_id: action.payload.quiz_id,
        answer_id: action.payload.answer_id
      }
      return selectedAnswer;
    }
  }
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case(SET_INFO_MESSAGE): {
      const newMessage = action.payload.data;
      return  newMessage
    }
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
