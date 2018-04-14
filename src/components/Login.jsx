import React from 'react';
import { Switch, Link } from 'react-router-dom';
import CreateAcc from './CreateAcc.jsx'
import Route from 'react-router-dom/Route';
import Header from './Header.jsx'
// import CreateAcc from './CreateAcc.js';
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import PostData from "../services/PostData.jsx"


class Login extends React.Component{
    constructor(props){
        super(props);
        this.stats={redirect: false}
        this.signup = this.signup.bind(this);
    }

    signup(res, type){

    }


    render(){
        const responseFacebook = (response) => {
            console.log(response);
            this.signup(response, "facebok")
        }
        const responseGoogle = (response) => {
            console.log(response)
            this.signup(response, "google")
        }

        return(

        <div>
            <div className="login">
                <Header />
                <Link to="./CreateAcc">
                    <button className="btn"> GO TO THE NEXT SCREEN </button>
                </Link>

                <GoogleLogin
                clientId="255467020531-mqf54j4fqu1lletj4cu7ed57spsrmvl0.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/>
                <FacebookLogin
                appId="1949334845286020"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />

                <Switch>
                    <Route path='./CreateAcc' Component={CreateAcc} />
                </Switch>
            </div>
        </div>


        )
    }

}

export default Login;