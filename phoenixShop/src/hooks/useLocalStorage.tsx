import React, {useState} from 'react';

const getLocalStorage = (item:string) => {
    const storage = localStorage.getItem(item);

    if (storage) return JSON.parse(storage);

    return [];
}

export function useLocalStorage<T>(item: string) {
    const [value, setValue] = useState(getLocalStorage(item));

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}