import React from 'react';
import PropTypes from 'prop-types';
import css from './SortButton.module.css';
import { ReactComponent as ArrowIcon } from '../../../assets/images/icon_arrow01.svg';

function SortButton(props) {
    const { children, isActive, onClick, isDesc } = props;
    let { className } = props;

    // Adding active style if active is true
    if (isActive) {
        className = [className, css.active].join(' ');
    }

    return (
        <div id={css.main} className={className} onClick={onClick}>

            <span>{children}</span>

            {children ?
                <ArrowIcon
                    id={css.sortIcon}
                    className={(isDesc ? css.descending : null)}
                    title="" />
                : null
            }
        </div>
    );
}

SortButton.protoTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    isDesc: PropTypes.bool
};

export default SortButton;