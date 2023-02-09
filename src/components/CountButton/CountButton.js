import React, { useState } from 'react';
import './CountButton.css'

const CountButton = (props) => {
    console.log(props)
    const [currentCount, setCurrentCount] = useState(0);
    

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy);
    }
    // style object, must be written with object syntax
    const divStyle = {
        color: 'blue',
    }

    const buttonStyle = {
        background: props.buttonColor,
    }

    return <div style={divStyle}>
        <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
        <div className='count-display' >{currentCount}</div>
    </div>
}


export default CountButton;
