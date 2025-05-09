import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './footer.css';

const messages = defineMessages({
    notaffiliatedText: {
        id: "home.footer.notaffiliated",
        defaultMessage: 'DinosaurMod is not affiliated with Scratch, TurboWarp, PenguinMod, the Scratch Team, or the Scratch Foundation.',
        description: 'not affiliated text'
    },
    websiteText: {
        id: "home.footer.website",
        defaultMessage: 'Website',
        description: 'create button title'
    },
    donateText: {
        id: "home.footer.donate",
        defaultMessage: 'Donate',
        description: 'examples button title'
    },
    communityText: {
        id: "home.footer.community",
        defaultMessage: 'Community',
        description: 'examples button title'
    }
})

const FooterComponent = function (props) {
    const { intl } = props;
    return (
        <footer className="footer">
            <h1>{intl ? intl.formatMessage(messages.notaffiliatedText) : "DinosaurMod is not affiliated with Scratch, TurboWarp, PenguinMod, the Scratch Team, or the Scratch Foundation."}</h1>
            <div className="footer-row">
                <h3>{intl ? intl.formatMessage(messages.websiteText) : "Website"}</h3>
                <a href="https://dinosaurmod.github.io/editor.html">Editor</a>
                <a href="https://dinosaurmod.github.io/credits.html">Credits</a>
                <a href="/Dino-Home/examples">Examples</a>
                <a href="https://github.com/Dinosaurmod">Source</a>
                <a href="https://dinosaurmod.betteruptime.com/">Status</a>
            </div>
            <div className="footer-row">
                <h3>{intl ? intl.formatMessage(messages.communityText) : "Community"}</h3>
                <a href="https://github.com/Dinosaurmod/dino-home/issues">Report an Issue</a>
            </div>
            <div className="footer-row">
                <h3>{intl ? intl.formatMessage(messages.donateText) : "Donate"}</h3>
                <a href="https://penguinmod.com/donate">PenguinMod</a>
                <a href="https://github.com/sponsors/GarboMuffin">TurboWarp</a>
                <a href="https://www.scratchfoundation.org/donate">Scratch</a>
            </div>
        </footer>
    )
}

FooterComponent.propTypes = {
    intl: intlShape
};

const IntlFooter = injectIntl(FooterComponent);
export default (IntlFooter);