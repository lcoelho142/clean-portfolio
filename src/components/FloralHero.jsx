import './FloralHero.css'
import LeahBloom from '../assets/leah-bloom.png';

const FloralHero = () => {
    return (
        <div className="float-container">
                <img src={LeahBloom} className="leah-bloom" alt="Floral Collage" href="#"/>
        </div>
    );
};

export default FloralHero;