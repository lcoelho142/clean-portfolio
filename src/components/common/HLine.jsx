import './HLine.css';

const HLine = ({ className, offset = "0px", rightOffset = "0px", marginY = "20px" }) => {
    return (
        <div className={`hline ${className || ''}`}
            style={{
                '--offset': offset,
                '--right-offset': rightOffset,
                '--margin-y': marginY
            }}
        >

        </div>
    );
};

export default HLine