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
                <Link to="./CreateAcc">
                    <button className="btn"> GO TO THE NEXT SCREEN </button>
                </Link>

                {/*<Switch>
                    <Route path='./CreateAcc' Component={CreateAcc} />
                </Switch>*/}

                <a href="/login/facebook">Log in with facebook</a>
            </div>
        </div>


        )
    }

}

export default Login;