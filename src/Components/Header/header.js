import React from 'react';

const header = () => {
    const headingStyle = {
        color: "white",
        textShadow: "3px 3px green",
        textTransform: "uppercase",
        textAlign: 'center',
        border: '1px solid red',
        margin: '0',
        marginBotton: '0'
      };
    return (
        <div className="App-header">
        <h1 style={headingStyle}>ProjectX</h1>
        </div>
    )
}

export default header;