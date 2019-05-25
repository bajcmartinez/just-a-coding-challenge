import React from 'react';
import './App.scss';
import Providers from './providers';
import Container from 'react-bootstrap/Container';

const App: React.FC = () => {
    return (
        <Container fluid>
            <header>
                <h1>Coding Challenge</h1>
            </header>

            <div>
                <Providers />
            </div>
        </Container>
    );
};

export default App;
