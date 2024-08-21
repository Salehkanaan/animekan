import { useEffect, useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Profile from '../img/Profile.gif';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SidebarContent from "./SidebarContent";
const Sidebar = (props) => {
    const [bell, setBell] = useState(false);
    const endref = useRef(null)
    useEffect(() => {
        endref.current?.scrollIntoView({ behavior: "smooth" })
    })

    const togbell = () => {
        setBell(bell => !bell);
    }

    return (
        <div className={`sidebar ${props.statu ? 'open' : ''}`}>
            <div ref={endref}></div>
            {props.statu ? "" : <MenuIcon className="toggle-button" onClick={props.toggle} />}
            <div className="sidebar-top">
                <div className="sidebar-profile">
                    <img className="profile" src={Profile} />
                    <h3> Saleh</h3>
                </div>
                <div className="togbell" onClick={togbell}>{bell ? <NotificationsIcon /> : <NotificationsNoneIcon />} </div>
            </div>
            <div className="sidebar-content">
                <SidebarContent />
            </div>
        </div>
    );
};

export default Sidebar;