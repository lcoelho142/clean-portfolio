import './Portfolio.css';
import Layout from '../../../components/layout/Layout'
import PortfolioSidebar from './PortfolioSidebar';
import HLine from '../../../components/common/HLine.jsx';
import NextProject from '../../../components/common/NextProject.jsx';

export default function Portfolio() {
    return (
        <Layout sidebarContent={<PortfolioSidebar />}>
            <div className="project-content">
                <h1>Portfolio Project</h1>
                <p>Project details go here...</p>
            </div>
            <HLine />
            <section className="next-project-section">
                <NextProject />
            </section>
        </Layout>
    )
}