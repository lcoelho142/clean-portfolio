import './HLine.css';

const HLine = ({ className, offset = "0px", marginY = "20px" }) => {
    return (
        <div className={`hline ${className || ''}`}
            style={{
                '--offset': offset,
                '--margin-y': marginY
            }}
        >

        </div>
    );
};

export default HLine