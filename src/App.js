import './App.css';
import Counter from './features/counter/Counter';
import { useSelector } from 'react-redux';

function App() {
    const count = useSelector((state) => state.counter.value);

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Count: <span>{count}</span>
                </h1>
                <Counter />
            </header>
        </div>
    );
}

export default App;
