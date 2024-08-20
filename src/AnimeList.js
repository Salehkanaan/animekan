import React, { useEffect, useState } from 'react'
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Notification from './components/notification/Notification.js'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
export default function AnimeList(props) {
  const [url, setUrl] = useState("");
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid)

    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  if (isLoading) return <div className="loading">Loading...</div>


  function isLogged(id) {
    if (!currentUser) {
      setUrl(`animes/${id}`)
    }
    else {
      setUrl('/login')
    }
  }

  return (
    <div className={props.list ? "anime-list" : "anime-container"}>
      {
        props.animes.map((anime) => (
          <div className={props.list ? "animeList-preview" : "anime-preview"} key={anime.id}>
            <Link className="anime-link" to={url} >
              <img onClick={() => isLogged(anime.id)} alt='img' src={`./images/${anime.coverImage}`} />
            </Link>
            <div className="anime-content"> <h2> {anime.name}</h2>
              <p>Episode:{anime.numberOfEpisodes}</p>
              <p>Series <StarIcon color={'yellow'} /> <span>{anime.rating}</span> </p>
            </div>
          </div>

        ))
      }
      <Notification />
    </div>
  )
}
