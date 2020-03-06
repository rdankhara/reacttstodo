import React, { useState } from 'react';
import {style} from 'typestyle';
import Button from '@material-ui/core/Button';
import { NumberLabel } from './NumberLabel';
import { NumericInput } from './NumericInput';

const container = style({
    display: 'flex',
    margin: '5px',
    alignItems: 'center',
    $nest: { 
        '&>': { 
            padding: '5px'
        }
    }
})

const Add: React.FC<{number1: number, number2: number}> = ({number1, number2}) => { 
    const [value, setValue]  = useState();

    return(
        <div className={container}>
            <NumberLabel  value={number1} />
            <i className="fas fa-plus"></i>
            <NumberLabel value={number2} />
            <i className="fas fa-equals"></i>
            <NumericInput value={value} setValue={setValue} />
            <Button variant="contained" color="primary" >Submit</Button>
        </div>
    )
}

export { Add };