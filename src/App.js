import './App.scss';
import MyFirstComponent from "./components/MyFirstComponent/MyFirstComponent";
import MySecondComponent from "./components/MysecondComponent/MySecondComponent";

function App() {
  return (
    <div className="App">
      <MyFirstComponent />
        <MySecondComponent/>
    </div>
  );
}

export default App;
