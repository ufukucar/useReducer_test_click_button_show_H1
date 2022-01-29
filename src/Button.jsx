import React, { useReducer } from 'react'
import { initialValues } from './initialState'
import { Reducer } from './Reducer'

function Button() {
  const [state, dispatch] = useReducer(Reducer, initialValues)

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'TOGGLEH1' })
        }}
        className="btn btn-primary"
      >
        ARTTIR
      </button>
      {state.showH1 && <h1>Neler oluyor burada!</h1>}
    </div>
  )
}

export default Button
