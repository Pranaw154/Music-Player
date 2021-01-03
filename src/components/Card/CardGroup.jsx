import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardMusic from "./CardMusic";
import "./../../../node_modules/flickity/dist/flickity.min.css";
import "./CardGroupext.css"
import Flickity from 'react-flickity-component'


const flickityOptions = {

    wrapAround: true,
    freeScroll: true,
    pageDots: false,
    imagesLoaded: true,
    autoPlay: 10000,
    contain: true,
    initialIndex: 2
}

function CardGroup(playlist) {



    var arr = []
    for (let i = 0; i < playlist.playlist.length; i++) {
        const element = playlist.playlist[i];
        arr.push(element);
    }
    return (
        <div>
            <div className="container-fluid">

                <Flickity className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate={true} // default false
                    static // default false
                >
                    {arr.map((p, index) => {
                        return (
                            <div className="carousel-cell xyz" key={index}>
                                <CardMusic trackName={p.trackName} artists={p.artists} imageUrl={p.imageUrl} trackPreviewUrl={p.spotifyLink} />
                            </div>
                        );
                    })}
                </Flickity>
            </div>
        </div>
    );
}

export default CardGroup;