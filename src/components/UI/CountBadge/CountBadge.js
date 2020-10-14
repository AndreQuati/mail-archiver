import React from 'react';
import PropTypes from 'prop-types';
import css from './CountBadge.module.css';

function CountBadge(props) {
    return (
        <div className={css.badge}>
            {props.value > 999 ? '>999' : '+' + props.value }
        </div>
    );
}

CountBadge.propTypes = {
    value: PropTypes.number
}

export default CountBadge;