
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate, useParams } from "react-router-dom";
import './animeDetail.css'
import { useState } from 'react';
import useFetch from '../../usefetch';
import YouTubeEmbed from './Video';
import useFetch1 from '../../useFetch1';

const EpisodesDetail = () => {
  const [fav, setFav] = useState(false);
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();
  const { id, id2 } = useParams();//used to extract the id parameter from the URL.
  const { data: anime, error, isPending } = useFetch1("http://localhost:3001/api/anime/" );

  const SelectedAnime = []

  if (anime) {
    SelectedAnime.push(anime.info.animes.find((anime) => anime.id === parseInt(id)));

  }
 console.log("SelectedAnime===>", SelectedAnime);

  function togglefav() {
    setFav(fav => !fav);
  }
  const AddAn = () => {
    return <div className="add">Add to your List</div>
  }
  return (
    <>
      <nav className="an-navbar">
        <ArrowBackIcon onClick={() => navigate(`/api/anime/${id}`)} />
        {anime && <h2>{SelectedAnime[id-1].name}</h2>}
        <ChatIcon />
        <button onClick={togglefav}>
          {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}</button>
        {add ? <AddAn /> :
          <MoreVertIcon onClick={() => setAdd(true)} />}
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </nav>
      <div className="ep-detail">
        {anime && <YouTubeEmbed aname={SelectedAnime[id - 1].name} num={id2} />}
      </div>
    </>
  );
}

export default EpisodesDetail;