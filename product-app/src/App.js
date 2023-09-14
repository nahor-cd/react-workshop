import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import SearchProducts from './components/SearchProducts';
import ViewProducts from './components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' exact element={<AddProducts/>}/>
      <Route path='/search' exact element={<SearchProducts/>}/>
      <Route path='/view' exact element={<ViewProducts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
