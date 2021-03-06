import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

const initialStateSearch = {
    searchField: ''
}

// action은 object다(actions.js에서 object로)
// reducers 는 pure function
export const searchRobots = (state=initialStateSearch, action={}) => {
    // console.log('reducers', action.type) // CHANGE_SEARCH_FIELD
    switch(action.type) {
        case CHANGE_SEARCH_FIELD :
            return { ...state, searchField: action.payload} //spread operator
            // return Object.assign({}, state, {searchField: action.payload}) 위와 동일한 표현
        default :
            return state
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    err: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING :
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS :
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED :
            return Object.assign({}, state, { err: action.payload, isPending: false})
        default :
            return state
    }
}