import React from 'react';
import * as styles from './drawerMenu.less';
import { Link } from 'react-router-dom';

const DrawerMenu: React.FC = () => { 
    return (
        <aside className={styles.drawer}>
            <nav>
                <ul>
                    <li>
                        <Link to={'/cards'}>Cards</Link>                        
                    </li>
                    <li>
                        <Link to={'/maths'}>Maths</Link>                        
                    </li>
                    <li>
                        <Link to={'/sum'}>Mulitply</Link>
                    </li>
                </ul>
            </nav>            
        </aside>
    )
}

export { DrawerMenu };