import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import NotFound from './components/NotFound';
import AnimeDetails from './components/AnimeDetail/AnimeDetails';
import Setting from './components/sidebar/Setting';
import Weather from './components/weather/Weather';
import EpisodesDetail from './components/AnimeDetail/EpisodesDetail';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
export const MyContext = createContext();
function App() {
  const [theme, setTheme] = useState(false);
  const [page, setPage] = useState("");
  const [inputValue, setInputValue] = useState("");
  
 
 function togtheme() {
    setTheme(theme => !theme)
  } 
  return (
    <div>

      <BrowserRouter>
        <div className={`app ${theme ? 'dark' : 'light'}`}>
          <MyContext.Provider value={{ page, setPage, inputValue, setInputValue }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/api/anime/:id" element={<AnimeDetails />} />
              <Route path="/api/anime/:id/episode/:id2" element={<EpisodesDetail />} />
              <Route path="/setting" element={<Setting tog={togtheme} />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login page={page} />} />
            </Routes>
          </MyContext.Provider>


        </div>
        <Notification />
      </BrowserRouter>
    </div>
  );
}

export default App;
