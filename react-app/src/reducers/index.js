import { combineReducers } from 'redux';
import events from './events';
import { reducer as form } from 'redux-form';

export default combineReducers({ events, form }) // ({ event: event, form: form})となるが、名前が同じなので省略可能