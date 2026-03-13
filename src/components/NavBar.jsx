import './NavBar.css'
import FlowerSymbol from "../assets/flower-symbol.svg"
import HLine from './HLine';

export default function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <h1 className="main-font">Leah Made This</h1>
                <img src={FlowerSymbol} />
                <div className="flex-column">
                    <a href="#" className="secondary-font" >work</a>
                    <a href="#" className="secondary-font" >play</a>
                </div>
                <HLine offset="20px" marginY="20px" />
            </div>

            
        </>
        
)
}
