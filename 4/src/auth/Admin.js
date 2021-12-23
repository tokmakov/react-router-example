import useAuthContext from './useAuthContext.js'

const Admin = () => {
    const { logout } = useAuthContext()
    return (
        <>
        <h1>Admin page</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Admin