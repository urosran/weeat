import React from 'react';
import Profile from './Profile';


class Carousel extends React.Component{
    render(){
        return(
            <div className="carousel">
                <Profile profileNameGOOD={this.props.profileName} className="profile" />
            </div>
        )
    }
}

export default Carousel;