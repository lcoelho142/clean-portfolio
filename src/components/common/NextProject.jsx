import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { workProjects } from '../../pages/work/projects.js';
import './NextProject.css';

export default function NextProject() {
    const { pathname } = useLocation();

    // strip a trailing slash so "/work/social-spark/" still matches
    const currentPath = pathname.replace(/\/$/, '');

    const currentIndex = workProjects.findIndex((proj) => proj.path === currentPath);
    if (currentIndex === -1) return null;

    const { path, category, title, roles } = workProjects[(currentIndex + 1) % workProjects.length];

    return (
        <div className="next-project-nav">
            <div className="next-project-cell">
                <Link to="/work" className="main-font next-project-text">
                    SEE ALL PROJECTS
                </Link>
            </div>

            <div className="next-project-cell next-project-center">
                <span className="main-font next-project-text">NEXT</span>
            </div>

            <Link to={path} className="next-project-link">
                <FontAwesomeIcon icon={faArrowRight} className="next-project-arrow accent-color" />
                <h3 className="secondary-font next-project-title">
                    <span className="italic font-extrabold">{category}:</span> {title}
                </h3>
                <p className="main-font next-project-roles">{roles}</p>
            </Link>
        </div>
    );
}