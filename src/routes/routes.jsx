import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';

import Dashboard from '../views/Dashboard/Dashboard';
import UserProfile from '../views/UserProfile/UserProfile';
import TableList from '../views/TableList/TableList';
import Typography from '../views/Typography/Typography';
import Icons from '../views/Icons/Icons';
import Maps from '../views/Maps/Maps';
import Notifications from '../views/Notifications/Notifications';


var appRoutes = [
    { path: "/pages/login-page", name: "Pages", component: Pages },
    { path: "/pages/register-page", name: "Pages", component: Pages },
    { path: "/pages/lock-screen-page", name: "Pages", component: Pages },
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    
    { path: "/", name: "Home", component: Dash },

    { path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    { path: "/table", name: "Table List", icon: "pe-7s-note2", component: TableList },
    { path: "/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography },
    { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
    { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    { callback: true, path: "/callback", name: "Dashboard" },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;
