import React from 'react';
import Profile from "./Profile.jsx";
import data from './data.js';

class ProfileContainer extends React.Component{

    async componentDidMount(){
        await this.getusers();
    }

    async getusers() {
        let data = await fetch("/db/info", {
            method: "POST"
        });

        data = await data.json();
        this.setState({
            userProfiles: data
        });
    }

    render(){
        return(
            <div>
                {Object.keys(data).map( (profile, index) => <Profile key={index} info={data} />) }
            </div>
        )
    }
}

export default ProfileContainer;