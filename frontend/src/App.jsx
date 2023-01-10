import Header from '../src/Components/Header/Header';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Usuarios from './Pages/Usuarios/Usuarios'
import Footer from './Components/Footer/Footer';
import Cat from './Pages/Cat/Cat';
import Dog from './Pages/Dog/Dog';
import Clientes from './Pages/Clientes/Clientes';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="" exact element={<Home/>}/>
          <Route path="/usuarios" exact element={<Usuarios/>}/>
          <Route path="/Cat" exact element={<Cat/>}/>
          <Route path="/Dog" exact element={<Dog/>}/>
          <Route path="/clientes" exact element={<Clientes/>}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
