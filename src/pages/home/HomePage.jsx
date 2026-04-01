// src/components/Pages/HomePage.jsx
import Layout from "../../components/layout/Layout";
import './HomePage.css';
import HomeSidebar from "./HomeSidebar";

import { Link } from "react-router-dom";

import MyName from '../../components/common/MyName';
import HLine from '../../components/common/HLine'
import FloralHero from '../../components/home/FloralHero';

export default function HomePage() {
    return (
        <Layout sidebarContent={<HomeSidebar />}>
            <main className="main-section">
                <div className="top-group">
                    <Link to="/about"><MyName className="svg-name" /></Link>
                    <p className="main-font text-xl">Helping clients <span className="font-bold-italic" >build trust</span> with their customers by creating an experience that <span className="font-bold-italic" >feels tailored</span> to them.</p>
                </div>

                <HLine offset="0px" marginY="0px" />

                <div className="bottom-group">
                    <h2 className="secondary-font text-3xl font-light">A <span className="font-bold-italic" >Front-end</span> Web <span className="font-bold-italic" >Designer</span> & <span className="font-bold-italic" >Developer</span></h2>
                    <p className="main-font text-lg">Providing brand overhauls, website design & development -all packaged into one service. Transforming ideas, observations and understandings into designs that value a company's future vision.</p>
                    <Link to="/work" className="work-btn animated-underline main-font font-bold accent-color text-xl">
                        see work
                    </Link>
                    
                </div>

                <Link to="/play"><FloralHero /></Link>
            </main>
        </Layout>
    );
}


