//import { useEffect, useState } from 'react';
import AnimeList from './AnimeList';
//import useFetch from './usefetch';
import { Spinner } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import useFetch1 from './useFetch1';
import { useState } from 'react';
export default function Home({page}) {
  const { data: animes, isPending, error } = useFetch1("http://localhost:3001/api/anime");
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [list, setList] = useState(false);
// const { data: animes, isPending, error } = useFetch("http://localhost:8000/animes/");
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
     {animes && <Navbar animes={animes.info.animes} listStatu={list} list={togList}
        statu={status} toggle={toggle}
        sidetog={toggleSidebar} sideStatu={isOpen} />
        }
     <div onClick={() => {
        setIsOpen(false)
      }}>
        {animes && <AnimeList list={list} animes={animes.info.animes} page={page} />}
          {error && <div>{error}</div>}
          {isPending && <>
          <div>Loading...</div>
      
          <Spinner size="xl" />
          </>
          }

        
       </div> 
    </div>
  )
}
