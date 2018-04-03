// @flow
import React from 'react'
import createStatefulComponent, { update } from 'react-stateful-component'

type ExtractReturn = <T>(() => T) => T;

const add = (amount: number) => ({
  type: 'ADD',
  amount: amount
});

const subtract = () => ({
  type: 'SUBTRACT'
});

type Actions =
  | $Call<ExtractReturn, typeof add>
  | $Call<ExtractReturn, typeof subtract>

const Counter = createStatefulComponent(() => ({
  initialState: () => ({
    counter: 0
  }),

  reducer: (state, action: Actions) => {
    const { counter } = state

    switch (action.type) {
      case 'ADD':
        return update.state({ counter: counter + 1 })
      case 'SUBTRACT':
        return update.state({ counter: counter - 1 })
      default:
        (action.type: empty); //eslint-disable-line
        return update.nothing()
    }
  },

  render: ({ state, reduce }) => (
    <div>
      <button key='test' onClick={() => reduce(actionCreators.add())}>+</button>
      <span key='test2'>{state.counter}</span>
      <button key='test3' onClick={() => reduce(actionCreators.subtract())}>-</button>
    </div>
  )
}))

export default Counter
