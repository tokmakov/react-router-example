import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext.js'

const Login = () => {
    const { auth, login } = useAuthContext()
    const navigate = useNavigate()
    const location = useLocation()

    const [invalid, setInvalid] = useState(false)

    // если пользователь авторизован, ему здесь делать нечего
    if (auth) {
        return <Navigate to="/admin" replace={true} />
    }

    // откуда был перенаправлен пользователь, чтобы вернуть
    // его обратно после правильного ввода пароля
    const fromPage = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const password = form.password.value
        // функции, которые будут выполнены в случае правильного
        // и неправильного ввода пароля для авторизации
        const success = () => navigate(fromPage, {replace: true})
        const failure = () => setInvalid(true)
        login(password, success, failure)
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Password: <input name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
            {invalid && <p style={{color:'red'}}>Неверный пароль</p>}
            <p>From page: {fromPage}</p>
        </div>
    )
}

export default Login