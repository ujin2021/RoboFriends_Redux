import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

export const setSearchField = (text) => { // dispatcher가 알려줌
    // console.log(text) // 현재 입력중인 text
    return {
        type: CHANGE_SEARCH_FIELD, // constants.js에서 관리하는 상수
        payload: text // payload : 필요한 data(user가 enter한 검색어)
    }
} // ()로 감싸면 return을 적지 않아도 된다

export const requestRobots = () => (dispatch) => { // higher order function(function을 반환하는 function). dispatch function을 반환한다
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err}))
}