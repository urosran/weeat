import React from 'react';
import helpers from '../../helpers.js'

class Profile extends React.Component{
    render(){
        let className = 'profile';
        if (this.props.isActive) {
          className += ' profile-active';
        }
        return(
            <div className={className}>

                <div className="profile__photo">
                    <img className="profile__photo__img" src= "" />
                    <p className="profile__photo__time"> {helpers.moment().endOf("day").fromNow()}</p>
                </div>

                <div className="profile__info">
                    <div className="profile__info__name-container">
                        <p className="name">
                            uros
                            <b>{this.props.info.name}</b>
                        </p>
                    </div>
                    <p className="profile__info__description">Tag1 tag2 tag3</p>
               </div>

            </div>
        )
    }
}

export default Profile;