import React, { Component } from 'react';
import {style, media} from 'typestyle';

const background = { 
    background: 'orange'
}
const root = style(
    background,
    {
        display: 'flex',
        flexDirection: 'row',
        transition: 'font-size 0.5s'
    },
    media({minWidth: 500, maxWidth: 700}, {fontSize: '30px'}),
    media({minWidth: 701}, { fontSize: '50px'})
)

const headerClass = style({
    height: '200px'
})

type RootProps = { 
    header : React.Component
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
        const { header } = this.props;
        return (
            <div className={root}>
                <header className={headerClass}>
                    {header}
                </header>
                <aside className="leftAside"></aside>                
                <body className="body">

                </body>
                <aside className="rightAside"></aside>
                <footer className="footer">

                </footer>
            </div>
        )
    }
}

export { Root }