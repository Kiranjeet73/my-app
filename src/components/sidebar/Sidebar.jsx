import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import InventoryIcon from '@mui/icons-material/InventoryRounded';
import OrdersIcon from '@mui/icons-material/CreditCard';
import DeliveryIcon from '@mui/icons-material/LocalShipping';
import StatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import SystemhealthIcon from '@mui/icons-material/SettingsSystemDaydream';
import LogsIcon from '@mui/icons-material/PsychologyAlt';
import SettingsIcon from '@mui/icons-material/SettingsApplications';
import AccountIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
<div className="top">
    <Link to="/" style={{textDecoration:"none"}}>
    <span class="logo">Kauradmin</span>
    </Link>
    </div>
<hr/>
<div className="center">
<ul>
<p className="title">MAIN</p>
    <li>
        <DashboardIcon  className="icon"/>
    <span>Dashboard</span>
    </li>
    <p className="title">LISTS</p>
    <Link to="/users" style={{textDecoration:"none"}}>
    <li>
        
<PeopleIcon className="icon"/>
    <span>Users</span>
    </li>
    </Link>
    <Link to="/products" style={{textDecoration:"none"}}>
    <li>
        <InventoryIcon className="icon"/>
    <span>Products</span>
    </li>
    </Link>
    <li>
      <OrdersIcon className="icon"/>  
    <span>Orders</span>
    </li>
    <li>
        <DeliveryIcon className="icon"/>
    <span>Delivery</span>
    </li>
    <p className="title">USEFUL</p>
    <li>
        <StatsIcon className="icon"/>
    <span>Stats</span>
    </li>
    <li>
        <NotificationsIcon className="icon"/>
    <span>Notifications</span>
    </li>
    <p className="title">SERVICE</p>
    <li>
        <SystemhealthIcon className="icon"/>
    <span>System Health</span>
    </li>
    <li>
        <LogsIcon className="icon"/>
    <span>Logs</span>
    </li>
     <li>
        <SettingsIcon className="icon"/>
    <span>Settings</span>
    </li>
    <p className="title">USER</p>
    <li>
        <AccountIcon className="icon"/>
    <span>Profile</span>
    </li>
    <li>
        <LogoutIcon className="icon"/>
    <span>Logout</span>
    </li>
</ul>
</div>
<div className="bottom">
    <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
    <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
    
</div>



    </div>
  )
}

export default Sidebar