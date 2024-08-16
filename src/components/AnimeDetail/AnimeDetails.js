import useFetch from "../../usefetch";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useNavigate, useParams } from "react-router-dom";
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

    const toggleVisibility = () => {
        setVisible(prev => !prev)
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
        if (anim === "detail") {
            return <AnimeDetail />
        } else if (anim === "episode") {
            return <Episodes />
        } else if (anim === "analytics") {
            return <Charts />;
        } else if (anim === "character") {
            return <div>Characters and Workers Component</div>;
        }
        else {
            return <AnimeDetail />
        }
    }
    const EpisodeCreator = () => {
        let i;
        const episode = [];
        for (i = 1; i <= anime.numberOfEpisodes; i++) {
            episode.push(
                <div className="episodes" >
                    <div className="episode-link">
                        <Link className="ep-link" to={`/animes/${id}/episode/${i}`}>
                            <div className="epn">Episode:{i}</div>
                        </Link>

                        <div className="emv">
                            <div onClick={toggleVisibility}>
                                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </div>
                            <ChatIcon />
                        </div>
                    </div>
                </div>
            );
        }
        return episode;
    }
    const Episodes = () => {
        return (
            <div className="episodes">
                {<EpisodeCreator />}
            </div>
        );
    }
    function togglefav() {
        setFav(fav => !fav);
    }
    const AddAn = () => {
        return <div className="add">Add to your List</div>
    }

    const getUnderlinePosition = () => {
        switch (anim) {
            case "detail":
                return "0%";
            case "episode":
                return "100%";
            case "analytics":
                return "200%";
            case "character":
                return "300%";
            default:
                return "0%";
        }
    };

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

                <div className={`an-page`} style={{ "--underline-position": getUnderlinePosition() }}>
                    <div className={anim === "detail" ? "active" : ""}
                        onClick={() => setAnime("detail")}>Details</div>

                    <div onClick={() => setAnime("episode")}
                        className={anim === "episode" ? "active" : ""}>Episodes</div>

                    <p ></p>
                    <div onClick={() => setAnime("analytics")}
                        className={anim === "analytics" ? "active" : ""}>Analytics</div>

                    <div onClick={() => setAnime("character")}
                        className={anim === "character" ? "active" : ""}>Characters</div>

                </div>
                {<WhichPage />}
            </div>
        </>
    );

}

export default AnimeDetails;