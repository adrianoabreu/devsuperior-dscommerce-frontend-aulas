import { useContext, useState } from 'react';
import './styles.css';
import * as authService from '../../../services/auth-services';
import * as forms from '../../../utils/forms';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import FormInput from '../../../components/FormInput';

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);

    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) { //Função de validação de email no frontend.
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(forms.toValues(formData))
            .then(response => {
            authService.saveAccessToken(response.data.access_token);
            setContextTokenPayload(authService.getAccessTokenPayload());
            navigate("/cart");
            //console.log(authService.getAccessTokenPayload()?.username);
        })
            .catch(error => {
                console.log("Erro no login", error);
            })
    }

    function handleInputChange(event: any) {
        setFormData(forms.update(formData, event.target.name, event.target.value));
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    { ...formData.username }
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <FormInput
                                    { ...formData.password }
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}