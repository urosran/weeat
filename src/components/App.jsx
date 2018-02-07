import React from 'react';
import Header from './Header.jsx';
import Profile from './Profile.jsx';
import fakeData from '../fakeData.json';

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
                <Profile data={fakeData} className="profile" />
            </div>
        )
    }
}
export default App;