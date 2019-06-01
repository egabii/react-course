import React from 'react';


const cardStyles = {
    'width': '280px',
    'box-sizing': 'border-box',
    'display': 'flex',
    'flex-direction': 'column',
    'box-shadow': '0 2px 4px 0 rgba(0,0,0,.5)',
    'padding': '8px',
    'background-color': '#fff'
};
const heading = {
    'font-weight': 700
};
const children =  {
    padding: '7.5px'
};
const removeButtonStyle = {
    'border-radius': '50%',
    'width': '25px',
    'height': '25px',
    backgroundColor: '#000',
    color: '#fff',
    'font-weight': '700'
};
const Card = (props) => {



    const onDisplayDeleteButton = () => {
        let Button = null;
        if (props.onDeleteCard) {
            Button = <button style={removeButtonStyle} onClick={props.onDeleteCard}>X</button>;
        }

        return Button;
    }
    
    const mixStylesFromParent = () => {
        let styles = cardStyles;
        if (props.styles) {
            styles = Object.assign({}, styles, props.styles);
        }

        return styles;
    }

    return (
        <div style={mixStylesFromParent()}>
            { onDisplayDeleteButton() }
            <h4 style={heading}>{props.title}</h4>
            <div style={children}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;