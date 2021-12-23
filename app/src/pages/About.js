import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <>
            <h1>About page</h1>
            <ul>
                <li><Link to="company">Company</Link></li>
                <li><Link to="our-team">Our team</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default About