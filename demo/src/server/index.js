const express = require('express');
const path = require('path');

import React from 'react';
import App from '../App';
import ReactDOMServer from 'react-dom/server';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    const Component = ReactDOMServer.renderToString(<App />);
    res.send(Component);
})

app.listen(8000, () => {
    console.log('Listentnin tat 8000')
});