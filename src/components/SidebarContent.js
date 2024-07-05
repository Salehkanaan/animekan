import React from 'react'
import { useNavigate } from 'react-router-dom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ListIcon from '@mui/icons-material/List';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DownloadIcon from '@mui/icons-material/Download';
import ExtensionIcon from '@mui/icons-material/Extension';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
export default function SidebarContent() {
    const navigate = useNavigate();
    return (
        <div>
            <ul>
                <li>Latest Upadtes <LocalFireDepartmentIcon /></li>
                <li>List Of Anime <ListIcon /></li>
                <li>Seasons <DateRangeIcon /></li>
                <div className='line'></div>
                <li>World Rate <AssessmentIcon /></li>
                <li>Arabian Rate <AssessmentIcon /></li>
                <div className='line'></div>
                <li>My List <AssessmentIcon /></li>
                <li>My Special List <AssessmentIcon /></li>
                <li>My Favourite Animes <FavoriteIcon /></li>
                <li>My Favourite Characters <FavoriteIcon /></li>
                <li>History <AccessTimeIcon /></li>
                <li>Downloads <DownloadIcon /></li>
                <div className='line'></div>
                <li>Most liked Characters <SignalCellularAltIcon /></li>
                <li>Wanted Animes <ExtensionIcon /> </li>
                <li>Dates Of Episodes release <DateRangeIcon /></li>
                <li>News <NewspaperIcon /></li>
                <div className='line'></div>
                <li onClick={() => navigate("/setting")}>Settings <SettingsIcon /></li>
            </ul>
        </div>
    )
}
