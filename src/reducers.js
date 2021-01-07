import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = {
    searchField: ''
}

// action은 object다(actions.js에서 object로)
// reducers 는 pure function
export const searchRobots = (state=initialState, action={}) => {
    // console.log('reducers', action.type) // CHANGE_SEARCH_FIELD
    switch(action.type) {
        case CHANGE_SEARCH_FIELD :
            return { ...state, searchField: action.payload} //spread operator
            // return Object.assign({}, state, {searchField: action.payload}) 위와 동일한 표현
        default :
            return state
    }
}