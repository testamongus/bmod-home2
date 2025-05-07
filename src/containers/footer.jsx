import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import IntlFooter from '../components/footer/footer.jsx';

class FooterCustom extends React.Component {
    render () {
        const {
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

export default FooterCustom;
