import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import { Greetings } from './Greetings';
import { style } from 'typestyle';
import { Root } from './layout/root';
import { Add } from './components/Add';

type AppProps = { 
    message: string
}

//const App:React.SFC<AppProps> = ({message}) => <div>{message}</div>
const message = style({ 
    color: 'green',
    top: 100,
    position: 'relative',
    background: 'orange'
})

class App extends React.Component<AppProps> { 

    render() { 
        const headerComponent = <Greetings name="Jonny Mera Name" />;

        return (
            <>
            <Add number1={2} number2={4} ></Add>
            <Greetings name="rajnikant" />
            <div className={message}>{this.props.message} </div>
            </>
        )
    }
}
ReactDOM.render(
    <App message="how are you" />, 
    document.getElementById('root')
);