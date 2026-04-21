import { Link } from 'react-router-dom';
import './WorkProj.css';

function WorkProjCard({ number, category, title, dateRange, imageSrc, imageAlt, projectLink }) {
    return (
        <div className="proj-card">
            <Link to={projectLink} >
                <h1 className="number-id secondary-font text-9xl font-bold accent-color">
                    {number}
                </h1>
            </Link>

                <Link to={projectLink} className="proj-img-container">
                    <div style={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        overflow: 'hidden'
                    }}>
                        <img 
                            src={imageSrc}
                            alt={imageAlt || `${title} project preview`}
                            className="proj-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover',  zIndex: '1' }}
                        />
                    </div>
                </Link>

                <div className="text-group">
                    <h2 className="secondary-font">
                        <span className="italic font-extrabold">{category}:</span> {title}
                    </h2>
                    <p className="main-font">{dateRange}</p>
                    <Link to={projectLink} className="btn main-font font-bold accent-color">view project</Link>
                </div>
            </div>
    );
}

// -- DATA --

const projectData = [
        {
            id: "01", 
            category: "Web Design", 
            title: "Social Spark", 
            dates: "01.26.26 — 02.08.26",
            imagePath: "/socialspark-thumbnail.png",
            altText: "Homepage design for Social Spark",
            projectLink: "./social-spark"
        },
        {
            id: "02", 
            category: "Web App", 
            title: "Weather API", 
            dates: "12.13.2025 — 01.13.26",
            imagePath: "/weatherapp-thumbnail.png",
            altText: "Weather App design/development using Geolocation & Weather APIs",
            projectLink: "./weather-api"
        },
        {
            id: "03", 
            category: "Web Dev", 
            title: "Portfolio Site", 
            dates: "02.09.26 — PRESENT",
            imagePath: "/portfolio-thumbnail.png",
            altText: "Website Portfolio web design & development",
            projectLink: "./portfolio"
        },
    ];


// -- THE MAIN EXPORT --

export default function WorkProj() {
        return (
            <div className="work-section-container">
                {projectData.map((proj) => (
                    <WorkProjCard 
                        key={proj.id}
                        number={proj.id} 
                        category={proj.category} 
                        title={proj.title} 
                        dateRange={proj.dates}
                        imageSrc={proj.imagePath}
                        imageAlt={proj.altText}
                        projectLink={proj.projectLink}
                    />
                ))}
            </div>
        )}