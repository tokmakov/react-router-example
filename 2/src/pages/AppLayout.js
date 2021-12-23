import { NavLink, Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer>Copyright 2021</footer>
        </>
    )
}

export default AppLayout