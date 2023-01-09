import Header from '../src/Components/Header/Header';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Usuarios from './Pages/Usuarios/Usuarios'
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="" exact element={<Home/>}/>
          <Route path="/usuarios" exact element={<Usuarios/>}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
