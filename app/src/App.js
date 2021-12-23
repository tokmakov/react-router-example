import { Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './pages/AppLayout.js'

import Home from './pages/Home.js'
import About from './pages/About.js'
import NotFound from './pages/NotFound.js'

import BlogLayout from './blog/BlogLayout.js'
import BlogIndex from './blog/BlogIndex.js'
import BlogCategory from './blog/BlogCategory.js'
import BlogArticle from './blog/BlogArticle.js'

import Services from './services/Services.js'
import Service from './services/Service.js'

import OldPage from './pages/OldPage.js'
import NewPage from './pages/NewPage.js'

import Login from './auth/Login.js'
import Admin from './auth/Admin.js'
import Edit from './auth/Edit.js'

import RequireAuth from './auth/RequireAuth.js'
import { AuthProvider } from './auth/AuthContext.js'

import PageOne from './pages/PageOne.js'
import PageTwo from './pages/PageTwo.js'

import Company from './pages/Company.js'
import OurTeam from './pages/OurTeam.js'

const Redirect = <Navigate to="/new-page" replace={true} state={{from: 'old-page'}} />

const AdminAuthRequire = (
    <RequireAuth>
        <Admin />
    </RequireAuth>
)

const EditAuthRequire = (
    <RequireAuth>
        <Edit />
    </RequireAuth>
)

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />}>
                        <Route path=":slug" element={<Service />} />
                    </Route>
                    <Route path="blog" element={<BlogLayout />}>
                        <Route index element={<BlogIndex />} />
                        <Route path="category/:id" element={<BlogCategory />} />
                        <Route path="article/:id" element={<BlogArticle />} />
                    </Route>
                    <Route path="about" element={<About />}>
                        <Route path="company" element={<Company />} />
                        <Route path="our-team" element={<OurTeam />} />
                    </Route>
                    <Route path="old-page" element={Redirect} />
                    <Route path="new-page" element={<NewPage />} />
                    <Route path="admin" element={AdminAuthRequire} />
                    <Route path="edit" element={EditAuthRequire} />
                    <Route path="login" element={<Login />} />
                    <Route path="page-one" element={<PageOne />} />
                    <Route path="page-two" element={<PageTwo />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default App
