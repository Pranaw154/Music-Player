import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardMusic from "./CardMusic";
import "./../../../node_modules/flickity/dist/flickity.min.css";
import "./CardGroupext.css"


function CardGroup(playlist) {

    var arr = []
    for (let i = 0; i < playlist.playlist.length; i++) {
        const element = playlist.playlist[i];
        arr.push(element);
    }
    // function pushInArr() {
    //     for (let i = 0; i < playlist.playlist.length; i++) {
    //         const element = playlist.playlist[i];
    //         arr.push(element);
    //     }
    // }

    return (
        <div>
            {/* {console.log(playlist.playlist)}
            {console.log(arr)} */}
            <div className="container-fluid">
                <div className="carousel" data-flickity='{ "wrapAround": true, "freeScroll": true, "pageDots": false, "imagesLoaded": true, "autoPlay": 10000, "contain":true, "adaptiveHeight": true}'>
                    {/* {
                        playlist.playlist.map((p, index)=> {
                            return (
                                <div className="carousel-cell xyz" key={index}>
                                    <CardMusic trackName={p.trackName} artists={p.artists} imageUrl={p.imageUrl} />
                                </div>
                            );
                        })
                    } */}
{/* 
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div>
                    <div className="carousel-cell xyz">
                        <CardMusic trackName="p.trackName" artists="{p.artists}" imageUrl="https://source.unsplash.com/collection/136095/300x300" />
                    </div> */}

                        {arr.map((p, index)=> {
                            return (
                                <div className="carousel-cell xyz" key={index}>
                                    {/* {console.log(p)} */}
                                    <CardMusic trackName={p.trackName} artists={p.artists} imageUrl={p.imageUrl} trackPreviewUrl={p.spotifyLink}/>
                                </div>
                            );
                        })}


                </div>
            </div>
        </div>
    );
}

export default CardGroup;