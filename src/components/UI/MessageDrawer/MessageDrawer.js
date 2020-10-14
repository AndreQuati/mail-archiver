import React from 'react';
import PropTypes from 'prop-types';
import css from './MessageDrawer.module.css';

function MessageDrawer(props) {
    
    const { expanded, children } = props;

    return (
        <div id={css.message} className={expanded ? css.open : null}>
            {expanded ? children : null}
        </div>
    );
}

MessageDrawer.propTypes = {
    expanded: PropTypes.bool,
    children: PropTypes.any
};

export default MessageDrawer;