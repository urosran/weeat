//elements
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//scss/
import './scss/style.scss';

//components
import App from './components/App.jsx';
import HallPicker from './components/HallPicker.jsx'
import Account from './components/Account.jsx';
import Login from './components/Login.jsx';
import CreateAcc from './components/CreateAcc.jsx';


const NoMatch = () => {
    return <h1>404 DINASOUR</h1>
}

const Root = () => {
    return(
    <Router>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/hall' component={HallPicker} />
            <Route exact path='/app' component={App} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/sherman' component={NoMatch} />
            <Route exact path='/usdan' component={App} />
            <Route exact path='/CreateAcc' component={CreateAcc} />
            <Route component={NoMatch}/>
        </Switch>
    </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('main'));
registerServiceWorker();
