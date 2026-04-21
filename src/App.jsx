import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { ThemeProvider } from './ThemeContext.jsx'

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
            // Default HomePage
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />

            <Route path="/work/social-spark" element={<SocialSpark />} />
            <Route path="/work/weather-api" element={<WeatherApi />} />
            <Route path="/work/portfolio" element={<Portfolio />} />

            <Route path="/play" element={<PlayPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}
