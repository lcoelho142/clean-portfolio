import { useRef } from 'react';
import Layout from "../../components/layout/Layout.jsx";
import './WorkPage.css';
import WorkProj from './WorkProj.jsx';
import WorkSidebar from './WorkSidebar.jsx'
import HLine from '../../components/common/HLine.jsx';

export default function WorkPage() {

    const mainRef = useRef(null);

    const scrollToTop = () => {
        if (mainRef.current) {
            mainRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Layout sidebarContent={<WorkSidebar />}>
            <main className="main-section" ref={mainRef}>
                <h1 className="work secondary-font font-extrabold text-3xl">work</h1>  
                <div className="card-container">
                    <WorkProj></WorkProj>
                    <div className="top-scroll">
                        <HLine />
                        <button
                            onClick={scrollToTop}
                            className="btn-scroll secondary-font"
                        >
                            TOP
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
