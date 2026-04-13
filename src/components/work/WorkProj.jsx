import './WorkProj.css';

function WorkProjCard({ number, category, title, dateRange, imageSrc, imageAlt }) {
    return (
        <div className="proj-card">
                <h1 className="secondary-font text-9xl font-bold accent-color">
                    {number}
                </h1>
                <div style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    overflow: 'hidden'
                    // backgroundColor: '#e0e0e0',
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyItems: 'center'
                }}>
                    <img 
                        src={imageSrc}
                        alt={imageAlt || `${title} project preview`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {/* <span style={{ color: '#666' }}>Image Pending...</span> */}
                </div>
                <div className="text-group">
                    <h2 className="secondary-font">
                        <span className="italic font-extrabold">{category}:</span> {title}
                    </h2>
                    <p className="main-font">{dateRange}</p>
                    <button className="main-font font-bold accent-color">view project</button>
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
            altText: "Homepage design for Social Spark"
        },
        {
            id: "02", 
            category: "Web App", 
            title: "Weather API", 
            dates: "12.13.2025 — 01.13.26",
            imagePath: "/weatherapp-thumbnail.png",
            altText: "Weather App design/development using Geolocation & Weather APIs"
        },
        {
            id: "03", 
            category: "Web Development", 
            title: "Professional Portfolio", 
            dates: "02.09.26 — PRESENT",
            imagePath: "/portfolio-thumbnail.png",
            altText: "Professional Portfolio web design & development"
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
                    />
                ))}
            </div>
        )}