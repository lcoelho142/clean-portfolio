// src/components/Pages/HomePage.jsx
import Layout from "../components/layout/Layout";
import HomeContent from "../components/home/HomeContent";
import HomeSidebar from "../components/home/HomeSidebar";

export default function HomePage() {
    return (
        <Layout sidebarContent={<HomeSidebar />}>
            <HomeContent />
        </Layout>
    );
}


