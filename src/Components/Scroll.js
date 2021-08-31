import React from 'react';

const Scroll = function ({children}) {
    return (
        <div style={{height:'75vh', overflowY:'scroll', border:'3px solid black'}}>
        {children}
        </div>
    )
}

export default Scroll;