import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-services';
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token';

export default function LoggedUser() {

    const { contextTokenPayload , setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout(); //remove token do localStorage.
        setContextTokenPayload(undefined); //atualiza o contexto global.
    }

    return (
        contextTokenPayload && authService.isAuthenticated()
            ? (
                <div className="dsc-logged-user">
                    <p>{contextTokenPayload.username}</p>
                    <span onClick={handleLogoutClick}>Sair</span>
                </div>
            )
            : (
                <Link to="/login">
                    Entrar
                </Link>
            )
    );
}