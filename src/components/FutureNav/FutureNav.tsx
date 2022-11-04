// import { CenterDesign } from './CenterDesign';
// import { LeftDesign } from './LeftDesign';
// import { RightDesign } from './RightDesign';
// import { Link } from 'react-router-dom';<
import { Link } from 'react-router-dom';
import './FutureNav.scss';



export const FutureNav = () => {
    return (
        <div className="future-nav">
            <div className="future-nav__menu">
                <Link className="future-nav__menu-element-01" to="/">
                    {/* <div className="future-nav__menu-element-01"></div> */}
                </Link>
                <Link className="future-nav__menu-element-02" to="/contest">
                    {/* <div className="future-nav__menu-element-01"></div> */}
                </Link>
                <Link className="future-nav__menu-element-03" to="/shop">
                    {/* <div className="future-nav__menu-element-01"></div> */}
                </Link>

            </div>
            {/* <div className="future-nav__left">
                <LeftDesign />
            </div>
            <div className="future-nav__center">
                <div className="future-nav__center-left">
                    <Link to="/">
                        <button>TATTOO</button>
                    </Link>
                    <div className="future-nav__center-left-monolit">
                        <CenterDesign />
                    </div>
                </div>
                <div className="future-nav__center-left">
                    <Link to="/contest">
                        <button>CONCURSO</button>
                    </Link>
                    <div className="future-nav__center-left-monolit">
                        <CenterDesign />
                    </div>
                </div>
                <div className="future-nav__center-left">
                    <Link to="/shop">
                        <button>SHOP</button>
                    </Link>
                    <div className="future-nav__center-left-monolit">
                        <CenterDesign />
                    </div>
                </div>
            </div>
            <div className="future-nav__right">
                <RightDesign />
            </div> */}
        </div>
    )
}

export default FutureNav;
