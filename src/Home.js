import React from 'react';
import { useState } from 'react';
import AnimeList from './AnimeList';
import useFetch from './usefetch';
import { Spinner, Switch } from '@chakra-ui/react'
import Navbar from './components/Navbar';
export default function Home() {
  const [status, setStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
const { data: animes, isPending, error } = useFetch("http://localhost:8000/animes");
const [list,setList]=useState(false);
function togList(){
    setList(!list);
}
function toggle() {
    setStatus(!status);
  } 
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
};

  return (
   <div>
      <Navbar listStatu={list} list={togList}
       statu={status} toggle={toggle}
       sidetog={toggleSidebar} sideStatu={isOpen}/>

     <div onClick={()=>{setIsOpen(false)}}>
      {animes && <AnimeList list={list} animes={animes} />}
      {error && <div>{error}</div>}
      {isPending && <div><h3>Loading...</h3>
        <Spinner size="xl" />

      </div>
      }
      </div>
    </div>
  )
}
