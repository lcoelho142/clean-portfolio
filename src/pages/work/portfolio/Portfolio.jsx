import './Portfolio.css';
import Layout from '../../../components/layout/Layout'
import PortfolioSidebar from './PortfolioSidebar';

export default function Portfolio() {
    return (
        <Layout sidebarContent={<PortfolioSidebar />}>
            <div className="project-content">
                <h1>Portfolio Project</h1>
                <p>Project details go here...</p>
            </div>
        </Layout>
    )
}