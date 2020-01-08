import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import { Greetings } from './Greetings';
import { style } from 'typestyle';
import { Root } from './layout/root';
import { Add } from './components/Add';
import { AddTodo } from './modules/todo/AddTodo';
import { HandleChangeParam } from './modules/types';
import { configureStore, AppState } from './modules/store';
import { Provider, connect } from 'react-redux';
import { ConnectedTodosInterface } from './modules/todo/TodosInterface';

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

type ComponentState = { 
    name: string;
}

class App extends React.Component<AppProps, ComponentState> { 

    constructor(props: AppProps){
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
        <App message="how are you" />
    </Provider>
)
ReactDOM.render(
    <AppRoot />, 
    document.getElementById('root')
);