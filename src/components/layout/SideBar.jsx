import React, { useState } from 'react';
import './SideBar.css'

export default function SideBar({ children }) {

    return (
        <aside className="side-nav-container">
        <div className="side-nav-right">
            {children}
        </div>
        </aside>
    )
}