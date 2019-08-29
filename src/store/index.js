import { createStore } from 'redux';

// Reducers.
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export default store;