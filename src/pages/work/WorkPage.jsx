import Layout from "../../components/layout/Layout";
import './WorkPage.css';
import HLine from '../../components/common/HLine';
import WorkProj from '../work/WorkPage';

export default function WorkPage() {
    return (
        <Layout>
            <main className="main-section">
                <h1 className="secondary-font">Work</h1>  
                <div>
                    <WorkProj />
                </div>
            </main>
        </Layout>
    );
}
