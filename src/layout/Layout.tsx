import FutureNav from '../components/FutureNav';
import Logo from '../components/Logo';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

export const Layout = () => {
    return (
        <div className="layout">
            <Logo />
            <Outlet />
            <FutureNav />
        </div>
    )
}

export default Layout;