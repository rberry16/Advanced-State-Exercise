import React, {useState} from 'react'



export default function Wheel(props) {

  const cogs = [0, 1, 2, 3, 4, 5]

  const [state, setState] = useState({
    b: 0
  })

  const clockwiseBtn = () => {
    if (state.b === 5) {
      setState({
        ...state,
        b: 0
      })
    } else {
      setState({
        ...state,
        b: state.b +1
      })
    }
  }

  const counterClockwiseBtn = () => {
    if (state.b === 0) {
      setState({
        ...state,
        b: 5
      })
    } else {
      setState({
        ...state,
        b: state.b -1
      })
    }
  }

  return (
    <div id="wrapper">
      <div id="wheel">
      {cogs.map((value, idx) => {
          if (value === state.b) {
            return( <div className='cog active' key={idx} style={{'--i': value}}>B</div>)
          } else {
            return( <div className='cog' key={idx} style={{'--i': value}}></div>)
          }
        })}
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div> */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClockwiseBtn} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockwiseBtn} >Clockwise</button>
      </div>
    </div>
  )
}
