import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

ReactDOM.render(
    <div style={style}>
        <h1>Hello World</h1>
    </div>,
    document.getElementById('root')
)