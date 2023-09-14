import logo from './logo.svg';
import './App.css';
import AddMovies from './components/AddMovies';
import SearchMovies from './components/SearchMovies';
import ViewMovies from './components/ViewMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='' exact element={<AddMovies/>}/>
        <Route path='/search' exact element={<SearchMovies/>}/>
        <Route path='/view' exact element={<ViewMovies/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
