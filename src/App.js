import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ItemListContainer from './components/js/ItemListContainer';
import ItemDetailContainer from './components/js/ItemDetailContainer';
import NavbarBootstrap from './components/js/NavBarBS';
import Pedido from './components/js/Pedido';

//import { Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <h1>Loja de Esportes Paulo Rodrigo Luiz</h1>
        </Link>
        <br/><br/>
        <NavbarBootstrap>
        </NavbarBootstrap>
        <Pedido stockItens={10} initialValue={1} />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="meus_pedidos" element={<ItemListContainer/>}></Route>
        </Routes>
     </div>
    </BrowserRouter>
  );
} 

/*function Navigation() {
  const location = useLocation();

  // Check if the current route is not "/teste"
  if (location.pathname !== "/") {
    return (
      <NavbarBootstrap></NavbarBootstrap>

      );
  }
  return null; // Return null if current route is "/teste"
}*/

export default App;
