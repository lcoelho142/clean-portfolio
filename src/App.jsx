import './App.css'
import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar.jsx'
import MidSec from './components/MidSec.jsx'
import { ThemeProvider } from './ThemeContext.jsx'

function App() {
  return (
      <ThemeProvider>
        <div className="app-container">
          <NavBar />
          <MidSec />
          <SideBar />
        </div>
      </ThemeProvider>
  );
}

export default App
