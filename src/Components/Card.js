import React from 'react';

function Card({src, name, email}){
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={src} alt='robots'/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    );
} 

export default Card;