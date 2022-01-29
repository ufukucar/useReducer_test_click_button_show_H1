export const Reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showH1: state.showH1 }

    case 'TOGGLEH1':
      return { count: state.count, showH1: !state.showH1 }

    default:
      return state
  }
}
