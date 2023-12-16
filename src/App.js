import { Routes, Route } from 'react-router-dom';
import ButtonToggle from './components/ButtonToggle';
import SimpleCounter from './components/SimpleCounter';
import List from './components/List';
import Home from './components/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button-toggle" element={<ButtonToggle />} />
            <Route path="/simple-counter" element={<SimpleCounter />} />
            <Route path="/list" element={<List />} />
        </Routes>
    );
}

export default App;
