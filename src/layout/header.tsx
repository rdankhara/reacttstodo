import React from 'react';
import * as styles from './header.less';

type Props = { }
type State = { }

export const Header: React.FC<Props> = () => {
    return (
        <header style={styles.header}>
            I am Header
        </header>
    )
}