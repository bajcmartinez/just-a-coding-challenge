import React from 'react';
import './App.scss';
import Providers from './providers';

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <h1>Coding Challenge</h1>
            </header>

            <div>
                <Providers />
            </div>
        </div>
    );
};

export default App;
