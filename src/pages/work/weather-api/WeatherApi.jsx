import './WeatherApi.css';
import Layout from '../../../components/layout/Layout'
import WeatherApiSidebar from './WeatherApiSidebar';

export default function WeatherApi() {
    return (
        <Layout sidebarContent={<WeatherApiSidebar />}>
            <div className="project-content">
                <h1>Weather API Project</h1>
                <p>Project details go here...</p>
            </div>
        </Layout>
    )
}