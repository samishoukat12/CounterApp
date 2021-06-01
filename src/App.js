import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import CounterApp from "./Components/counterApp"

function App(props) {
  console.log(props);
  return (
    <CounterApp/>
  );
}

export default App;
