import React, {Fragment} from 'react';

import Card from '../Card/Card';

const OutputUser = (props) => {
    const titleOutputUser = 'OutputUser Component';
    const outputStyles = {
        'font-size': '18px',
        color: 'rgb(29, 33, 175)',
        'font-weight': '700'
    };
    return (
        <Fragment>
            <Card title={titleOutputUser} onDeleteCard={props.onDeleteNode}>
                <p style={outputStyles}>{props.userName}</p>
                <p>{props.text}</p>
            </Card>
        </Fragment>
    );
};

export default OutputUser;