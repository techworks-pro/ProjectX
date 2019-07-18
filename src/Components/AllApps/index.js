import React from 'react';
// import Input from '../Components/input';

import Nav from './Components/Navigation/nav';
import Sources from './Components/Sources/sources';
import CompApp from './Components/CompApps/compApp'


const index = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'colums',
        margin: '0 10rem',
        padding: '10px',
        backgroundColor: 'grey',
        position: 'relative'
    }
    return (
        <div style={style}>
            <div>
                <Nav />
                {/* <button onClick={this.changeApp}/> */}
            </div>
            <div><Sources /></div>
            <div> <CompApp /> </div>
        </div>
    )
}

export default index;