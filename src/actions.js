import { CHANGE_SEARCH_FIELD } from "./constants"

export const setSearchField = (text) => { // dispatcher가 알려줌
    console.log(text) // 현재 입력중인 text
    return {
        type: CHANGE_SEARCH_FIELD, // constants.js에서 관리하는 상수
        payload: text // payload : 필요한 data(user가 enter한 검색어)
    }
} // ()로 감싸면 return을 적지 않아도 된다