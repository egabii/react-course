import React from 'react';

const Card = (props) => {

    const heading = {
        'font-weight': 700
    };
    const children =  {
        padding: '7.5px'
    };

    return (
        <div style={props.styles}>
            <h4 style={heading}>{props.title}</h4>
            <div style={children}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;