import './MidSec.css'
import MyName from './MyName';
import LeahBloom from '../assets/leah-bloom.png';
import HLine from './HLine'

export default function MidSec() {
    return (
        <>
            <main className="main-section">
                <div className="top-group">
                    <h1><MyName className="svg-name" /></h1>
                    <p className="main-font text-xl">Helping clients <span className="font-bold-italic" >build trust</span> with their customers by creating an experience that <span className="font-bold-italic" >feels tailored</span> to them.</p>
                </div>

                <HLine offset="0px" marginY="0px" />

                <div className="bottom-group">
                    <h2 className="secondary-font font-light text-3xl">A <span className="font-bold-italic" >Front-end</span> Web <span className="font-bold-italic" >Designer</span> & <span className="font-bold-italic" >Developer</span></h2>
                    <p className="main-font text-lg">Providing brand overhauls, website design & development -all packaged into one service. Transforming ideas, observations and understandings into designs that value a company's future vision.</p>
                    <button>
                        <p>see work</p>

                    </button>
                </div>

                <img src={LeahBloom} className="leah-bloom" />
            </main>
        </>
    )
}