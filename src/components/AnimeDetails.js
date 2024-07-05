import useFetch from "../usefetch";
import { useEffect, useRef, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate, useParams } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { Style } from "@mui/icons-material";

const AnimeDetails = (props) => {
    const [fav, setFav] = useState(false);
    const [anim, setAnime] = useState("detail");
    const [colors,setColors]=useState(false);
    const navigate = useNavigate();
    const { id } = useParams();//used to extract the id parameter from the URL.
    const { data: anime, error, isPending } = useFetch("http://localhost:8000/animes/" + id);
const AnimeDetail=()=>{
        return (
            <div className="anime-details">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {anime && (
                   <>
                        <img className="image-detail" src={`../images/${anime.coverImage}`} />
                        <div className="an-detail">
                            <h1>{anime.name}</h1>
                            <p>Completed</p>
                            <p>{anime.releaseSeason}</p>
                            <p>Anime | {anime.numberOfEpisodes} Episodes | {anime.minimumAge}+</p>
                        </div>

                 </>
                )}

            </div>
        );
    }
    const WhichPage=()=>{
if (anim=="detail"){
    return <AnimeDetail/>
} else if (anim === "episode") {
    return <Episodes/>
} else if (anim === "analytics") {
    return <div>Analytics Component</div>;
} else if (anim == "character") {
    return <div>Characters and Workers Component</div>;
}
else{
    return <AnimeDetail/>
}
}
function EpisodeCreator(){
    let i=0;
    const episode=[];
        for(i=0;i<anime.numberOfEpisodes;i++){
           episode.push( <div className="ep">
            <div  className="epn">Episode: {i} </div>
           <VisibilityIcon onClick={setColors(prev=>!prev)} sx={{color:blue[colors?900:0]}}/>
            <ChatIcon/>
           </div>);
}
return episode;
}
 const Episodes =()=>{
    return(
<div className="episodes">
   <EpisodeCreator/>
</div>
    );
 }  
    function togglefav() {
        setFav(fav => !fav);
    }
    return (
        <>
            <nav className="an-navbar">
                <ArrowBackIcon onClick={() => navigate("/")} />
                {anime && <h2>{anime.name}</h2>}
                <ChatIcon />
                <button onClick={togglefav}>{fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}</button>
                <MoreVertIcon />
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
            </nav>
<div className={`an-page`}>
   
        <p  onClick={()=>setAnime("detail") }>Details</p>
            <div className={anim=="detail"?"active":""}></div>
        <p onClick={()=>setAnime("episode") }>Episodes</p>
            <div className={anim=="episode"?"active":""}></div>
        <p onClick={()=>setAnime("analytics")}>Analytics</p>
            <div className={anim=="analytics"?"active":""}></div>
        <p onClick={()=>setAnime("character")}>Characters </p>
        <div className={anim=="character"?"active":""}></div>
       
</div>
{<WhichPage/>}

        </>
    );
    
}

export default AnimeDetails;