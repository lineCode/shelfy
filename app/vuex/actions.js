import types from './mutation-types'

const simple = type =>
  ({ dispatch }, ...args) => dispatch(type, ...args)

export const increment = simple(types.INCREMENT)
export const decrement = simple(types.DECREMENT)
