import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export default function Counter() {
    const dispatch = useDispatch();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '50%',
            }}
        >
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
}
