import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from './layout';
import registerServiceWorker from './registerServiceWorker';
import './firebase/loadProducts';

import './index.css';

ReactDOM.render( <Layout />, document.getElementById('root'));
registerServiceWorker();
