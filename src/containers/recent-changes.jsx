import PropTypes from 'prop-types';
import React from 'react';
import {intlShape} from 'react-intl';

import RecentChangesComponent from '../components/section-info/recent-changes.jsx';

class RecentChanges extends React.Component {
    render () {
        const {
            ...props
        } = this.props;
        return (
            <RecentChangesComponent
                {...props}
            />
        );
    }
}

export default RecentChanges;