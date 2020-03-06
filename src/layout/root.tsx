import React, { Component } from 'react';
import {style, media} from 'typestyle';
import * as styles from './root.less';
import { DrawerMenu } from './drawerMenu';
import { Header } from './header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const background = { 
    background: 'orange'
}
const root = style(background,
    {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        transition: 'font-size 0.5s'
    },
    // media({minWidth: 500, maxWidth: 700}, {fontSize: '30px'}),
    // media({minWidth: 701}, { fontSize: '50px'})
)

type RootProps = { 
}

type RootState = { 

}
class Root extends React.Component<RootProps, RootState> { 
    constructor(props: RootProps) {
        super(props);
        this.state = { 
            
        }
    }

    render () {
        return (
            <main className={styles.main}>
                <Header />
                <BrowserRouter>
                    <DrawerMenu />
                    <Switch>
                        <Route path="/" exact></Route>
                    </Switch>
                </BrowserRouter>
                
                <div className="body">
                    body content here
                </div>
                <aside className="rightAside"></aside>
                <footer className="footer">

                </footer>
            </main>
        )
    }
}

export { Root }