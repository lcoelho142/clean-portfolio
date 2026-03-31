// src/components/Layout.jsx
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import './Layout.css';

// We destructure 'children' from props right in the parameters
export default function Layout({ children, sidebarContent }) {
    return (
        <div className="app-container">
          <NavBar />
        
        <div className="main-content-wrapper">
          {children}
        </div>
      
        <SideBar>
          {sidebarContent}
        </SideBar>
        </div>
    );
}