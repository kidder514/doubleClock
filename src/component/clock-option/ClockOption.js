import { useClockOption, useClockOptionDispatch } from "../../context/ClockOptionContext"

export default function ClockOption({children}) {
    const option = useClockOption();
    const dispatch = useClockOptionDispatch();

    return (
        <>
            <button onClick={() => dispatch({type: 'toggleStart'})}>
                {option.isStarted? 'stop': 'start' }
            </button>
            <button onClick={() => dispatch({type: 'toggleNightMode'})}>
                {option.isNightMode? 'Night Mode: off': 'Night Mode: on' }
            </button>
            <button onClick={() => dispatch({type: 'toggle24hr'})}>
                {option.is24hr? '12hr Clock': '24hour clock' }
            </button>
            {children}
        </>
    )
}