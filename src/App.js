import './App.scss';
import Counter from './components/Counter/Counter'
import Color from './components/Color/Color'
import Hw4 from './components/Hw4/Hw4'
import Hw5 from './components/Hw5/Hw5'


function App() {
  return (
    <div className="App">
        <Hw5/>
        <Hw4 isVisible={true} />
      <Counter />
        <Color name={"Компонент меняющий цвет"} colorArr={["red","grey","orange","purple"]}/>
    </div>
  );
}

export default App;
