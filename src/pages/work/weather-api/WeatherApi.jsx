import './WeatherApi.css';
import Layout from '../../../components/layout/Layout'
import WeatherApiSidebar from './WeatherApiSidebar';
import HLine from '../../../components/common/HLine.jsx';
import NextProject from '../../../components/common/NextProject.jsx';

export default function WeatherApi() {
    return (
        <Layout sidebarContent={<WeatherApiSidebar />}>
            <div className="project-content">
                <h1>Weather API Project</h1>
                <p>Project details go here...</p>
            </div>
            <HLine />
            <section className="next-project-section">
                <NextProject />
            </section>
        </Layout>
    )
}