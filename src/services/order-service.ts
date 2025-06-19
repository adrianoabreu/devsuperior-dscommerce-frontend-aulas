import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

//Buscando um pedido por ID.
export function findByIdRequest(id: number){

    const config : AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}