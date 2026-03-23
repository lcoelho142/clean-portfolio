import './HLine.css';

const HLine = ({ offset = "0px", marginY = "20px" }) => {
    return (
        <div className="hline"
            style={{
                '--offset': offset,
                '--margin-y': marginY
            }}
        >

        </div>
    );
};

export default HLine;