import React, {Fragment} from 'react';

import Card from '../Card/Card';

const InputUser = (props) => {
    const inputStyles = {
        'padding': '10px',
        'border-radius': '5px',
        'border-color': '#eee',
        'font-size': '16px',
        'margin': '0 15px'
    };

    const titleInputUser = 'InputUser Component';
    
    const inputUserCardStyle = { width: '600px' };

    return (
    <Fragment>
        <Card title={titleInputUser} styles={inputUserCardStyle}>
            <label htmlFor="input-tag">User name:</label>
            <input type="text" id="input-tag"
                onChange={props.changeUserName} 
                value={props.defaultValue}
                style={inputStyles}
            />
        </Card>
    </Fragment>
    )
}

export default InputUser