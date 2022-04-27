import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import {combineReducers} from '../state/reducer'
import { fetchQuiz } from '../state/action-creators';

const Quiz = (props) => {
  const {quiz, fetchQuiz} = props;

  useEffect(() => {
    fetchQuiz();
  }, [])
  console.log(quiz)
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz !== null ? (
          <>
            <h2>{quiz.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.quiz.answers[0][0].text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {quiz.quiz.answers[0][1].text}
                <button>
                  Select
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
    quiz: state.quiz
  }
}

export default connect(mapStateToProps, {fetchQuiz})(Quiz);
