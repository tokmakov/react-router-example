import { Routes, Route } from 'react-router-dom'

import AppLayout from './pages/AppLayout.js'

import Home from './pages/Home.js'
import About from './pages/About.js'
import NotFound from './pages/NotFound.js'

import BlogLayout from './blog/BlogLayout.js'
import BlogIndex from './blog/BlogIndex.js'
import BlogCategory from './blog/BlogCategory.js'
import BlogArticle from './blog/BlogArticle.js'

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<BlogLayout />}>
                    <Route index element={<BlogIndex />} />
                    <Route path="category/:id" element={<BlogCategory />} />
                    <Route path="article/:id" element={<BlogArticle />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
