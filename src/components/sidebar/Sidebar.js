import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import Profile from '../img/Profile.gif';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SidebarContent from "./SidebarContent";
const Sidebar = (props) => {
    const [bell, setBell] = useState(false);
    const togbell = () => {
        setBell(bell => !bell);
    }
    return (
        <div className={`sidebar ${props.statu ? 'open' : ''}`}>

            {props.statu ? "" : <MenuIcon className="toggle-button" onClick={props.toggle} />}
            <div className="sidebar-top">
                <div className="sidebar-profile">
                    <img className="profile" src={Profile} />
                    <h3> Saleh</h3>
                </div>
                <div className="togbell" onClick={togbell}>{bell ? <NotificationsIcon /> : <NotificationsNoneIcon />} </div>
            </div>
            <div className="sidebar-content">
               <SidebarContent/>
            </div>
        </div>
    );
};

export default Sidebar;