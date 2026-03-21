import './MidSec.css'
import MyName from './MyName';
import HLine from './HLine'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import FloralHero from './FloralHero';

export default function MidSec() {
    return (
        <>
            <main className="main-section">
                <div className="top-group">
                    <h1><MyName className="svg-name" href="#" /></h1>
                    <p className="main-font text-xl">Helping clients <span className="font-bold-italic" >build trust</span> with their customers by creating an experience that <span className="font-bold-italic" >feels tailored</span> to them.</p>
                </div>

                <HLine offset="0px" marginY="0px" />

                <div className="bottom-group">
                    <h2 className="secondary-font font-light text-3xl">A <span className="font-bold-italic" >Front-end</span> Web <span className="font-bold-italic" >Designer</span> & <span className="font-bold-italic" >Developer</span></h2>
                    <p className="main-font text-lg">Providing brand overhauls, website design & development -all packaged into one service. Transforming ideas, observations and understandings into designs that value a company's future vision.</p>
                    <button className="work-btn accent-color">
                        <p className="animated-underline main-font font-bold accent-color text-lg">see work</p>
                    </button>
                </div>

                <FloralHero />
            </main>
        </>
    )
}