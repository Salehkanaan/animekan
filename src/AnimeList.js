import React from 'react'
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
export default function AnimeList(props) {
  console.log(props.list)
  return (
    <div className={props.list ? "anime-list" : "anime-container"}>
      {props.animes.map((anime) => (
        <div className={props.list ? "animeList-preview" : "anime-preview"} key={anime.id}>
          <Link className="anime-link" to={`/animes/${anime.id}`} >
            <img src={`./images/${anime.coverImage}`} />
          </Link>
          <div className="anime-content"> <h2> {anime.name}</h2>
            <p>Episode:{anime.numberOfEpisodes}</p>
            <p>Series <StarIcon color={'yellow'} /> <span>{anime.rating}</span> </p>
          </div>
        </div>
      ))}
    </div>
  )
}
