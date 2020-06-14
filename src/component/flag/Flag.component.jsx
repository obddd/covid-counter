import React from 'react';

const Flag = ({ todaysData }) => {
    return (
        <div className='flag'>
            <img src={todaysData.flag} alt='flag'/>
        </div>
    );
};

export default Flag;