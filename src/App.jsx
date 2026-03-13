import './App.css'
import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar.jsx'
import MidSec from './components/MidSec.jsx'

function App() {

  return (
    <>
      <div className="app-container">
        <NavBar />
        <MidSec />
        <SideBar />
      </div>
    </>
  )
}

export default App
