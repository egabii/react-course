import React, {useState} from 'react';

import Card from  '../Card/Card';
import InputUser from './InputUser';
import OutputUser from './OutputUser';

import rootClasses from './Root.module.css';

const Root = () => { 
    const [userNameState, setUserName] = useState({ userName: 'Gabriel Muller' });
    const titleInputUser = 'InputUser Component';
    const titleOutputUser = 'OutputUser Component';
    const randomTextList = [
        {text: 'Hello world!'},
        {text: 'This is another component!'},
        {text: 'React Course - The Complete Guide'}
    ];
    const cardStyles = {
        'width': '280px',
        'box-sizing': 'border-box',
        'display': 'flex',
        'flex-direction': 'column',
        'box-shadow': '0 2px 4px 0 rgba(0,0,0,.5)',
        'padding': '8px',
        'background-color': '#fff'
    };
    const inputUserCardStyle = Object.assign({}, cardStyles,  { width: '600px' } );


    const handlerChangeUserName = (event) => {
        setUserName({
            userName: event.target.value
        });
    };


    return (
        <div className={rootClasses['root-homework']}>
            <div className={rootClasses['input-container']}>
                <Card title={titleInputUser} styles={inputUserCardStyle}>
                    <InputUser
                        defaultValue={userNameState.userName} 
                        changeUserName={handlerChangeUserName} />
                </Card>
            </div>

            <div className={rootClasses['output-container']}>
                {
                    randomTextList.map(item => {
                        return (
                            <Card title={titleOutputUser} styles={cardStyles}>
                                <OutputUser 
                                    userName={userNameState.userName}
                                    key={`outputUser-${item.text}`}>
                                    {item.text}
                                </OutputUser>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Root;