import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './section-info.css';

import codeIcon from './icons/code.svg';

import openEditor from './button.js';

const SectionInfoComponent = function (props) {
    const { intl } = props;
    return (
        <div className="section-info">
            <h2>Block-based coding with many capabilities</h2>
            <h2>Built off of <a style={{ textDecoration: 'underline' }} href="https://scratch.mit.edu" >Scratch</a>, <a style={{ textDecoration: 'underline' }} href="https://turbowarp.org" >TurboWarp</a> and <a style={{ textDecoration: 'underline' }} href="https://penguinmod.com" >PenguinMod</a>.</h2>
            <button onClick={openEditor} ><img src={codeIcon}></img>Start Creating</button>
        </div>
    )
}

SectionInfoComponent.propTypes = {
    intl: intlShape
};

const IntlSectionInfo = injectIntl(SectionInfoComponent);
export default (IntlSectionInfo)