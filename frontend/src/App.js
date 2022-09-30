// Imorting required components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';

// Importing module which is responsible react routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <About />
            <Resume />
            <Skills />
        </BrowserRouter>
    );
}

export default App;
