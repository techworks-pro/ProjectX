import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const nav = () => {

    const style = {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#72A894',
        boxShadow: '5px 5px'
    }

    return (
        <ul style={style}>
            <Link to='/Home'><Menu name='Home' source='#' /></Link>
            <Link to='/About'><Menu name='About' source='#' /></Link>
            <Link to='/AllApps'><Menu name='Games' source='#' /></Link>
        </ul>
    )
}

export default nav;