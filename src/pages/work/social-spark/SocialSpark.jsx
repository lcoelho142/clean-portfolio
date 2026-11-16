import './SocialSpark.css';
import Layout from '../../../components/layout/Layout';
import SocialSparkSidebar from './SocialSparkSidebar';
import { projects } from '../projects.js';
import ContextImg from './assets/SocialSparkContext.png';
import DiscoveryImg1 from './assets/SocialSparkDiscovery1.jpg';
import DiscoveryImg2 from './assets/SocialSparkDiscovery2.jpg';
import MoodBoardImg from './assets/SocialSparkMoodBoard.jpg';
import IterationImg from './assets/SocialSparkIteration.jpg';


export default function SocialSpark() {
    return (
        <Layout sidebarContent={<SocialSparkSidebar />}>
            <div className="main-font project-content">
                <section className="hero-section">
                    <img src={projects.socialSpark.imagePath} alt="Social Spark project preview" />
                    <a className="site-btn secondary-font font-semibold" href="https://test-website-azure-three.vercel.app/" target="_blank">Visit Live Site</a>
                </section>
                <section className="context-section">
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
                <section className="discovery-section">
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
                <section className="mood-board-section">
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
                <section className="iteration-section">
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
            </div>
        </Layout>
    )
}