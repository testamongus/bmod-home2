import classNames from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import MenuBar from '../../containers/menu-bar.jsx';
import FooterCustom from '../../containers/footer.jsx';
import SectionInfo from '../../containers/section-info.jsx';
import RecentChanges from '../../containers/recent-changes.jsx';

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
    const pText = isExamplesPage ? "Welcome to the Examples Page of DinosaurMod!" : "Welcome to the Home Page of DinosaurMod!";

    return (
        <div>
            <MenuBar
                intl={intl}
                {...componentProps}
            />
            <SectionInfo
                intl={intl}
                {...componentProps}
            />
            <section>
                <h1>{BRAND_NAME}</h1>
                <p>{pText}</p>
                <RecentChanges
                    intl={intl}
                    {...componentProps}
                />
            </section>
            {(!!isExamplesPage && (
                <div className="section-content">
                    <div className="image-card">
                        <img src={DinoClickerThumb} alt="Image"/>
                        <h3>Dino Clicker</h3>
                        <a href="https://dinosaurmod.github.io/?project_url=https://raw.githubusercontent.com/Dinosaurmod/examples/main/src/dino-files/DinoClicker.dino">Try it out!</a>
                    </div>
                    <div className="image-card">
                        <img src={SwearDetectorThumb} alt="Image"/>
                        <h3>Swear Detector</h3>
                        <a href="https://dinosaurmod.github.io/?project_url=https://raw.githubusercontent.com/Dinosaurmod/examples/main/src/dino-files/SwearDetector.dino">Try it out!</a>
                    </div>
                </div>
            ))}
            <FooterCustom
                intl={intl}
                {...componentProps}
            />
        </div>
    )
}

GUIComponent.propTypes = {
    intl: intlShape
}

export default injectIntl(GUIComponent);