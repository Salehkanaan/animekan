import useFetch from "../usefetch";
import { useEffect, useRef, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate, useParams } from "react-router-dom";
import './animeDetail.css'
import Charts from "./Charts";
const AnimeDetails = () => {
    const [fav, setFav] = useState(false);
    const [anim, setAnime] = useState("detail");
    const [visible, setVisible] = useState(true);
    const [add, setAdd] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();//used to extract the id parameter from the URL.
    const { data: anime, error, isPending } = useFetch("http://localhost:8000/animes/" + id);
 
    const [visibilityArray, setVisibilityArray] = useState([]);
    useEffect(() => {
        if (anime) {
            setVisibilityArray(Array(anime.numberOfEpisodes).fill(true));
        }
    }, [anime]);

    const toggleVisibility = (index) => {
        setVisibilityArray(prevState => {
            const newVisibilityArray = [...prevState];
            newVisibilityArray[index] = !newVisibilityArray[index];
            return newVisibilityArray;
        });
    };
    const AnimeDetail = () => {
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
    const WhichPage = () => {
        if (anim == "detail") {
            return <AnimeDetail />
        } else if (anim === "episode") {
            return <Episodes />
        } else if (anim === "analytics") {
            return <Charts />;
        } else if (anim == "character") {
            return <div>Characters and Workers Component</div>;
        }
        else {
            return <AnimeDetail />
        }
    }
    function EpisodeCreator() {
        let i = 0;
        const episode = [];
        for (i = 0; i < anime.numberOfEpisodes; i++) {
            episode.push(
                <div className="ep" key={i}>
                    <div className="epn">Episode:{i + 1}</div>
                   <div className="emv">
                   <div onClick={() => toggleVisibility(i)}>
                            {visibilityArray[i] ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </div> <ChatIcon />
                    </div>
                </div>);
        }
        return episode;
    }
    const Episodes = () => {
        return (
            <div className="episodes">
                <EpisodeCreator />
            </div>
        );
    }
    function togglefav() {
        setFav(fav => !fav);
    }
    const AddAn = () => {
        return <div className="add">Add to your List</div>
    }
    return (
        <>
            <nav className="an-navbar">
                <ArrowBackIcon onClick={() => navigate("/")} />
                {anime && <h2>{anime.name}</h2>}

                <ChatIcon />

                <button onClick={togglefav}>{fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}</button>

                {add ? <AddAn /> : <MoreVertIcon onClick={() => setAdd(true)} />
                }
                {isPending && <div>Loading...</div>}

                {error && <div>{error}</div>}
            </nav>
            <div onClick={() => setAdd(false)}>
                <div className={`an-page`}>
                    <p onClick={() => setAnime("detail")}>Details</p>
                    <div className={anim == "detail" ? "active" : ""}></div>
                    <p onClick={() => setAnime("episode")}>Episodes</p>
                    <div className={anim == "episode" ? "active" : ""}></div>
                    <p onClick={() => setAnime("analytics")}>Analytics</p>
                    <div className={anim == "analytics" ? "active" : ""}></div>
                    <p onClick={() => setAnime("character")}>Characters </p>
                    <div className={anim == "character" ? "active" : ""}></div>

                </div>
                {<WhichPage />}
            </div>
        </>
    );

}

export default AnimeDetails;