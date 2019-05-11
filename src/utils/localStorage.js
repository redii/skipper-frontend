export function loadState() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState) {
      return JSON.parse(serializedState)
    } else {
      return undefined
    }
  } catch(err) {
    return undefined
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(err) {
    // ignore
  }
}
