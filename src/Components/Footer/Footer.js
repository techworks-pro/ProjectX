import React from 'react';


const footer = () => {

    const style = {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#72A894',
        boxShadow: '5px 5px #000',
        color: 'white'
    }

    const styleRight = {
        textAlign: 'right'
    }

    const styleLeft = {
        textAlign: 'left'
    }
    return (
        <div style={style}>
            <p>
                <span style={styleLeft}>
                Copyright protected by Sunil Ale
                </span> {' '}
                <span style={styleRight}>
                    c 2019
                </span>
            </p>
        </div>
    )
}

export default footer;