// src/components/Layout.jsx
import NavBar from "./NavBar";
import SideBar from "./SideBar";

// We destructure 'children' from props right in the parameters
export default function Layout({ children }) {
    return (
        <div className="app-container">
        <NavBar />
        
        {/* This is where your unique page content will be injected.
        On the Home page, it will be <MidSec />. 
        On the Work page, it will be your portfolio grid.
      */}
        {children} 

        <SideBar />
        </div>
    );
}