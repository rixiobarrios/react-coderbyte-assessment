import React, { useState } from 'react';

const ButtonToggle = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <h1>Button Toggle</h1>
            <button onClick={() => setToggle(!toggle)}>
                {toggle ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default ButtonToggle;
