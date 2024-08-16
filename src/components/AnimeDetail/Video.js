import React, { useEffect, useState } from 'react';
function YouTubeEmbed(props) {
    const Epnumber = 2013 + parseInt(props.num);
    const [animeUrl, setAnimeUrl] = useState("");
    const [open, setOpne] = useState(false);
    const animeName = props.aname.toLowerCase();
    console.log(`anime: ${animeName}`)

    useEffect(() => {
        if (animeName === "one piece") {
            setAnimeUrl(`https://web3.topcinema.top/%d8%a7%d9%86%d9%85%d9%8a-%d9%88%d9%86-%d8%a8%d9%8a%d8%b3-one-piece-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-${props.num}-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/`)
        }
        else if (animeName === "attack on titan") {
            setAnimeUrl(`https://web3.topcinema.top/%d8%a7%d9%86%d9%85%d9%8a-attack-on-titan-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-${props.num}-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/`);
        }
        else if (animeName === "my hero academia") {
            setAnimeUrl(`https://web3.topcinema.top/%d8%a7%d9%86%d9%85%d9%8a-boku-no-hero-academia-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-${props.num}-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/`);
        }
        else if (animeName === "naruto") {
            setAnimeUrl(`https://web3.topcinema.top/%d8%a7%d9%86%d9%85%d9%8a-%d9%86%d8%a7%d8%b1%d9%88%d8%aa%d9%88-naruto-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-${props.num}-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/`);
        }
        else if (animeName === "death note") {
            setAnimeUrl(`https://web3.topcinema.top/%d8%a7%d9%86%d9%85%d9%8a-death-note-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-${props.num}-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/`)
        }

        else if (animeName === "fullmetal alchemist") {
            setAnimeUrl(`https://www.tuktukcima.com/%D8%A7%D9%86%D9%85%D9%8A-fullmetal-alchemist-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-${props.num}-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/watch/`)
        }

        else if (animeName === "demon slayer") {
            setAnimeUrl(`https://web3.topcinema.top/%d8%a7%d9%86%d9%85%d9%8a-kimetsu-no-yaiba-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-${props.num}-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/watch/`)
        }


        else if (animeName === "sword art online") {
            setAnimeUrl(`https://www.tuktukcima.com/%D8%A7%D9%86%D9%85%D9%8A-sword-art-online-alicization-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-${props.num}-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/watch/`)
        }

        else if (animeName === "tokyo ghoul") {
            setAnimeUrl(`https://w1.animetak.top/episodes/tokyo-ghoul-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-${props.num}-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9.html`)
        }
        else if (animeName === "steins gate") {
            setAnimeUrl(`https://anime4up.lol/episode/steinsgate-0-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-1/`)
        }
        
        else {
            setAnimeUrl(`https://animhq.com/serie/attack-on-titan-2?episodes=${Epnumber}`);
        }
    },[])


    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 1000, overflow: 'hidden' }}>
                <iframe
                    src={animeUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture,embedded"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>

        </div>
    );
}

export default YouTubeEmbed;
