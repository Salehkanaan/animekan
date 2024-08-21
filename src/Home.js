import { useState } from 'react';
import AnimeList from './AnimeList';
import useFetch from './usefetch';
import { Spinner } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Weather from './components/weather/Weather';
export default function Home({page}) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const { data: animes, isPending, error } = useFetch("http://localhost:8000/animes");
  const [list, setList] = useState(false);

  function togList() {
    setList(!list);
  }
  function toggle() {
    setStatus(status=>!status);
  }
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div>
      <Navbar animes={animes} listStatu={list} list={togList}
        statu={status} toggle={toggle}
        sidetog={toggleSidebar} sideStatu={isOpen} />

      <div onClick={() => {
        setIsOpen(false)
      }}>
   
        {animes && <AnimeList list={list} animes={animes} page={page} />}
        {error && <div>{error}</div>}
        {isPending && <div><h3>Loading...</h3>
          <Spinner size="xl" />

        </div>
        }
      </div>
    </div>
  )
}
