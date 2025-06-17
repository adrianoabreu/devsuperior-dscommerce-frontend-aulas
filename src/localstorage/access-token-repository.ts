import { TOKEN_KEY } from "../utils/system";

//Salvando Token no localStorage
export function save(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

//Obtendo Token do localStorage
export function get() : string | null {
    return localStorage.getItem(TOKEN_KEY);
}

//Removendo Token do localStorage
export function remove() {
    return localStorage.removeItem(TOKEN_KEY);
}
