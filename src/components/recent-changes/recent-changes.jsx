import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './recent-changes.css';

const RecentChangesComponent = function (props) {
    const { intl } = props;
    return (
        <div id="recent-changes">
            <div className="header">
                <span>Recent changes</span>
                <a href="https://github.com/dinosaurmod" target="_blank" rel="noopener noreferrer">
                    See more
                </a>
            </div>
            <ul className="commit-list"></ul>
            <div className="error-message" style={{ display: 'none' }}>
                Failed to load recent changes.
            </div>
        </div>
    )
}

RecentChangesComponent.propTypes = {
    intl: intlShape
};

const IntlRecentChanges = injectIntl(RecentChangesComponent);
export default (IntlRecentChanges)