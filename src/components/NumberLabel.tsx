import React from 'react';
import {style} from 'typestyle';

const number = style({
    border: '1px solid gray',
    background: 'yellow',
    marginLeft: '15px',
    marginRight: '15px',
    lineHeight: '50px',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    marginTop: 'auto'
})

const NumberLabel:React.FC<{value: number}> = ({value}) => { 
    return (
        <>
        <span className={number}>{value}</span>
        </>
    )
}

const NumericInput:React.FC<{value: number}> = ({value}) => { 
    return (
        <>
        <input className={number} value={value} />
        </>
    )
}

export { NumberLabel, NumericInput }