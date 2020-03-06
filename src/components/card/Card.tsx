import React from 'react';
import * as styles from './Card.less';

interface CardProps { 
    children: JSX.Element;
}
const Card:React.FC<CardProps> = ({children}) => { 
    const eventHandler = (e: React.SyntheticEvent) => { 
        console.log('e.type', e.type, 'target.name', e.currentTarget.getAttribute('name'));
    }
    return (
        <div className='card'>
            <div className={'bg1'} />
            <div className={'bg2'} />
            <div className="card-container">
                <div className={'chrome'}>
                    <div className="actions">
                        <button name="close" className="close" onClick={eventHandler}>x</button>
                    </div>
                </div>
                <div className={'innerCard'}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export { Card };