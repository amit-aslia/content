import React, {useState} from 'react';

const initCount = {
    min: 0,
    max: 5
}

const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const handleCountState = (cta) => {
        if((count < initCount.max && cta === 'inc') || (count > initCount.min && cta === 'desc') )
            setCount(prevCount => cta === 'inc' ? prevCount + 1 : prevCount - 1);
    };
    const components = [
        <div>count: {count}</div>,
        <div>count: {count}</div>,
        <div>count: {count}</div>,
        <div>count: {count}</div>,
        <div>count: {count}</div>,
        <div>count: {count}</div>
    ]
    return (
        <div>
            <button onClick={() => handleCountState('desc')}>Decrement</button>
            <div>{components[count]}</div>
            <button onClick={() => handleCountState('inc')}>Increment</button>
        </div>
    )
}

export default React.memo(NewComponent);