import React, {Fragment} from 'react';


const InputUser = (props) => {
    const inputStyles = {
        'padding': '10px',
        'border-radius': '5px',
        'border-color': '#eee',
        'font-size': '16px',
        'margin': '0 15px'
    };
    
    return (
    <Fragment>
        <label htmlFor="input-tag">User name:</label>
        <input type="text" id="input-tag"
            onChange={props.changeUserName} 
            value={props.defaultValue}
            style={inputStyles}
        />
    </Fragment>
    )
}

export default InputUser