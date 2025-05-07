import classNames from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import MenuBar from '../../containers/menu-bar.jsx';
import FooterCustom from '../../containers/footer.jsx';

const pathname = window.location.pathname

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
            <section>
                <h1>Dinosaurmod</h1>
                <p>{pText}</p>
            </section>
            <FooterCustom
                intl={intl}
                {...componentProps}
            />
        </div>
    )
}

GUIComponent.propTypes = {
    intl: intlShape.isRequired
}

export default injectIntl(GUIComponent);