import './App.css'
import Header from './Components/Header';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      <Switch>

      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
