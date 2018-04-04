// @flow
import React from 'react'
import createStatefulComponent, { update } from 'react-stateful-component'

type Actions =
  | { type: 'ADD', amount: number }
  | { type: 'SUBTRACT' }

const add = (amount: number) => ({
  type: 'ADD',
  amount: amount
})

const subtract = () => ({
  type: 'SUBTRACT'
})

const Counter = createStatefulComponent(() => ({
  initialState: () => ({
    counter: 0
  }),

  reducer: (state, action: Actions) => {
    const { counter } = state

    switch (action.type) {
      case 'ADD':
        return update.state({ counter: counter + action.amount })
      case 'SUBTRACT':
        return update.state({ counter: counter - 1 })
      default:
        (action.type: empty); //eslint-disable-line
        return update.nothing()
    }
  },

  render: ({ state, reduce }) => (
    <div>
      <button key='test' onClick={() => reduce(add(1))}>+</button>
      <span key='test2'>{state.counter}</span>
      <button key='test3' onClick={() => reduce(subtract())}>-</button>
    </div>
  )
}))

export default Counter
