import React from 'react';
import { Switch, Link } from 'react-router-dom';
import CreateAcc from './CreateAcc.jsx'
import Route from 'react-router-dom/Route';
import Header from './Header.jsx'
// import CreateAcc from './CreateAcc.js';
import PostData from "../services/PostData.jsx"


class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

        <div>
            <div className="login">
                <Header />
                Welcome to WeEat!<br/>
                Login with facebook below, and start meeting people :)
                <Link to="./CreateAcc">
                    {/* <button className="btn"> GO TO THE NEXT SCREEN </button> */}
                </Link>
                <button className="btn" href="/login/facebook">Facebook</button>
                {/* <a href="/login/facebook">Log in with facebook</a> */}
            </div>
        </div>


        )
    }

}

export default Login;