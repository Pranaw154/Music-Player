import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IconButton from '@material-ui/core/IconButton';
import TranslateRoundedIcon from '@material-ui/icons/TranslateRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container">
                    <a href="#" className="navbar-brand mr-1">Music App</a>

                    <IconButton className="navbar-toggler" data-toggle="collapse" data-target="#navid">
                        <MenuRoundedIcon color="primary"/>
                    </IconButton>

                    
                    <div className="collapse navbar-collapse ml-lg-5" id="navid">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">My Music</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Help</a>
                            </li>
                            
                        </ul>
                        {/* form-control */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <form className="d-flex align-items-center">
                                    <input className="form-control d-inline" type="search" style={{borderRadius:"16px"}} placeholder="Search" aria-label="Search"/>
                                    <IconButton className="btn btn-outline-success" type="submit">
                                        <SearchRoundedIcon color="primary"/>
                                    </IconButton>
                                </form>
                            </li>
                            <li className="nav-item">
                                 <IconButton color="primary">
                                     <TranslateRoundedIcon/>
                                 </IconButton>
                            </li>
                            <li className="nav-item">
                                 <IconButton color="primary">
                                     <Brightness4RoundedIcon/>
                                 </IconButton>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}
export default Navbar;