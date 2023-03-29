import './Digital.scss';
import { useClockOption } from '../../context/ClockOptionContext';
import { useEffect, useRef } from 'react';
import { drawClock } from '../../util/util';

export default function Digital({hour, minute, second}) {
    const canvasRef = useRef(null);
    const option = useClockOption();

    const isNightMode = option.isNightMode;
    useEffect(() => {
        drawClock(canvasRef.current, hour, minute, second, isNightMode);
    },[hour, minute, second, isNightMode]);

    return (
        <div className={`digital container ${option.isNightMode? 'night' : ''}`}>
            <div className='canvas-wrapper'>
                <canvas ref={canvasRef} id='digital-cavans' width="500px" ></canvas>
            </div>
        </div>
    )
}
