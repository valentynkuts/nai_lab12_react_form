import './App.css';
import AddNumForm from "./components/zad1/AddNumForm";
import Formularz from "./components/zad2/Formularz";
import Login from "./components/zad3/Login"
import Data from "./data/data.json";
function App() {
  return (
     //<Formularz/>
    //<AddNumForm/>
      <Login usersData={Data} />

  );
}

export default App;
