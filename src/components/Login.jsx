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
                <form action="/login/facebook" className="btn">
                    <input type="submit" value="Facebook" />
                </form>
            </div>
        </div>


        )
    }

}

export default Login;