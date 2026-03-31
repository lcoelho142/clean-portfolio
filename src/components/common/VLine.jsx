import './VLine.css';

export default function VLine({ className, offset = "0px", marginX = "0px" }) {
    return (
        <div
            className={`vline-container ${className || ''}`}
            style={{ marginLeft: marginX, marginRight: marginX }}
        >
            <div className="vline" style={{ top: offset, bottom: offset }} />
        </div>
    );
}