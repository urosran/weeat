import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';

//https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://reacttraining.com/react-router/web/api/Route

class CreateAcc extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: 'usdan'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render(){
        return (
            <div>
            <Header />
            <div className="HallPicker">
             <div className='title'> Creating your account</div>
                <div className=''>
                    <Link to={this.state.value}>
                        <input type="submit" value="See who's there" className='btn' />
                    </Link>
                </div>
            </div>
            </div>

        )
    }
}
export default CreateAcc;
