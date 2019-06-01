import React, {useState} from 'react';

import InputUser from './InputUser';
import OutputUser from './OutputUser';

import rootClasses from './Root.module.css';


const Root = () => { 
    const [userNameState, setUserNameState] = useState({ userName: 'Gabriel Muller' });
    const [cardsTextState, setCardsTextState] = useState([
        {id: 'vId1', text: 'Hello world!'},
        {id: 'vId2', text: 'This is another component!'},
        {id: 'vId3', text: 'React Course - The Complete Guide'}
    ]);

    const handlerChangeUserName = (event) => {
        setUserNameState({
            userName: event.target.value
        });
    };

    const deleteHandler = (itemId) => {
        const newTextState = cardsTextState.filter(item => item.id !== itemId);
        setCardsTextState(newTextState);
    };

    return (
        <div className={rootClasses['root-homework']}>
            <div className={rootClasses['input-container']}>
                <InputUser
                    defaultValue={userNameState.userName} 
                    changeUserName={handlerChangeUserName} />
            </div>

            <div className={rootClasses['output-container']}>
                {
                    cardsTextState.map((item) => {
                        return (
                            <OutputUser 
                                userName={userNameState.userName}
                                text={item.text} 
                                key={item.id} 
                                onDeleteNode={() => deleteHandler(item.id)} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Root;