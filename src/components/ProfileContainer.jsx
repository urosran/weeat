import React from 'react';
import Profile from "./Profile.jsx";
// import data from './data.js';

class ProfileContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userProfiles:[]
        }
    }

    async componentDidMount(){
        await this.getusers();
    }

    async getusers() {
        let data = await fetch("/db/usdanUsers");

        data = await data.json();
        console.log("zzz" + data);
        this.setState({
            userProfiles: data.currentUsers
        });
    }

    render(){
        console.log(this.state)
        return(
            <div>
                {Object.keys(this.state.userProfiles).map( (profile, index) =>
                 <Profile key={index} info={this.state.userProfiles[index]} />) }
            </div>
        )
    }
}

export default ProfileContainer;