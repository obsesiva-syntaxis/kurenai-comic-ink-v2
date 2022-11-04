import { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { saveAs } from 'file-saver';
import Countdown from 'react-countdown';
import './Concurso.scss';
const toBlob = require('canvas-to-blob');

const Concurso = () => {
    const [initCountdown, setInitCountdown] = useState(false);
    // const [focusCanvasDraw, setFocusCanvasDraw] = useState({ canvas: {}});
    const canvasData: any = {
        canvas: {}
    };

    const handleFinish = () => {
        setInitCountdown(false);
        saveAs( toBlob(canvasData.canvas.getDataURL()), 'pochita.png');
        canvasData.canvas.eraseAll();
    }

    return (
        <div className="concurso">

            <div className="concurso-bg-green"></div>
            {/* <div className="concurso__left">
                <div className="concurso__left-container">
                    <div className="concurso__left-container-img"></div>
                </div>
            </div>
            <div className="concurso__center">
                <div className="concurso__center-title">
                    <h1>Dibuja a Pochita</h1>
                    <h3>(En solo 1 minuto!)</h3>
                </div>
                <div className="concurso__center-action">
                    <button className="concurso__center-action-btn" onClick={ () => (setInitCountdown(true))} disabled={ initCountdown ? true : false } style={{ opacity: `${ initCountdown ? '.5' : '1'}`}}>Comenzar</button>
                    <button className="concurso__center-action-btn" onClick={ () => handleFinish()} disabled={initCountdown ? false : true} style={{ opacity: `${ initCountdown ? '1' : '.5'}`}}>Terminar</button>
                </div>
                <div className="concurso__center-info">
                    {
                        initCountdown && (<Countdown date={Date.now() + 60000} onComplete={ () => handleFinish() } />)
                    }
                </div>
            </div>

            <div className="concurso__right">
                <div className="concurso__right-container">
                    <div className="concurso__right-container-canvas">

                        <CanvasDraw ref={canvasDraw => ( canvasData.canvas = canvasDraw )} brushRadius={ 3 } canvasWidth={ 600 } canvasHeight={ 600 } disabled={initCountdown ? false : true}/>
                    </div>
                    <div className="concurso__right-container-actions">
                        <button onClick={ () => canvasData.canvas.eraseAll()} disabled={initCountdown ? false : true} style={{ opacity: `${ initCountdown ? '1' : '.5'}`}}>reset</button>
                        {/* <button onClick={ () => {  saveAs( toBlob(canvasData.canvas.getDataURL()), '../../assets/pochita.png') }}> onLocalStorage </button> */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div>  */}
        </div>
    )
}

export default Concurso;