import './style.scss';
import {createStore} from 'redux';
import userReducer from './reducers/userReducer';
import App from './components/App';
// ** Here you can pass store down to your components
// ** and initialize them, like in example below

const initialState = {};

const store = createStore(userReducer,initialState);

const app = new App(store);

app.create();