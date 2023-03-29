import { useState, useEffect, useRef } from 'react';
import ClockOption from '../clock-option/ClockOption';
import Analog from '../analog/Analog';
import Digital from '../digital/Digital';
import { useClockOption } from "../../context/ClockOptionContext"

export default function ClockRunner() {
    const option = useClockOption();
    const timer = useRef(null);
    const [time, setTime] = useState(new Date());

    const isStarted = option.isStarted;
    useEffect(() => {
        if (isStarted) {
            timer.current = setInterval(() => {
                setTime(new Date());
            }, 1000);
        } else {
            clearInterval(timer.current)
        }

        return () => {clearInterval(timer.current)}
    },[isStarted])

    return (
        <>
            <ClockOption />
            <Analog hour={time.getHours()} minute={time.getMinutes()} second={time.getSeconds()}/>
            <Digital hour={time.getHours()} minute={time.getMinutes()} second={time.getSeconds()}/>
        </>
    );
}