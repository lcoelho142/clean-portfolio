import './SocialSpark.css';
import Layout from '../../../components/layout/Layout';
import SocialSparkSidebar from './SocialSparkSidebar';

export default function SocialSpark() {
    return (
        <Layout sidebarContent={<SocialSparkSidebar />}>
            <div className="main-font project-content">
                <h1>Social Spark Project</h1>
                <p>Project details go here...</p>
            </div>
        </Layout>
    )
}