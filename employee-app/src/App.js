import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import ViewEmployee from './components/ViewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='' exact element={<AddEmployee/>}/>
        <Route path='/search' exact element={<SearchEmployee/>}/>
        <Route path='/view' exact element={<ViewEmployee/>}/>
        <Route path='/delete' exact element={<DeleteEmployee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
