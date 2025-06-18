import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import * as authService from '../../services/auth-services';
import type { RoleEnum } from "../../models/auth";

type Props = {
    children: JSX.Element;
    roles?: RoleEnum[];
}

//Função para redirecionar para tela de login quando usuário não estiver autenticado.
//Ou seja, token expirado. Não faz acesso ao backend.
export function PrivateRoute({ children , roles = [] }: Props) {
    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    if (!authService.hasAnyRoles(roles)) {
        return <Navigate to="/catalog" />;
    }
    return children;
}