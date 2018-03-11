import React from 'react';
import Header from './Header.jsx';
import ProfileContainer from "./ProfileContainer.jsx";
import Profile from './Profile.jsx';

class App extends React.Component{
    constructor(){
        super();
        //getInitialState
        this.state = {
            people:{}
        }
    }
    chooseHall(hall){
    }

    render(){
        return(
            <div className="App">
                <Header />
                <ProfileContainer />
            </div>
        )
    }
}
export default App;