import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import SectionInfoComponent from '../components/section-info/section-info.jsx';

class SectionInfo extends React.Component {
    render () {
        const {
            ...props
        } = this.props;
        return (
            <SectionInfoComponent
                {...props}
            />
        );
    }
}

export default SectionInfo;