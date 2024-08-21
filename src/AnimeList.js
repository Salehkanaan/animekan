import Notification from './components/notification/Notification.js'
import SearchBar from './components/Search/SearchBar.js';

export default function AnimeList({list,animes}) {
  return (
    <div className={list ? "anime-list" : "anime-container"}>
   <SearchBar animes={animes} listStatu={list}/>
 
      <Notification />
    </div>
  )
}
