import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import IntlMenuBar from '../components/menu-bar/menu-bar.jsx';

class MenuBar extends React.Component {
    render () {
        const {
            intl,
            ...props
        } = this.props;
        return (
            <IntlMenuBar
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
