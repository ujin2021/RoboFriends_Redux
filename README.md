# robofriends using redux

1. $ git clone https://github.com/aneagoie/robofriends.git (class 로 짠 react app)
2. $ npm update
3. $ npm audit

### Redux

* $ npm install redux
* $ npm install react-redux
* https://redux-toolkit.js.org/ : redux boilerplate

### Why Redux?

* redux == this.state
* container들을 이어준다
* 상태 관리
* Good for managing large state
* Useful for sharing data between containers
* Predictable state management using the 3 principles

#### 3 principles

1. Single source of truth (one sigle big object that describes all state)
2. State is read only(객체를 수정하지 않음으로서 오류를 방지)
3. Changes using pure functions(pure function : 입력을 받고, 항상 출력을 반환하는 것)

### Step

1. Action(user click button, drop down menu) <br>
(middleware)
2. Reducer(함수)
3. Store(reducer를 거쳐 store의 상태가 변화)
4. Make changes

### Flux Pattern

<p> Action -> Dispatcher -> Store -> View </p>

### debugger

* $ npm install redux-logger
* middleware에 해당하는 것

``` js
// index.js
import { createStore, applyMiddleware } from 'redux' // applyMiddleware 추가
import { createLogger } from 'redux-logger'

const logger = createLogger()
const store = createStore(searchRobots, applyMiddleware(logger)) // applyMiddleware(사용할 middleware)
```

### redux-thunk

* $ npm install redux-thunk
* middleware
* AJAX 호출과 같은 비동기 작업을 처리할 수 있음
* 해당 프로젝트에서 robots api 를 fetch 할 때 사용
