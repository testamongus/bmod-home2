import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import SignUpGuiComponent from '../components/signup-gui/signup-gui.jsx';

class SignUpGui extends React.Component {
    render () {
        const {
            ...props
        } = this.props;
        return (
            <SignUpGuiComponent
                {...props}
            />
        );
    }
}

export default SignUpGui;