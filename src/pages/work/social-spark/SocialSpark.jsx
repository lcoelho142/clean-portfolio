import { useRef } from 'react';
import './SocialSpark.css';
import Layout from '../../../components/layout/Layout';
import SocialSparkSidebar from './SocialSparkSidebar';
import { projects } from '../projects.js';
import ContextImg from './assets/SocialSparkContext.png';
import DiscoveryImg1 from './assets/SocialSparkDiscovery1.jpg';
import DiscoveryImg2 from './assets/SocialSparkDiscovery2.jpg';
import MoodBoardImg from './assets/SocialSparkMoodBoard.jpg';
import IterationImg from './assets/SocialSparkIteration.jpg';
import TestSiteImg from './assets/SocialSparkTestSite.jpg';
import DeliveryImg from './assets/SocialSparkDelivery.jpg';
import ReflectionImg1 from './assets/SocialSparkReflection1.jpg';
import ReflectionImg2 from './assets/SocialSparkReflection2.jpg';
import HLine from '../../../components/common/HLine.jsx';
import NextProject from '../../../components/common/NextProject.jsx';


export default function SocialSpark() {
    const mainRef = useRef(null);

    const scrollToTop = () => {
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (mainRef.current) {
            mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const projectInfo = [
        { title: 'Role', items: ['Lead Website Designer'] },
        { title: 'Skills', items: ['Website Design', 'UI/UX', 'Interactive Design', 'Brand Messaging']},
        { title: 'Software', items: ['Figma', 'Canva', 'VS Code', 'GitHub', 'Vercel'] },
    ];

    return (
        <Layout sidebarContent={<SocialSparkSidebar />}>
            <div className="main-font project-content">
                <h1 className="project-title secondary-font font-extrabold text-3xl">Social Spark: Website Design</h1>
                <section className="hero-section">
                    <img src={projects.socialSpark.imagePath} alt="Social Spark project preview" />
                    <a className="site-btn secondary-font font-semibold" href="https://test-website-azure-three.vercel.app/" target="_blank">Visit Live Site</a>
                </section>
                <section id="context"className="context-section">
                    <div className="context-text">
                        <h1 className="secondary-font accent-color text-2xl font-semibold" >
                            Context
                        </h1>
                        <p className="main-font text-sm">
                            A case study is a written showcase of a specific project or piece of work. It highlights the problem you need to solve, your approach to solve it, and the results achieved. By demonstrating your skills and expertise, potential employers or clients can understand the value you bring. <br/><br/>
                    
                            Begin with the scope of the project. Talk about the problem you're trying to solve, along with any constraints you had to work with. Then, walk us through your design process, and how you came up with the best solution. Showcase explorations, research, and wire-frames to show how the journey evolved. <br/><br/>
                    
                            Lastly, emphasize the impact of the solution you chose, along with any key insights or recommendations drawn from the project.
                        </p>
                    </div>
                    <figure>
                        <img src={ContextImg} />
                        <figcaption className="context-caption text-xs">
                            A mobile-view mockup of the Call-To-Action section and Footer of the Home Page.
                        </figcaption>
                    </figure>
                </section>
                <section className="info-section">
                    {projectInfo.map(({ title, items }) => (
                        <div className="info-col" key={title}>
                            <h2 className="info-heading main-font text-lg">{title.toUpperCase()}</h2>
                            <ul className="info-pills">
                                {items.map((item) => (
                                    <li className="info-pill secondary-font" key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
                <section id="discovery"className="discovery-section">
                    <figure>
                        <img src={DiscoveryImg1} />
                        <figcaption className="context-caption text-xs">
                            Screenshot of Social Spark App Homepage (part 1).
                        </figcaption>
                    </figure>
                    <div className="discovery-text">
                        <h1 className="secondary-font accent-color text-2xl font-semibold" >
                            Discovery
                        </h1>
                        <p className="main-font text-sm">
                            A case study is a written showcase of a specific project or piece of work. It highlights the problem you need to solve, your approach to solve it, and the results achieved. By demonstrating your skills and expertise, potential employers or clients can understand the value you bring. <br/><br/>

                        </p>
                    </div>
                    <figure>
                        <img src={DiscoveryImg2} />
                        <figcaption className="context-caption text-xs">
                            Screenshot of Social Spark App Homepage (part 2).
                        </figcaption>
                    </figure>
                </section>
                <section id="mood-board" className="mood-board-section">
                    <div className="mood-board-text">
                        <h1 className="secondary-font accent-color text-2xl font-semibold" >
                            Mood Board
                        </h1>
                    </div>
                    <figure>
                        <img src={MoodBoardImg} />
                        <figcaption className="context-caption text-xs">
                            This is a mood board that was created to help guide the design of the Social Spark app. It includes color palettes, typography, and visual elements that reflect the desired aesthetic and user experience.
                        </figcaption>
                    </figure>
                </section>
                <section id="iteration" className="iteration-section">
                    <figure>
                        <img src={IterationImg} />
                        <figcaption className="context-caption text-xs">
                            This is a screenshot of the final design of the Social Spark app. It showcases the user interface and overall look and feel of the application.
                        </figcaption>
                    </figure>
                    <div className="iteration-text">
                        <h1 className="secondary-font accent-color text-2xl font-semibold" >
                            Iteration
                        </h1>
                        <p className="main-font text-sm">
                            A case study is a written showcase of a specific project or piece of work. It highlights the problem you need to solve, your approach to solve it, and the results achieved. By demonstrating your skills and expertise, potential employers or clients can understand the value you bring. <br/><br/>
                    
                            Begin with the scope of the project. Talk about the problem you're trying to solve, along with any constraints you had to work with. Then, walk us through your design process, and how you came up with the best solution. Showcase explorations, research, and wire-frames to show how the journey evolved. <br/><br/>
                    
                            Lastly, emphasize the impact of the solution you chose, along with any key insights or recommendations drawn from the project.
                        </p>
                    </div>
                </section>
                <section className="test-site-section">
                    <figure>
                        <img src={TestSiteImg} />
                        <a className="site-btn secondary-font font-semibold" href="https://test-website-azure-three.vercel.app/" target="_blank">Visit Test Site</a>
                        <figcaption className="context-caption text-xs">
                            A video preview of the Test Site I created for sharing my design progress with the Social Spark team. This experience was created using Vanilla HTML, CSS, and JavaScript in VS Code — with the version history saved with GitHub and deployed to Vercel.
                        </figcaption>
                    </figure>
                </section>
                <section id="delivery" className="delivery-section">
                    <div className="delivery-text">
                        <h1 className="secondary-font accent-color text-2xl font-semibold" >
                            Delivery
                        </h1>
                        <p className="main-font text-sm">
                            A case study is a written showcase of a specific project or piece of work. It highlights the problem you need to solve, your approach to solve it, and the results achieved. By demonstrating your skills and expertise, potential employers or clients can understand the value you bring. <br/><br/>
                    
                            Begin with the scope of the project. Talk about the problem you're trying to solve, along with any constraints you had to work with. Then, walk us through your design process, and how you came up with the best solution. Showcase explorations, research, and wire-frames to show how the journey evolved. <br/><br/>
                    
                            Lastly, emphasize the impact of the solution you chose, along with any key insights or recommendations drawn from the project.
                        </p>
                    </div>
                    <figure>
                        <img src={DeliveryImg} />
                        <figcaption className="context-caption text-xs">
                            A snapshot of the file organization naming conventions created before delivery of the Figma design files to the Social Spark team.
                        </figcaption>
                    </figure>
                </section>
                <section id="reflection" className="reflection-section">
                    <figure>
                        <img src={ReflectionImg1} />
                        <figcaption className="context-caption text-xs">
                            The map & safe-guard sections of the Social Spark home page in desktop view. 
                        </figcaption>
                    </figure>
                    <div className="reflection-text">
                        <h1 className="secondary-font accent-color text-2xl font-semibold" >
                            Reflection
                        </h1>
                        <p className="main-font text-sm">
                            A case study is a written showcase of a specific project or piece of work. It highlights the problem you need to solve, your approach to solve it, and the results achieved. By demonstrating your skills and expertise, potential employers or clients can understand the value you bring. <br/><br/>

                        </p>
                    </div>
                    <figure>
                        <img src={ReflectionImg2} />
                        <figcaption className="context-caption text-xs">
                            The hero and context sections of the Social Spark about page in desktop view. 
                        </figcaption>
                    </figure>
                </section>
                <HLine />
                <section className="next-project-section">
                    <NextProject />
                </section>
                <div className="top-scroll">
                        <HLine />
                        <button
                            onClick={scrollToTop}
                            className="btn-scroll secondary-font"
                        >
                            TOP
                        </button>
                </div>
                </div>
        </Layout>
    )
}