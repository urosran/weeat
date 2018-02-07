import React from 'react';
import Header from './Header';
import Profile from './Profile';

class Account extends React.Component{
    render(){
        return(
            <div className="account" >
                <Header />
                    <p>Your Account</p>
                <Profile />
            </div>
        )
    }
}

export default Account;