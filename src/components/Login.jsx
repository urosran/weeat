import React from 'react';
import { Switch, Link } from 'react-router-dom';
import CreateAcc from './CreateAcc.js'
import Route from 'react-router-dom/Route';
// import CreateAcc from './CreateAcc.js';



class Login extends React.Component{



    render(){
        return(
        <div>
            <div className="login">
                WeEat
                <Link to="./CreateAcc">
                    <button className="btn"> GO TO THE NEXT SCREEN </button>
                </Link>

                <Switch>
                    <Route path='./CreateAcc' Component={CreateAcc} />
                </Switch>
            </div>
        </div>


        )
    }

}

export default Login;