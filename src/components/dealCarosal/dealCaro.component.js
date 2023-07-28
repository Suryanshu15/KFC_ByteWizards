import React from 'react';

const DealCarosal = (props) => {
    return (
        <>
            <div className='w-full h-30'>
                <img 
                className='w-full h-full rounded-xl'
                src={props.src} 
                alt=" deals" />
            </div>
        </>
    );
};

export default DealCarosal;