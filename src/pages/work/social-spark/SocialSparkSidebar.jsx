import ContentsSidebar from '../../../components/common/ContentsSidebar.jsx';

const sections = [
    { label: 'Context', id: 'context' },
    { label: 'Discovery', id: 'discovery' },
    { label: 'Mood Board', id: 'mood-board' },
    { label: 'Iteration', id: 'iteration' },
    { label: 'Delivery', id: 'delivery' },
    { label: 'Reflection', id: 'reflection' },
];

export default function SocialSparkSidebar() {
    return (
        <ContentsSidebar
            className="socialspark-sidebar-content"
            items={sections}
        />
    );
}