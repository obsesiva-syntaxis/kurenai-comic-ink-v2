import { useState } from 'react';
import './Shop.scss';

interface poleraEssence {
    id: string;
    img: string;
}

interface selectImageEssence {
    active: boolean;
    polera: poleraEssence;
}

const polera = {
    id: '1',
    img: './assets/vagabond01.jpg',
}

const Shop = () => {

    const [selectImage, setSelectImage] = useState<selectImageEssence>({ active: false, polera });

    const handleSelect = (poleraSelected: poleraEssence) => {
        setSelectImage({ active: true, polera: poleraSelected });
    }

    return (
        <div className="shop">

            <div className="shop-bg-blue"></div>
            {/* {
                !selectImage.active ? (
                    <div className="shop__container">
                        <div className="shop__container-gallery">
                            <div className="shop__container-gallery-img" onClick={() => handleSelect(selectImage.polera)} style={{ backgroundImage: `url(${selectImage.polera.img})` }}></div>
                            <div className="shop__container-gallery-img" onClick={() => handleSelect(selectImage.polera)} style={{ backgroundImage: `url(${selectImage.polera.img})` }}></div>
                            <div className="shop__container-gallery-img" onClick={() => handleSelect(selectImage.polera)} style={{ backgroundImage: `url(${selectImage.polera.img})` }}></div>
                            <div className="shop__container-gallery-img" onClick={() => handleSelect(selectImage.polera)} style={{ backgroundImage: `url(${selectImage.polera.img})` }}></div>
                            <div className="shop__container-gallery-img" onClick={() => handleSelect(selectImage.polera)} style={{ backgroundImage: `url(${selectImage.polera.img})` }}></div>
                            <div className="shop__container-gallery-img" onClick={() => handleSelect(selectImage.polera)} style={{ backgroundImage: `url(${selectImage.polera.img})` }}></div>
                        </div>
                        <div className="shop__container-menu">
                            <h1>POLERAS</h1>
                        </div>
                    </div>
                ) : (
                    <div className="shop__focus">
                        <div className="shop__focus-top">
                            <div className="shop__focus-top-container">
                                <div className="shop__focus-top-container-img"></div>
                            </div>
                            <div className="shop__focus-top-container">
                                <div className="shop__focus-top-container-img"></div>
                            </div>
                            <div className="shop__focus-top-container">
                                <div className="shop__focus-top-container-img"></div>
                            </div>
                            
                            
                        </div>
                        <div className="shop__focus-bottom">
                            asd
                        </div>
                    </div>
                )
            } */}
        </div>
    )
}

export default Shop;