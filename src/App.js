import './App.css';
import Home from './Home';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NotFound from './components/NotFound';
import AnimeDetails from './components/AnimeDetails';
import Setting from './components/Setting';

function App() {
 const [theme, setTheme] = useState(false);
  function togtheme() {
    setTheme(theme => !theme)
  }
  
  return (
 <div>
    <BrowserRouter>
    
    <div className={`app ${theme ? 'dark' : 'light'}`}>
      <Routes>
       
      <Route path="/" element={<Home/>} />
      <Route path="/animes/:id" element={<AnimeDetails/>} />
      <Route path="/setting" element={<Setting tog={togtheme}/>}/>

      <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
