/**
 * Built by Reabot6 from SFG (seofg.xyz)
 * Open-source — github.com/reabot6/streamline
 */
import { useState } from 'react';

/**
 * Manages an ordered list of timestamped items.
 * Returns the list and add / remove handlers.
 */
const useItemList = () => {
    const [items, setItems] = useState([]);

    const addItem = (text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        setItems((prev) => [
            ...prev,
            { id: Date.now(), text: trimmed, timestamp: new Date().toISOString() },
        ]);
    };

    const removeItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return { items, addItem, removeItem };
};

export default useItemList;
