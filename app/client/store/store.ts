// This is the application state store

import { Store, createStore } from 'redux';
import { ApplicationState } from './ApplicationState';
import { reducer, setStartState } from './reducer';

export const store:Store<ApplicationState> = createStore(reducer, setStartState());

