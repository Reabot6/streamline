/**
 * Built by Reabot6 from SFG (seofg.xyz)
 * Open-source — github.com/reabot6/streamline
 */
import React, { useState } from 'react';
import useItemList from '../hooks/useItemList';
import '../styles/ItemBoard.css';

const ItemBoard = () => {
    const { items, addItem, removeItem } = useItemList();
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        addItem(inputValue);
        setInputValue('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleAdd();
    };

    return (
        <div className="item-board">
            <div className="item-board__input-row">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter item..."
                    aria-label="New item text"
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <div className="item-board__list" role="list">
                {items.length === 0 ? (
                    <p className="item-board__empty">No items yet. Add one above!</p>
                ) : (
                    items.map((item) => (
                        <div key={item.id} className="item-board__entry" role="listitem">
                            <span>{item.text}</span>
                            <button
                                onClick={() => removeItem(item.id)}
                                aria-label={Remove }
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ItemBoard;
