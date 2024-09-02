import { useContext, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { MyContext } from '../../App';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import './searchbar.css'
const SearchBar = ({ animes, listStatu }) => {
    const [url, setUrl] = useState("");
    const { page, setPage, inputValue, setInputValue } = useContext(MyContext);
    const { currentUser, isLoading, fetchUserInfo } = useUserStore();
    const [search, setSearch] = useState(false);

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            fetchUserInfo(user?.uid)

        });
        return () => {
            unSub();
        };
    }, [fetchUserInfo]);
    if (isLoading) return <div className="loading">Loading...</div>


    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    const openSearch = () => {
        setSearch(true);

    }
    function isLogged(id) {
        if (currentUser) {
            setUrl(`api/anime/${id}`)
        }
        else {
            setUrl('/login');
            setPage(`api/anime/${id}`)
        }
    }

    return (
        <>
            <div className="search1">
                {search ? <input
                    placeholder="Type here to search..."
                    className="search-input"
                    type='search'
                    value={inputValue}
                    onChange={handleInput} />
                    : ""}
                <SearchIcon onClick={openSearch} className='search-icon' />
            </div>

            <div className={listStatu ? "anime-list" : "anime-container"}>

                {animes && animes.filter(anime => {
                    if (inputValue === '') {
                        return anime;  // Return all animes if the input is empty
                    }
                    else if (anime.name.toLowerCase().includes(inputValue.toLowerCase())) {
                        return anime;
                    }
                }).map((anime, index) => (
                    <div className={listStatu ? "animeList-preview" : "anime-preview"} key={index}>
                        <Link className="anime-link" to={url}>
                            <img
                                onClick={() => isLogged(anime.id)}
                                alt='img'
                                src={`./images/${anime.coverImage}`}
                            />
                        </Link>
                        <div className="anime-content">
                            <h2>{anime.name}</h2>
                            <p>Episode: {anime.numberOfEpisodes}</p>
                            <p>Series <StarIcon color={'yellow'} /> <span>{anime.rating}</span></p>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    );
}

export default SearchBar;
