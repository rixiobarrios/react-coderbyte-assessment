import React, { useState } from 'react';

function List() {
    const [list, setList] = useState(['Item 1', 'Item 2']);

    function addItem() {
        setList([...list, 'New Item']);
    }

    function removeItem(index) {
        setList(list.filter((item, i) => i !== index));
    }

    return (
        <div className="solution">
            <h1>List</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default List;
