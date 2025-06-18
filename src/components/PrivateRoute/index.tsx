import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import * as authService from '../../services/auth-services';

type Props = {
    children: JSX.Element;
}

//Função para redirecionar para tela de login quando usuário não estiver autenticado.
//Ou seja, token expirado. Não faz acesso ao backend.
export function PrivateRoute({ children }: Props) {
    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return children;
}