import React from 'react';

function YouTubeEmbed(props) {
    const Epnumber = 2013 + parseInt(props.num);
    console.log(Epnumber)
    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 1000, overflow: 'hidden' }}>
                <iframe
                    src={`https://animhq.com/serie/attack-on-titan-2/?episodes=${Epnumber}/`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Breaking Bad Season 4 Episode 4"
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
