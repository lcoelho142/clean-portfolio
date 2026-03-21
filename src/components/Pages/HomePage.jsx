import NavBar from "../NavBar"
import MidSec from "../MidSec"
import SideBar from "../SideBar"

export default function HomePage() {
    return (
        <div className="app-container">
            <NavBar />
            <MidSec />
            <SideBar><a className="email text-base" href="mailto:leahmadethis4@gmail.com">leahmade<br/>this4@<br/>gmail.com</a></SideBar>
        </div>
    )
}


