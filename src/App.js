import MyComponent from './MyComponent'
import './App.css';
import Hellow from './Hellow'

function App() {
  const total= {name:"kang",age: 10,tail: 300 }
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return (
    <div  style={style} className="App">
      <p>練習</p>
      <MyComponent/>
      <Hellow/>
      <div>
        <p>name: {total.name}</p>
        <p>age: {total.age}</p>
        <p>tail: {total.tail}</p>

      </div>
      <></>
    </div>
  );
}

export default App;
