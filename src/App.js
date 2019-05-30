import React from 'react';

// components
import HomeworkRoot from './Homework/Root';

/// assets
import logo from './logo.svg';
import './App.css';

const App = () => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="content">
                <HomeworkRoot />
            </div>
        </div>
    );
}

export default App;
