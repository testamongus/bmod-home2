import classNames from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import MenuBar from '../../../containers/menu-bar.jsx';

const pathname = window.location.pathname

const GUIComponent = props => {
    const {
        intl,
        ...componentProps
    } = omit(props, 'dispatch')

    return (
        <MenuBar
            intl={intl}
            {...componentProps}
        />
        {(!pathname.includes("examples")) &&
            <section>
                <h1>Dinosaurmod</h1>
                <p>Welcome to the Home Page of DinosaurMod!</p>
            </section>
        }
        {(pathname.includes("examples")) &&
            <section>
                <h1>Dinosaurmod</h1>
                <p>Welcome to the Examples Page of DinosaurMod!</p>
            </section>
        }
        
    )
}

GUIComponent.propTypes = {
    intl: intlShape.isRequired
}

export default injectIntl(GUIComponent);