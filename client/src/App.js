import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListarProduto from './pages/turmas/ListarProduto';
import CasdastroProduto from './pages/turmas/CadastroProduto';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ListarProduto />} />
          <Route path='/cadastro' element={<CasdastroProduto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
