import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function DateLabel(props) {

    const { id, className, children } = props;
    let formattedDate = '';

    if (children) {
        formattedDate = getFormattedDate(children);
    }

    function getFormattedDate(rawDate) {
        const date = moment(rawDate);
        const today = new Date();

        if (date.isSame(today, 'day')) {
            return date.format('H:MM');
        }
        else if (date.isSame(today, 'year')) {
            return date.format('MMM DD');
        }
        else {
            return date.format('YYYY/MM/DD');
        }
    }

    return (
        <span id={id} className={className}>
            {formattedDate}
        </span>
    );
}

DateLabel.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string
    ])
};

export default DateLabel;