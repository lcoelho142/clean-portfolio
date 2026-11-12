import './ContentsSidebar.css';

export default function ContentsSidebar({ className, items }) {
    return (
        <div className={className}>
            <div className="sidebar-text">
                <h1 className="secondary-font">CONTENTS</h1>
                {items.map((item, index) => (
                    <a key={`${item}-${index}`}>{item}</a>
                ))}
            </div>
        </div>
    );
}
