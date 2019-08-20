import * as  React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = { 
    message: string
}

const App:React.SFC<AppProps> = ({message}) => <div>{message}</div>

ReactDOM.render(
    <App message="Hello World" />, 
    document.getElementById('root')
);