import { Outlet } from 'react-router-dom'
import CustomLink from '../components/CustomLink.js'

const AppLayout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink to="/old-page">Old Page</CustomLink>
                <CustomLink to="/new-page">New Page</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/admin">Admin</CustomLink>
                <CustomLink to="/edit">Edit</CustomLink>
                <CustomLink to="/page-one">One</CustomLink>
                <CustomLink to="/page-two">Two</CustomLink>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer>Copyright 2021</footer>
        </>
    )
}

export default AppLayout