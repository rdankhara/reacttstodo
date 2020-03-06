import React from 'react';
import {style} from 'typestyle';
import styles from './NumericInput.less';
import Input from '@material-ui/core/Input';

interface NumericInputProps { 
    value: number;
    setValue: (value: number) => void;
}

const NumericInput:React.FC<NumericInputProps> = ({value, setValue}) => { 
    console.log('styles ', styles)
    return (
        <>
        <input className={styles.number}  value={value} onChange={e => setValue(+e.currentTarget.value)} />
        </>
    )
}

export { NumericInput };