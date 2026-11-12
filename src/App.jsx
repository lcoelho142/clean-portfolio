import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { ThemeProvider } from './ThemeContext.jsx'
import { projects } from './pages/work/projects.js'

// Import page components from Pages Folder
import HomePage from './pages/home/HomePage.jsx'
import WorkPage from './pages/work/WorkPage.jsx'
import PlayPage from './pages/play/PlayPage.jsx'
import AboutPage from './pages/about/AboutPage.jsx'

import SocialSpark from './pages/work/social-spark/SocialSpark.jsx'
import WeatherApi from './pages/work/weather-api/WeatherApi.jsx'
import Portfolio from './pages/work/portfolio/Portfolio.jsx'


export default function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />

            <Route path={projects.socialSpark.path} element={<SocialSpark />} />
            <Route path={projects.weatherApi.path} element={<WeatherApi />} />
            <Route path={projects.portfolio.path} element={<Portfolio />} />

            <Route path="/play" element={<PlayPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}
