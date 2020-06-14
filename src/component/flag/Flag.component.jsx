import React from 'react';
import './Flag.style.css';

const Flag = ({ todaysData }) => {
    return (
        <div className='flag'>
            <img src={todaysData.flag} alt='flag'/>
        </div>
    );
};

export default Flag;