import axios from 'axios';
import * as actionTypes from './actionTypes';
import { BASE_URL, TOKEN_STRING } from '../constants';

export const requestPeers = () => {
    return {
        type: actionTypes.REQUEST_PEERS,
        list: [],
    }
};

export const setPeerResponse = (list) => {
    return {
        type: actionTypes.LOAD_PEERS_SUCCESS,
        list,
    }
};

export const getPeersList = (keyword) => {
    return axios.get(`${BASE_URL}/stock/${keyword}/company?${TOKEN_STRING}`);
}