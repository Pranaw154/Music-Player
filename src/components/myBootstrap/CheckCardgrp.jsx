import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../../node_modules/flickity/dist/flickity.min.css";


function CheckCardgrp(playlist) {

    var arr = []
    for (let i = 0; i < playlist.playlist.length; i++) {
        const element = playlist.playlist[i];
        arr.push(element);
    }
    return (

        <div>
            {/* {console.log(arr)}
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img className="d-block w-100" src="https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab" alt="First slide" />
                    </div>

                    {arr.map((p, index) => {
                        return (
                            <div className="carousel-item" key={index} >
                                <img className="d-block w-100" src={p.imageUrl} alt="First slide" />
                            </div>
                        );
                    })}
                </div>
            </div> */}


            <div id="carouselExampleControls" class="carousel slide container" data-ride="carousel">
                <div class="carousel-inner bg-dark align-content-center align-items-center">
                    <div class="carousel-item active" style={{height:"300px", width:"300px"}}>
                        <img class="d-block w-100" src="https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab" alt="First slide" />
                    </div>

                    {arr.map((p, index) => {
                        return (
                            <div className="carousel-item" style={{height:"300px", width:"300px"}} key={index} >
                                <img className="d-block w-100" src={p.imageUrl} alt="First slide" />
                            </div>
                        );
                    })}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
}

export default CheckCardgrp;