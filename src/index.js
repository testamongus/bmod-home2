import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import './lib/colors.js';
import './lib/dark-mode.js';
import './lib/search.js';
import './lib/translate.js';
import './css/index.css';

import de from './translations/de.json';
import en from './translations/en.json';

import GUI from './containers/gui.jsx';

const messages = {
    "de": de,
    "en": en
};

const chosenLocale = localStorage.getItem('chosenLocale');

ReactDOM.render(
    <IntlProvider locale={chosenLocale} messages={messages[chosenLocale]}>
        <GUI />
    </IntlProvider>,
    document.getElementById('root')
);