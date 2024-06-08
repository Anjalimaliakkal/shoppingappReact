import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import Dynamic from './components/Dynamic';
import ViewAll from './components/ViewAll';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
    <Routes>
     <Route path='/' element={<AddProduct/>}/>
     <Route path='/search' element={<SearchProduct/>}/>
     <Route path='/delete' element={<DeleteProduct/>}/>
     <Route path='/viewAll' element={<ViewAll/>}/>
     <Route path='/Dynamic'element={<Dynamic/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
