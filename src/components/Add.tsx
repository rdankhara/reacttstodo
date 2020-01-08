import React from 'react';
import {style} from 'typestyle';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { NumberLabel } from './NumberLabel';

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

const Add: React.FunctionComponent<{number1: number, number2: number}> = ({number1, number2}) => { 
    
    return(
        <div className={container}>
            <NumberLabel  value={number1} />
            <i className="fas fa-plus"></i>
            <NumberLabel value={number2} />
            <i className="fas fa-equals"></i>
            <Button variant="contained" color="primary" >Submit</Button>
        </div>
    )
}

export { Add }