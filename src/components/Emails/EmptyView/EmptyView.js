import React from 'react';
import css from './EmptyView.module.css';
import logo from '../../../assets/images/logo.png'


function EmptyView() {
    return (
        <img id={css.logo} src={logo} alt="Logo" />
    );
}

export default EmptyView;