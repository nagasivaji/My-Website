// Imorting required components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

// Importing module which is responsible react routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <About />
        </BrowserRouter>
    );
}

export default App;
