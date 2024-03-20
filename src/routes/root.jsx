import { Outlet, Link } from "react-router-dom"
import "./../root.css"
export default function Root() {
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to ="/about" className="nav-link active">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/job" className="nav-link ">Job</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link" >Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/skill" className="nav-link">Skill</Link>
                </li>
            </ul>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}