import { useLocation, Navigate } from 'react-router-dom'
import useAuthContext from './useAuthContext.js'

const RequireAuth = (props) => {
    const location = useLocation()
    const { auth } = useAuthContext()

    if (!auth) {
        return <Navigate to='/login' state={{from: location}} />
    }

    return props.children
}

export default RequireAuth