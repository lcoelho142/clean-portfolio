import Layout from "../../components/layout/Layout.jsx";
import './WorkPage.css';
import WorkProj from '../../components/work/WorkProj.jsx';
import WorkSidebar from '../work/WorkSidebar.jsx'

export default function WorkPage() {
    return (
        <Layout sidebarContent={<WorkSidebar />}>
            <main className="main-section">
                <h1 className="secondary-font">Work</h1>  
                <div className="card-container">
                    <WorkProj></WorkProj>
                </div>
            </main>
        </Layout>
    );
}
