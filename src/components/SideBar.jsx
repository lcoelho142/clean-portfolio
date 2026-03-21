import './SideBar.css'

export default function SideBar(props) {
    return (
        <aside className="sidebar-right">
            {props.children}
        </aside>
    )
}