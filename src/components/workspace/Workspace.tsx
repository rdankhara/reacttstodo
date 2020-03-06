import React, { useState } from 'react';
import { Card } from '../card/Card';

interface CardState { 
    id: number;
}


const initialState: CardState[] = [];

const Workspace: React.FC<any> = (props) => { 
    const [tiles, setTiles]= useState(initialState);
    const addHandler = (e:React.SyntheticEvent) => {
        console.dir(tiles);
        console.log('tiles' , tiles);
        const newTile:CardState = { id: tiles.length + 1};
        const newTiles = [...tiles, newTile];
        setTiles(newTiles);
    } 
    return (
        <div>
            <button onClick={addHandler}>{'add card'}</button>
            <div className="workspace">
                {tiles.map(t => {
                    return (
                        <Card>
                            <div>{t.id}</div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export { Workspace }