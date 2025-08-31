import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:slug" element={<ProjectDetails />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default App
