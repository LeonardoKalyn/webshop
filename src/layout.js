import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Menu} from './components/menu.js';
import {Footer} from './components/footer.js';
import {Routes} from './routes';

export class Layout extends React.Component {
    render () {
        let cart = {
            length: 0
        };
        return (
            <BrowserRouter>
                <div>
                    <Menu cart={cart}/>
                    <Routes />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
};