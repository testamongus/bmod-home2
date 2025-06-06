import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './whats-new.css';

const WhatsNewComponent = function (props) {
    const { intl } = props;
    return (
        <div id="whats-new">
            <div className="header">
                <span>What's new?</span>
                <a href="https://github.com/banana-mod" target="_blank" rel="noopener noreferrer">
                    See more
                </a>
            </div>
            <div className="whats-new-stuff">
                
            </div>
            <div className="error-message" style={{ display: 'none' }}>
                There isn't anything new yet.
            </div>
        </div>
    )
}

WhatsNewComponent.propTypes = {
    intl: intlShape
};

const IntlWhatsNew = injectIntl(WhatsNewComponent);
export default (IntlWhatsNew)
