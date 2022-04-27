import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import {combineReducers} from '../state/reducer'
import { fetchQuiz, selectAnswer} from '../state/action-creators';

const Quiz = (props) => {
  const {quiz, selectedAnswer, fetchQuiz, selectAnswer} = props;

  useEffect(() => {
    fetchQuiz();
  }, [])

  const [selectedButton, setSelectedButton] = useState('a')

  const handleChoiceA = () => {
    selectAnswer({quiz_id: `${quiz.quiz.quiz_id}`, answer_id: `${quiz.quiz.answer_ids[0]}`});
    setSelectedButton('a')
  }

  const handleChoiceB = () => {
    selectAnswer({quiz_id: `${quiz.quiz.quiz_id}`, answer_id: `${quiz.quiz.answer_ids[1]}`});
    setSelectedButton('b');
  }
  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz !== null ? (
          <>
            <h2>{quiz.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.quiz.answers[0].text}
                <button onClick={handleChoiceA} >
                  {selectedButton !== 'a' ? 'Select' : 'Selected'}
                </button>
              </div>

              <div className="answer">
                {quiz.quiz.answers[1].text}
                <button onClick={handleChoiceB} >
                {selectedButton !== 'b' ? 'Select' : 'Selected'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state,
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer})(Quiz);
