import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/flickity/dist/flickity.pkgd.min.js';
import Navbar from './components/Heading/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import TopChart from './components/TopChart/TopChart';
import Favourites from './components/Favourites/Favourites';
import { Credentials } from './Credentials';
import axios from "axios";

function App() {

    // const spotify = Credentials();

    // console.log('RENDERING APP.JS');

    // const [token, setToken] = useState('');
    // const [tracks, setTracks] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const GetPlaylist = async (currToken, playlistId) => {


    //     await axios(`https://api.spotify.com/v1/playlists/${playlistId}/tracks `, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + currToken
    //         }
    //     })
    //         .then(tracksResponse => {
    //             let tempArray = [];
    //             for (let i = 0; i < 10; i++) {
    //                 tempArray = [...tempArray, {
    //                     index: tempArray.length,
    //                     artists: tracksResponse.data.items[i].track.artists[0].name,
    //                     spotifyLink: tracksResponse.data.items[i].track.external_urls.spotify,
    //                     trackId: tracksResponse.data.items[i].track.id,
    //                     imageUrl: tracksResponse.data.items[i].track.album.images[1].url,
    //                     trackName: tracksResponse.data.items[i].track.name,
    //                     trackPreviewUrl: tracksResponse.data.items[i].track.preview_url
    //                 }]
    //             }
    //             setTracks(tempArray);
    //         });
    //         setLoading(true);
    //         // tracksResponse.data.items.length
    // }

    // const buttonClicked = async (currToken) => {

    //     await axios(`https://api.spotify.com/v1/search?q=Global%20Top%2050&type=playlist`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + currToken
    //         }
    //     })
    //         .then(tracksResponse => {

    //             GetPlaylist(currToken, tracksResponse.data.playlists.items[0].id)
    //         })


    // }

    // useEffect(() => {

    //     axios('https://accounts.spotify.com/api/token', {
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
    //         },
    //         data: 'grant_type=client_credentials',
    //         method: 'POST'
    //     })
    //         .then(tokenResponse => {
    //             setToken(tokenResponse.data.access_token);
    //             buttonClicked(tokenResponse.data.access_token);
    //         });


    // }, [spotify.ClientId, spotify.ClientSecret]);

    return (
        <>
            <Navbar />
            <Carousel />




            <TopChart />
            <Footer />
        </>
    );
}
export default App;