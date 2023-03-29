import { createContext, useReducer, useContext } from 'react';

const initClockOption = {
    isStarted: true,
    is24hr: false,
    isNightMode: false,
}

const ClockOptionContext = createContext(initClockOption);
const ClockOptionDispatchContext = createContext(null);
export function useClockOption() { return useContext(ClockOptionContext)};
export function useClockOptionDispatch() { return useContext(ClockOptionDispatchContext)};

export function ClockOptionProvider({children}) {
    const [clockOption, dispatch] = useReducer(clockOptionReducer, initClockOption);
    
    return (
        <ClockOptionContext.Provider value={clockOption}>
            <ClockOptionDispatchContext.Provider value={dispatch}>
                {children}
            </ClockOptionDispatchContext.Provider>
        </ClockOptionContext.Provider>
    );
} 

function clockOptionReducer(state, action) {
    switch(action.type) {
        case 'toggleStart':
            return {...state, isStarted: !state.isStarted};
        case 'toggleNightMode':
            return {...state, isNightMode: !state.isNightMode};
        case 'toggle24hr':
            return {...state, is24hr: !state.is24hr};
        default: 
            throw Error('unknown action: ' + action.type);
    }
}
