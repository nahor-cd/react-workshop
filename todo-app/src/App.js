import logo from './logo.svg';
import './App.css';
import ViewToDo from './components/ViewToDo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' exact element={<ViewToDo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
