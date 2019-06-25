export const weatherReducer = ( state = [], action ) => {
  switch (action.type) {
    case "[resultsComponent] Add city": 
      console.log(action)
      return [...state, action.result]
    case "[resultsComponent] Remove city":
      return state.filter( ( city, key ) => {
        return key !== action.key
      } )
    default: 
      return state
  }
}