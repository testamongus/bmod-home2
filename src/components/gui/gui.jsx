import classNames from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import MenuBar from '../../containers/menu-bar.jsx';
import SectionInfo from '../../containers/section-info.jsx';
import RecentChanges from '../../containers/recent-changes.jsx';
import Gap from '../../containers/gap.jsx';
import SignUpGui from '../../containers/signup-gui.jsx';

import {BRAND_NAME} from '../../lib/brand.js';

import DinoClickerThumb from './example-cards/DinoClickerThumb.png';
import SwearDetectorThumb from './example-cards/SwearDetectorThumb.png';

import styles from './gui.css';

const pathname = window.location.pathname;

const GUIComponent = props => {
    const {
        intl,
        ...componentProps
    } = omit(props, 'dispatch')

    const isExamplesPage = pathname.includes("examples");
    const isInSignUpPage = pathname.includes("signup");
    const pText = isExamplesPage ? "Welcome to the Examples Page of Banana-mod!" : "Welcome to the Home Page of Banana-mod!";

    return (
        <div>
            <MenuBar
                intl={intl}
                {...componentProps}
            />
            {(!isInSignUpPage && (
                <div className="thats enough divs!!!">
                    <SectionInfo
                        intl={intl}
                        {...componentProps}
                    />
                    <section>
                        <h1>{BRAND_NAME}</h1>
                        <p>{pText}</p>
                    </section>
                    <RecentChanges
                        intl={intl}
                        {...componentProps}
                    />
                    <Gap size="18px" />

                </div>
            ))}
            {(!!isInSignUpPage && (
                <div className="page-wrapper">
                    <SignUpGui
                        intl={intl}
                        {...componentProps}
                    />
                </div>
            ))}
        </div>
    )
}

GUIComponent.propTypes = {
    intl: intlShape
}

export default injectIntl(GUIComponent);
