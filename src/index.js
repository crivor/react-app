import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
                <p>Check back for more in {this.props.minutes} minutes</p>
            </div>
        )
    }
}

ReactDOM.render(<Message color="blue" msg="Hello World" minutes={5}/>, document.getElementById('root'))