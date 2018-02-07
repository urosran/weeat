//elements
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//css
import './css/style.css';
//components
import App from './components/App';
import HallPicker from './components/HallPicker'
import Account from './components/Account';
import Login from './components/Login';
import CreateAcc from './components/CreateAcc';



const NoMatch = () => {
    return <h1>404 DINASOUR</h1>
}

const Root = () => {
    return(
        // <div className="uros">
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


// HallPicker.contextTypes = {
//     router: React.PropTypes.object
// }


ReactDOM.render(<Root />, document.getElementById('main'));
registerServiceWorker();
