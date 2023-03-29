import './Analog.scss';
import { getRotationDegree } from '../../util/util';
import { useClockOption } from '../../context/ClockOptionContext';

export default function Analog({hour, minute, second}) {
    const option = useClockOption();
    return (
        <div className={`analog container ${option.isNightMode? 'night' : ''}`}>
            <div className='circle'>
                <div className='hour' style={{transform: `rotate(${getRotationDegree('hour', hour)}deg)`}}></div>
                <div className='minute' style={{transform: `rotate(${getRotationDegree('minute', minute)}deg)`}}></div>
                <div className='second' style={{transform: `rotate(${getRotationDegree('second', second)}deg)`}}></div>
                <div className='bottom'></div>
            </div>
        </div>
    )
}