type FruitState = {
  fruits: string[]
  toastMessage: string
  isToastOpen: boolean
}

type ACTIONTYPE =
  | { type: 'ADD_FRUIT'; payload: string }
  | { type: 'REMOVE_FRUIT'; payload: string }
  | { type: 'SHOW_TOAST_ERROR'; payload: string }
  | { type: 'CLOSE_TOAST_ERROR' }

export function fruitsReducer(
  state: FruitState,
  action: ACTIONTYPE
): FruitState {
  switch (action.type) {
    case 'ADD_FRUIT': {
      return {
        ...state,
        fruits: [...state.fruits, action.payload],
        isToastOpen: true,
        toastMessage: `${action.payload} added`,
      }
    }
    case 'REMOVE_FRUIT': {
      const newFruits = state.fruits.filter((fruit) => fruit !== action.payload)
      return {
        ...state,
        fruits: newFruits,
        isToastOpen: true,
        toastMessage: `${action.payload} removed`,
      }
    }
    case 'SHOW_TOAST_ERROR': {
      return { ...state, toastMessage: action.payload, isToastOpen: true }
    }
    case 'CLOSE_TOAST_ERROR': {
      return { ...state, isToastOpen: false }
    }
    default: {
      throw new Error('Unhandled type')
    }
  }
}
