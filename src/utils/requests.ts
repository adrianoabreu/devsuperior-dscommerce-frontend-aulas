import type { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import axios from "axios";
import * as authService from '../services/auth-services';

export function requestBackend(config: AxiosRequestConfig) {
    
   const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken()
    }
    : config.headers;
    
    return axios({...config, baseURL: BASE_URL , headers});
}