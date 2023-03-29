import ClockRunner from './component/clock-runner/ClockRunner';
import { ClockOptionProvider } from './context/ClockOptionContext';

function App() {
    return (
        <div className="clock">
            <ClockOptionProvider>
                <ClockRunner />
            </ClockOptionProvider>
        </div>
    );
}

export default App;
