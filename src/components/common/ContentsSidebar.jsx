import { useEffect, useState } from 'react';
import './ContentsSidebar.css';
import HLine from './HLine.jsx';

export default function ContentsSidebar({ className, items }) {
    const [activeId, setActiveId] = useState(items[0]?.id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        items.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, [items]);

    return (
        <div className={className}>
            <div className="sidebar-text">
                <h1 className="secondary-font accent-color">PAGE QUICK NAV</h1>
                <HLine className="sidebar-divider" offset="0px" rightOffset="30px" marginY="20px" />
                {items.map(({ label, id }) => (
                    <a 
                        key={id} 
                        href={`#${id}`} 
                        className={`sidebar-link ${activeId === id ? 'active' : ''}`}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </div>
    );
}
