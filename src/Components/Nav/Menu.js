import React from 'react';
import './Menu.css';

const menu = (props) => {

    const style = {
        color: 'inherit',
        textDecoration: 'none'
    }


    return (<li className='nav-li'>
        <a href={props.source}
            style={style}>
            {props.name}
        </a>
    </li>
    )
}

export default menu;