import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    
       <BrowserRouter>
       <Routes>
        <Route path='' exact element={<AddStudent/>}/>
        <Route path='/search' exact element={<SearchStudent/>}/>
        <Route path='/view' exact element={<ViewStudent/>}/>
       </Routes>
       </BrowserRouter>
    
  );
}

export default App;
