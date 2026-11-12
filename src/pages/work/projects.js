export const projects = {
    socialSpark: {
        id: "01",
        category: "Web Design",
        title: "Social Spark",
        dates: "01.26.26 — 02.08.26",
        imagePath: `${import.meta.env.BASE_URL}socialspark-thumbnail.png`,
        altText: "Homepage design for Social Spark",
        path: "/work/social-spark",
    },
    weatherApi: {
        id: "02",
        category: "Web App",
        title: "Weather API",
        dates: "12.13.2025 — 01.13.26",
        imagePath: `${import.meta.env.BASE_URL}weatherapp-thumbnail.png`,
        altText: "Weather App design/development using Geolocation & Weather APIs",
        path: "/work/weather-api",
    },
    portfolio: {
        id: "03",
        category: "Web Dev",
        title: "Portfolio Site",
        dates: "02.09.26 — PRESENT",
        imagePath: `${import.meta.env.BASE_URL}portfolio-thumbnail.png`,
        altText: "Website Portfolio web design & development",
        path: "/work/portfolio",
    },
};

export const workProjects = Object.values(projects);
