import React from 'react';
import { Link } from 'react-router-dom';

//https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://reacttraining.com/react-router/web/api/Route

class HallPicker extends React.Component{

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
            <div className="HallPicker">
             <div className='title'> CHOOSE YOUR DINING HALL</div>
                <div className=''>
                    <form onSubmit={this.handleSubmit} className='selector'>
                        <select className="selector" value={this.state.value} onChange={this.handleChange}>
                            <option value="usdan">Usdan</option>
                            <option value="sherman">Sherman</option>
                        </select>
                    </form>
                    <Link to={this.state.value}>
                        <input type="submit" value="See who's there" className='btn' />
                    </Link>
                </div>
            </div>
        )
    }
}
export default HallPicker;
