import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import "./../../../node_modules/flickity/dist/flickity.min.css";
import "./carouselext.css";

var divStyleImg = {
    height: 'auto',
    width: '100%',
    borderRadius: '16px',
};

//https://source.unsplash.com/collection/136095/900x400

function Carousel(props) {
    return (
        <div>
            <div className="carousel" data-flickity='{ "wrapAround": true, "freeScroll": true, "pageDots": false, "imagesLoaded": true, "prevNextButtons": false, "autoPlay": 1500, "adaptiveHeight": true, "contain": true}'>
                <div className="carousel-cell">
                    <img src="https://source.unsplash.com/collection/136095/900x400" style={divStyleImg}></img>
                </div>
                <div className="carousel-cell">
                    <img src="https://source.unsplash.com/collection/136096/900x400" style={divStyleImg}></img>
                </div>
                <div className="carousel-cell">
                    <img src="https://source.unsplash.com/collection/136091/900x400" style={divStyleImg}></img>
                </div>
            </div>

        </div>
    );
}

export default Carousel;