// src/components/Layout.jsx
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import './Layout.css';

export default function Layout({ children, sidebarContent, mainRef }) {
    return (
        <div className="app-container">
          <NavBar />
        
        <div className="main-content-wrapper" ref={mainRef}>
          {children}
        </div>
      
        <SideBar>
          {sidebarContent}
        </SideBar>
        </div>
    );
}