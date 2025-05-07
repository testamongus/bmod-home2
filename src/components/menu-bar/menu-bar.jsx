import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './menu-bar.css';

import moonIcon from '../../icons/moon.svg';

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
        <nav className={classNames(styles.menubar || 'menubar', 'menubar')}>
            <ul className={classNames(styles.menubar_ul || 'menubar_ul', 'menubar_ul')}>
                <li className={classNames(styles.menubar_li || 'menubar_li', "menubar_li")}>
                    <a id="IconImage" href="https://dinosaurmod.github.io/Dino-Home"><img src="https://dinosaurmod.github.io/favicon.ico" alt="Icon"/></a>
                </li>
                <li className={classNames(styles.menubar_li || 'menubar_li', 'menubar_li')}>
                    <a id="darkModeToggle"><img src={moonIcon} alt="Moon Icon"/></a>
                </li>
                <li className={classNames(styles.menubar_li || 'menubar_li', 'menubar_li')}>
                    <a href="https://dinosaurmod.github.io/editor.html">{intl ? intl.formatMessage(messages.createText) : "Create_"}</a>
                </li>
                <li className={classNames(styles.menubar_li || 'menubar_li', 'menubar_li')}>
                    <a href="/Dino-Home/examples">{intl ? intl.formatMessage(messages.examplesText) : "Examples_"}</a>
                </li>
                <li className={classNames(styles.menubar_li || 'menubar_li', 'menubar_li')}>
                    <a href="https://dinosaurmod.betteruptime.com/">{intl ? intl.formatMessage(messages.statusText) : "Status_"}</a>
                </li>
                <li className={classNames(styles.menubar_li || 'menubar_li', 'menubar_li')}>
                    <button id="menubar_searchIcon">&#128269;</button>
                    <input type="text" className={classNames(styles.menubar_input || 'menubar_input', 'menubar_input')} id="searchBar" placeholder="Search for projects on PM..."/>
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