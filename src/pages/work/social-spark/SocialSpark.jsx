import './SocialSpark.css';
import Layout from '../../../components/layout/Layout';
import SocialSparkSidebar from './SocialSparkSidebar';
import HeroImg from '../../../../public/socialspark-thumbnail.png';
import ContextImg from './assets/SocialSparkContext.png';

export default function SocialSpark() {
    return (
        <Layout sidebarContent={<SocialSparkSidebar />}>
            <div className="main-font project-content">
                <section className="hero-section">
                    <img src={HeroImg} />
                    <a className="site-btn secondary-font font-semibold" href="https://test-website-azure-three.vercel.app/" target="_blank">Visit Live Site</a>
                </section>
                <section className="context-section">
                    <div className="context-text">
                        <h1 className="secondary-font accent-color text-2xl font-semibold" >
                            Context
                        </h1>
                        <p className="main-font text-sm">
                            A case study is a written showcase of a specific project or piece of work. It highlights the problem you need to solve, your approach to solve it, and the results achieved. By demonstrating your skills and expertise, potential employers or clients can understand the value you bring. <br/><br/>
                    
                            Begin with the scope of the project. Talk about the problem you're trying to solve, along with any constraints you had to work with. Then, walk us through your design process, and how you came up with the best solution. Showcase explorations, research, and wireframes to show how the journey evolved. <br/><br/>
                    
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
            </div>
        </Layout>
    )
}