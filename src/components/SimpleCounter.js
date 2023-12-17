import React, { useState } from 'react';

function SimpleCounter() {
    const [count, setCount] = useState(0);

    return (
        <div className="solution">
            <h1>Simple Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default SimpleCounter;
