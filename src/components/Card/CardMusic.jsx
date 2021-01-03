import React from 'react';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import IconButton from '@material-ui/core/IconButton';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import "./Cardext.css";

function CardMusic(props) {
    return (
        <div>
            <div className="card container p-0 border-black zoom">
                <div className="imageContainer">
                    <img src={props.imageUrl} alt="TrackImage" className="card-img-top imge"></img>
                    <div className="overlay">
                        <IconButton className="playButton" href={props.trackPreviewUrl} >
                            <PlayCircleFilledIcon style={{color:'#1f80e0', fontSize:60}}/>
                        </IconButton>
                    </div>
                </div>
                <div className="card-body p-2 mb-0">
                    <h5><strong>{props.trackName}</strong></h5>
                    <p className="mb-0">
                        <i>{props.artists}</i>
                    </p>
                </div>
                <div className="card-footer pt-1 pb-1 pl-0 pr-0">
                    <IconButton>
                        <FavoriteRoundedIcon color="action" />
                    </IconButton>
                    <IconButton>
                        <ShareRoundedIcon color="primary" />
                    </IconButton>

                    <IconButton className="float-right">
                        <MoreVertRoundedIcon color="secondary" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default CardMusic;