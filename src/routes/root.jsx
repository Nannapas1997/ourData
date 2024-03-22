import { Outlet, Link } from "react-router-dom"
import { useState } from 'react'
import "./../root.css"
function Root() {
    const [tab, setTab] = useState(0);
    const OnClickTabs = () => {
        setTab(() => {
            return "active";
        })
    }
    return (
        <div>
            <ul className="nav nav-tabs">

                <li className="nav-item">
                    <Link to="/about" className="  nav-link" aria-current="page">About</Link>
                </li>
                <li>
                    <Link to="/job" className="nav-link">Job</Link>
                </li>
                <li>
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li>
                    <Link to="/skill" className="nav-link">Skill</Link>
                </li>

            </ul>

            <div id="detail">
                <Outlet />
            </div>

        </div>
    );
}
export default Root;