import { Routes, Route } from 'react-router-dom';
import ButtonToggle from './components/ButtonToggle';
import SimpleCounter from './components/SimpleCounter';
import List from './components/List';
import PhoneBook from './components/PhoneBook';
import TicTacToe from './components/TicTacToe';
import Home from './components/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button-toggle" element={<ButtonToggle />} />
            <Route path="/simple-counter" element={<SimpleCounter />} />
            <Route path="/list" element={<List />} />
            <Route path="/phone-book" element={<PhoneBook />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
    );
}

export default App;
