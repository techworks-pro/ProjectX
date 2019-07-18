import React from 'react';
import Menu from './Menu';

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
            <Menu name='Home' source='#'/>
            <Menu name='About' source='#'/>
            <Menu name='Portfolio' source='#'/>
            <Menu name='Games' source='#'/>
        </ul>
    )
}

export default nav;