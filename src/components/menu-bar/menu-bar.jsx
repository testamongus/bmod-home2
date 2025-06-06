import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './menu-bar.css';

import moonIcon from './icons/moon.svg';
import globeIcon from './icons/globe.svg';
import dropdownCaretIcon from './icons/dropdown-caret.png';

const messages = defineMessages({
    createText: {
        id: "home.menubar.create",
        defaultMessage: 'Create',
        description: 'create button title'
    },
    examplesText: {
        id: "home.menubar.examples",
        defaultMessage: 'Examples',
        description: 'examples button title'
    },
    statusText: {
        id: "home.menubar.status",
        defaultMessage: 'Status',
        description: 'status button title'
    },
})

const MenuBarComponent = function (props) {
    const { intl } = props;
    return (
        <nav className="menu-bar">
            <ul className="menu-bar_ul">
                <li className="menu-bar_li_left">
                    <a className="menu-bar_a" id="languagesListToggle">
                        <img src={globeIcon} alt="Globe Icon"/>
                        <img src={dropdownCaretIcon} alt="Dropdown Caret"/>
                    </a>
                    <ul id="languagesDropdown" className="menu-bar_languages-dropdown">
                        <li className="menu-bar_language-option" data-language="de">
                            Deutsch
                        </li>
                        <li className="menu-bar_language-option" data-language="en">
                            English
                        </li>
                        <li className="menu-bar_language-option" data-language="es">
                            Español (España)
                        </li>
                        <li className="menu-bar_language-option" data-language="es-419">
                            Español Latinoamericano
                        </li>
                    </ul>
                </li>
                <li className="menu-bar_li">
                    <a id="IconImage" href="https://banana-mod.github.io/home"><img src="https://banana-mod.github.io/favicon.ico" alt="Icon"/></a>
                </li>
                <li className="menu-bar_li">
                    <a className="menu-bar_a" id="darkModeToggle"><img src={moonIcon} alt="Moon Icon"/></a>
                </li>
                <li className="menu-bar_li">
                    <a className="menu-bar_a" href="https://banana-mod.github.io/editor.html">{intl ? intl.formatMessage(messages.createText) : "Create"}</a>
                </li>
                <li className="menu-bar_li">
                    <button id="menubar_searchIcon">&#128269;</button>
                    <input type="text" className="menu-bar_input" id="menubar_searchBar" placeholder="Search for projects on Snail-ide..."/>
                </li>
            </ul>
            <label id="icon">
                <i className="fas fa-bars"></i>
            </label>
        </nav>
    )
}

MenuBarComponent.propTypes = {
    intl: intlShape
};

const IntlMenuBar = injectIntl(MenuBarComponent);
export default (IntlMenuBar)
