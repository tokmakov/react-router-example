import { Outlet } from 'react-router-dom'
import CustomLink from '../components/CustomLink.js'

const AppLayout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer>Copyright 2021</footer>
        </>
    )
}

export default AppLayout