import React from 'react';
import Header from './Header.jsx';
import ProfileContainer from "./ProfileContainer.jsx";
import Profile from './Profile.jsx';
import BottomMenu from './BottomMenu.jsx';

class App extends React.Component{
    constructor(){
        super();
        //getInitialState
        this.state = {
            people:{}
        }
    }


    render(){
        return(
            <div className="App">
                <Header />
                <div className="spacer">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <ProfileContainer />
                <BottomMenu className="bottomMenu"/>
            </div>
        )
    }
}
export default App;