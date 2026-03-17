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
                    <p className="main-font">Helping clients build trust with their customers by creating an experience that feels tailored to them.</p>
                </div>

                <HLine offset="0px" marginY="0px" />

                <div className="top-group">
                    <h1><MyName className="svg-name" /></h1>
                    <p className="main-font">Helping clients build trust with their customers by creating an experience that feels tailored to them.</p>
                </div>

                <img src={LeahBloom} className="leah-bloom" />
            </main>
        </>
    )
}