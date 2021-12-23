import { Routes, Route, NavLink } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer>Copyright 2021</footer>
        </>
    )
}

export default App
