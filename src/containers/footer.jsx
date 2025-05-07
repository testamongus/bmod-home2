import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import IntlFooter from '../components/footer/footer.jsx';

class FooterCustom extends React.Component {
    render () {
        const {
            intl,
            ...props
        } = this.props;
        return (
            <IntlFooter
                intl={intl}
                {...props}
            />
        );
    }
}

FooterCustom.propTypes = {
    intl: intlShape.isRequired
};

export default FooterCustom;
