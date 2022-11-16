// import { useState } from 'react';
import QRCode from "react-qr-code";
import './Shop.scss';

const Shop = () => {
    return (
        <div className="shop">

            <div className="shop__container-left">
                <div className='shop__container-left-box'>
                    <QRCode value="https://www.instagram.com/studiokurenai/" bgColor={'#ffffff'}/>
                </div>
            </div>

            <div className="shop__container-right">
                <div className="shop__container-right-box">
                    <h1>#StudioKurenai</h1>
                </div>
            </div>

            <div className="shop-bg-blue"></div>
        </div>
    )
}

export default Shop;