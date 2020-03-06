import React from 'react';
import ReactDOM from 'react-dom';
import { Greetings } from './Greetings';
import { style } from 'typestyle';
import { Root } from './layout/root';
import { Add } from './components/Add';
import { configureStore, AppState } from './modules/store';
import { Provider, connect, ConnectedProps } from 'react-redux';
import { ConnectedTodosInterface } from './modules/todo/TodosInterface';
import { Workspace } from './components/workspace/Workspace';
import { Header } from './layout/header';

//const App:React.SFC<AppProps> = ({message}) => <div>{message}</div>
const message = style({ 
    color: 'green',
    top: 100,
    position: 'relative',
    background: 'orange'
})

type ComponentState = { 
    name: string;
}

type Props = { }
class App extends React.Component<Props, ComponentState> { 

    constructor(props: Props){
        super(props);
        this.state = { 
            name: ''
         }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler = (e:React.SyntheticEvent<{value: string}>) => { 
        const name = e.currentTarget.value;
        this.setState({name: e.currentTarget.value})
    }

    render() { 
        const headerComponent = <Greetings name="Jonny Mera Name" />;

        return (
            <>
            <Add number1={2} number2={4} ></Add>
            <Greetings name="rajnikant" />
            {/* <AddTodo name={this.state.name} handleChange={this.onChangeHandler} isCompleted={false} /> */}
            <ConnectedTodosInterface />
            <Workspace>
                
            </Workspace>
            </>
        )
    }
}

const mapStateToProps = (state: AppState) => { 
    return { 
        todos: state.todos
    }
}

const store = configureStore();

const AppRoot = () => (
    <Provider store={store}>
        <Root >
            <App />
        </Root>
    </Provider>
)

ReactDOM.render(
    <AppRoot />, 
    document.getElementById('root')
);