import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Addmovie from './components/Addmovie';
import Moviedetails from './components/Moviedetails';
import Favorites from './components/Favorites';
import Searchpage from './components/Searchpage';
import Editmovie from './components/Editmovie';
import Navbar from './components/Navabar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
  
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addmovie />} />
        <Route path="/moviedetails/:id" element={<Moviedetails />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/search/:searchword" element={<Searchpage />} />
        <Route path="/edit/:id" element={<Editmovie />} />

      </Routes>
    </div>
    </BrowserRouter>

  
  );
}

export default App;
