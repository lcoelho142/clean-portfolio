import './App.css'
import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar.jsx'
import MidSec from './components/MidSec.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import HomePage from './components/Pages/HomePage.jsx'

function App() {
  return (
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
  );
}

export default App