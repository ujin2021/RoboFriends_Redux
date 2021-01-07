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
* 상태 관리
* Good for managing large state
* Useful for sharing data between containers
* Predictable state management using the 3 principles

#### 3 principles

1. Single source of truth (one sigle big object that describes all state)
2. State is read only(객체를 수정하지 않음으로서 오류를 방지)
3. Changes using pure functions(pure function : 입력을 받고, 항상 출력을 반환하는 것)

### Step

1. Action(user click button, drop down menu)
2. Reducer(함수)
3. Store(reducer를 거쳐 store의 상태가 변화)
4. Make changes

### Flux Pattern

<p> Action -> Dispatcher -> Store -> View </p>