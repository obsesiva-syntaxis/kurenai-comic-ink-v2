import { Link } from 'react-router-dom';
import './FutureNav.scss';



export const FutureNav = () => {
    return (
        <div className="future-nav">
            <div className="future-nav__menu">
                <Link className="future-nav__menu-element-01" to="/" />
                <Link className="future-nav__menu-element-02" to="/contest" />
                <Link className="future-nav__menu-element-03" to="/shop" />
            </div>
        </div>
    )
}

export default FutureNav;
