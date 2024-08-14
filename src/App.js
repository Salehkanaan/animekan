import './App.css';
import Home from './Home';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NotFound from './components/NotFound';
import AnimeDetails from './components/AnimeDetail/AnimeDetails';
import Setting from './components/sidebar/Setting';
import Weather from './components/weather/Weather';
import EpisodesDetail from './components/AnimeDetail/EpisodesDetail';

function App() {
 const [theme, setTheme] = useState(false);
 const [isOpen, setIsOpen] = useState(false);
  function togtheme() {
    setTheme(theme => !theme)
  }
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
};
  return (
 <div>
    <BrowserRouter>
    
    <div className={`app ${theme ? 'dark' : 'light'}`}>
      <Routes>
       
      <Route path="/" element={<Home/>} />
      <Route path="/animes/:id" element={<AnimeDetails/>} />
      <Route path="/animes/:id/episode/:id2" element={<EpisodesDetail/>} />
      <Route path="/setting" element={<Setting tog={togtheme}/>}/>
      <Route path="/weather" element={<Weather />}/>
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
