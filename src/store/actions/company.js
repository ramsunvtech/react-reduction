import axios from 'axios';
import * as actionTypes from './actionTypes';
import { BASE_URL, TOKEN_STRING } from '../constants';

export const requestCompanyDetails = () => {
    return {
        type: actionTypes.REQUEST_COMPANY,
        details: {},
    }
};

export const setCompanyResponse = (details) => {
    return {
        type: actionTypes.LOAD_COMPANY_RESPONSE,
        details,
    }
};

export const getCompanyDetails = (name) => {
    return axios.get(`${BASE_URL}/stock/${name}/company?${TOKEN_STRING}`);
}