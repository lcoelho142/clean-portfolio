import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { ThemeProvider } from './ThemeContext.jsx'

// Import page components from Pages Folder
import HomePage from './pages/home/HomePage.jsx'
import WorkPage from './pages/work/WorkPage.jsx'
import PlayPage from './pages/play/PlayPage.jsx'
import AboutPage from './pages/about/AboutPage.jsx'

export default function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            // Default HomePage
            <Route path="/" element={<HomePage />} />

            <Route path="/work" element={<WorkPage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}
