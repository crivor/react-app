import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

const title = React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    React.createElement(
        'h1',
        {},
        'Hello World'
    )
)

ReactDOM.render(
    title,
    document.getElementById('root')
)