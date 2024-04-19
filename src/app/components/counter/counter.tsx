"use client";
import React, { useState } from "react";

export type CounterProps = {
    count:number
}

export default function Counter(params:CounterProps) {
    const [value, setValue] = useState(params.count)
    
    const plus = () => setValue(value+1)
    const reset = () => setValue(params.count)
    const minus = () => setValue(value-1)

    return (
        <div className="p-4 flex items-center gap-4" id="counter">
            <button id="reset" className="p-4" onClick={reset}>reset</button>
            <span id="value">Value is {value}</span>
            <button id="plus" className="p-4" onClick={plus}>+</button>
            <button id="minus" className="p-4" onClick={minus}>-</button>
        </div>
    )
}