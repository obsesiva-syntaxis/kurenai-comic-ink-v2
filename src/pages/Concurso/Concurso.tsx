import { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { saveAs } from 'file-saver';
import Countdown from 'react-countdown';
import './Concurso.scss';
const toBlob = require('canvas-to-blob');

const Concurso = () => {
    const [initCountdown, setInitCountdown] = useState(false);
    const canvasData: any = {
        canvas: {}
    };

    const handleFinish = () => {
        setInitCountdown(false);
        saveAs(toBlob(canvasData.canvas.getDataURL()), 'Escriba su instragram aqui.png');
        canvasData.canvas.eraseAll();
    }

    return (
        <div className="concurso">

            <div className="concurso__left">
                <div className="concurso__left-container">
                    <div className="concurso__left-container-top"><h1>Dibuja a Pochita</h1></div>
                    <div className="concurso__left-container-img">
                    </div>
                    <div className="concurso__left-container-bottom"><h1>(En solo 1 minuto!)</h1></div>
                </div>
            </div>

            <div className="concurso__right">
                <div className="concurso__right-container">
                    <div className="concurso__right-container-top">
                        <button onClick={() => canvasData.canvas.eraseAll()} >reset</button>
                    </div>
                    <div className="concurso__right-container-img">
                        <CanvasDraw ref={canvasDraw => (canvasData.canvas = canvasDraw)} brushRadius={3} canvasWidth={600} canvasHeight={600} disabled={initCountdown ? false : true} />
                    </div>
                    <div className="concurso__right-container-bottom">
                        <div className="concurso__right-container-bottom-top">
                            {
                                initCountdown && (<Countdown date={Date.now() + 60000} onComplete={() => handleFinish()} />)
                            }
                        </div>
                        <div className="concurso__right-container-bottom-bottom">
                            <button className="concurso__center-action-btn" onClick={() => (setInitCountdown(true))} disabled={initCountdown ? true : false} style={{ opacity: `${initCountdown ? '.5' : '1'}` }}>Comenzar</button>
                            <button className="concurso__center-action-btn" onClick={() => handleFinish()} disabled={initCountdown ? false : true} style={{ opacity: `${initCountdown ? '1' : '.5'}` }}>Terminar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="concurso-bg-green"></div>
        </div>
    )
}

export default Concurso;