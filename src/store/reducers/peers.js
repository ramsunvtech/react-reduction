import { LOAD_PEERS_SUCCESS, LOAD_PEERS_ERROR } from '../actions/actionTypes';

const initialState = {
  list: [],
  hasError: false,
};

const peerReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case LOAD_PEERS_SUCCESS:
            return {
                list: action.list,
                hasError: false,
            };
        case LOAD_PEERS_ERROR:
            return {
                list: [],
                hasError: true,
            }
        default:
            return state;
    }
};

export default peerReducer;