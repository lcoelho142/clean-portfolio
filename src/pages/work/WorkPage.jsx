import Layout from "../../components/layout/Layout.jsx";
import './WorkPage.css';
import WorkProj from '../../components/work/WorkProj.jsx';
import WorkSidebar from '../work/WorkSidebar.jsx'
import HLine from '../../components/common/HLine.jsx';

export default function WorkPage() {
    return (
        <Layout sidebarContent={<WorkSidebar />}>
            <main className="main-section">
                <h1 className="work secondary-font font-extrabold text-3xl">work</h1>  
                <div className="card-container">
                    <WorkProj></WorkProj>
                    <div className="top-scroll">
                        <HLine />
                        <a className="btn-scroll secondary-font">TOP</a>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
