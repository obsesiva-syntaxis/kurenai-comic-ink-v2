import { createContext, useState } from 'react';
import './Tattoo.scss';


const Tattoos = [
    {
        id: '1',
        img: ['./assets/gantz-death.jpg'],
        active: false,
        name: 'unnamed',
        avatar: './assets/avatar01.jpg',
        biograph: 'nothing',
        insta: 'obsynth',
    },
]

const TattoosBruno = [
    {
        id: '2',
        img: [
            './assets/vagabong.jpg',
            './assets/vagabong.jpg',
            './assets/vagabong.jpg',
            './assets/vagabong.jpg',
            './assets/vagabong.jpg',
            './assets/vagabong.jpg',
            './assets/vagabong.jpg',
            './assets/vagabong.jpg',
        ],
        active: false,
        name: 'Bruno Salas',
        avatar: './assets/avatar02.jpg',
        biograph: `Aficionado al arte y a la ñoñez misma. Llevo 6 años dedicandome al arte del tatuaje, siempre agradecido de las personas que apoya mi trabajo
                    y el oficio del arte.`,
        insta: 'brunosalas.ink'

    },
];

const TattoosMario = [
    {
        id: '3',
        img: [
            './assets/mario/01.jpg',
            './assets/mario/02.jpg',
            './assets/mario/03.jpg',
            './assets/mario/04.jpg',
            './assets/mario/05.jpg',
            './assets/mario/06.jpg',
            './assets/mario/07.jpg',
            './assets/slam-dunk.jpg',
        ],
        active: false,
        name: 'Mario Henriquez',
        avatar: './assets/avatar04.jpg',
        biograph: `En mi trayecto en esta vida de tatuajes he aprendido que el arte es un momento y un lugar, cada trabajo
                    que realizo marcan ese espacio de tiempo, por ese motivo para mi la entrega de una experiencia es vital en mi trabajo, 
                    las experiencias, crear vinculos y momentos, que al final del dia para el cliente es agradable y una historia que llevara la vida entera`,
        insta: 'tatuajesctm'
    },
];

const TattoosLucy = [
    {
        id: '4',
        img: [
            './assets/lucy/01.jpg',
            './assets/lucy/02.jpg',
            './assets/lucy/03.jpg',
            './assets/lucy/04.jpg',
            './assets/lucy/05.jpg',
            './assets/lucy/06.jpg',
            './assets/lucy/07.jpg',
            './assets/lucy/08.jpg',
        ],
        active: false,
        name: 'Luciano Cantillana',
        avatar: './assets/avatar03.jpg',
        biograph: `"Ya que no tenemos alas, debemos buscar otra forma de volar"`,
        insta: 'luciano.cantillana.art'
    },
];

interface TattooEssence {
    id: string;
    img: string[];
    active: boolean;
    name: string;
    biograph: string;
    avatar: string;
    insta: string;
}

interface TattooContextEssence {
    Tattoos: TattooEssence[];
}

interface SelectTattooEssence {
    active: boolean;
    tatuador: TattooEssence;
    imgSelected: string;
}

export const TattooContext = createContext({} as TattooContextEssence);
const { Provider } = TattooContext;

const Tattoo = () => {
    const [tattooState, setTattooState] = useState(TattoosLucy);
    const [selectTattoo, setSelectTattoo] = useState<SelectTattooEssence>({ active: false, tatuador: TattoosLucy[0], imgSelected: TattoosLucy[0].img[0] });

    const selectPapiro = (name: string) => {
        switch (name) {
            case 'lucy':
                setTattooState(TattoosLucy);
                setSelectTattoo(prev => ({ active: prev.active, tatuador: TattoosLucy[0], imgSelected: TattoosLucy[0].img[0] }));
                break;
            case 'bruno':
                setTattooState(TattoosBruno);
                setSelectTattoo(prev => ({ active: prev.active, tatuador: TattoosBruno[0], imgSelected: TattoosBruno[0].img[0] }));
                break;
            case 'mario':
                setTattooState(TattoosMario);
                setSelectTattoo(prev => ({ active: prev.active, tatuador: TattoosMario[0], imgSelected: TattoosMario[0].img[0] }));
                break;

            default:
                setTattooState(Tattoos);
                break;
        }
    }

    const onSelectTattoo = (tatuador: TattooEssence, imgSelected: string) => {
        setSelectTattoo({ active: true, tatuador, imgSelected });
    }

    const handleReturn = () => {
        setSelectTattoo( prev => ({ active: false, tatuador: prev.tatuador, imgSelected: Tattoos[0].img[0] }));
        console.log('handle return');
    }

    return (
        <Provider value={{ Tattoos }}>
            <div className="tattoo">

                <div className="tattoo-bg01">
                </div>
                <div className="tattoo-bg02">
                    <div className="tattoo-bg02__top">
                        <button onClick={() => selectPapiro('bruno')}>Bruno Salas</button>
                        <button onClick={() => selectPapiro('mario')}>TatuajesCtm</button>
                        <button onClick={() => selectPapiro('lucy')}>LucianoCantillana</button>
                    </div>
                    <div className="tattoo-bg02__buttom">
                        <div className="tattoo-bg02__buttom-avatar">
                            <div className="tattoo-bg02__buttom-avatar-img" style={{ backgroundImage: `url(${selectTattoo.tatuador.avatar})` }}></div>
                        </div>
                        <div className="tattoo-bg02__buttom-info">
                            <div className="tattoo-bg02__buttom-info-title">
                                <div className="tattoo-bg02__buttom-info-title-left">
                                    <div className="tattoo-bg02__buttom-info-title-left-line"></div>
                                </div>
                                <div className="tattoo-bg02__buttom-info-title-name">
                                    <h1> {selectTattoo.tatuador.name} </h1>
                                </div>
                                <div className="tattoo-bg02__buttom-info-title-right">
                                    <div className="tattoo-bg02__buttom-info-title-left-line"></div>
                                </div>
                            </div>

                            <div className="tattoo-bg02__buttom-info-main">
                                <div className="tattoo-bg02__buttom-info-main-text">
                                    {selectTattoo.tatuador.biograph}
                                </div>
                                <div className="tattoo-bg02__buttom-info-main-insta">
                                    <i className="fa-brands fa-instagram"></i>
                                    <h1> {selectTattoo.tatuador.insta}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tattoo-bg03">
                    {
                        !selectTattoo.active ? (
                            <div className="tattoo-bg03__section">
                                <div className="tattoo-bg03__section-banner">
                                    <div className="tattoo-bg03__section-banner-element-topleft" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[0])} style={{ backgroundImage: `url(${tattooState[0].img[0]})` }} ></div>
                                    <div className="tattoo-bg03__section-banner-element-bottomright" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[1])} style={{ backgroundImage: `url(${tattooState[0].img[1]})` }}></div>
                                </div>
                                <div className="tattoo-bg03__section-banner">
                                    <div className="tattoo-bg03__section-banner-element-topleft" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[2])} style={{ backgroundImage: `url(${tattooState[0].img[2]})` }} ></div>
                                    <div className="tattoo-bg03__section-banner-element-bottomright" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[3])} style={{ backgroundImage: `url(${tattooState[0].img[3]})` }}></div>
                                </div>
                                <div className="tattoo-bg03__section-banner">
                                    <div className="tattoo-bg03__section-banner-element-topleft" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[4])} style={{ backgroundImage: `url(${tattooState[0].img[4]})` }} ></div>
                                    <div className="tattoo-bg03__section-banner-element-bottomright" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[5])} style={{ backgroundImage: `url(${tattooState[0].img[5]})` }}></div>
                                </div>
                                <div className="tattoo-bg03__section-banner">
                                    <div className="tattoo-bg03__section-banner-element-topleft" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[6])} style={{ backgroundImage: `url(${tattooState[0].img[6]})` }} ></div>
                                    <div className="tattoo-bg03__section-banner-element-bottomright" onClick={() => onSelectTattoo(tattooState[0], tattooState[0].img[7])} style={{ backgroundImage: `url(${tattooState[0].img[7]})` }}></div>
                                </div>
                                
                            </div>
                        ) : (
                            <div className="tattoo-bg03__gallery">
                                <div className="tattoo-bg03__gallery-img" style={{ backgroundImage: `url(${selectTattoo.imgSelected})` }}></div>
                                <button className="tattoo-bg03__gallery-button" onClick={() => handleReturn()}>
                                    <i className="fa-solid fa-angle-left"></i>
                                    Atras
                                </button>
                            </div>
                        )
                    }
                </div>

                <div className="tattoo-bg-red"></div>
            </div>
        </Provider>
    )
}

export default Tattoo;