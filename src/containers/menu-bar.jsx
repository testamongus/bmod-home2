import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import MenuBarComponent from '../components/menu-bar/menu-bar.jsx';

class MenuBar extends React.Component {
    render () {
        const {
            intl,
            ...props
        } = this.props;
        return (
            <MenuBarComponent
                intl={intl}
                {...props}
            />
        );
    }
}

MenuBar.propTypes = {
    intl: intlShape.isRequired
};

export default MenuBar;
