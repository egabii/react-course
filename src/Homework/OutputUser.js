import React, {Fragment} from 'react';

const OutputUser = (props) => {
    const output = {
        'font-size': '18px',
        color: 'rgb(29, 33, 175)',
        'font-weight': '700'
    };
    return (
        <Fragment>
            <p style={output}>{props.userName}</p>
            <p>{props.children}</p>
        </Fragment>
    );
};

export default OutputUser;