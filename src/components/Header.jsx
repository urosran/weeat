import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import '../../node_modules/ionicons/dist/css/ionicons.css';

const Header=(props) => {
    return(
        <div className="header">
        <div className="header__img">
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <i className="ion-plus"></i>
        <div className="header__name">
            <h1><b>WeEat</b></h1>
        </div>
        </div>
    )
}

export default Header;