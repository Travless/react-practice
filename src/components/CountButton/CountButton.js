import React, { useState, useEffect, useReducer } from 'react';
import './CountButton.css'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0);
    

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy);
    }

    useEffect(() => {
        if(currentCount === 10){
            alert("the count is 10")
        }
    }, [currentCount])

    return <div>
        <button onClick={handleClick}>+{props.incrementBy}</button>
        <div className='count-display' >{currentCount}</div>
    </div>
}


export default CountButton;
