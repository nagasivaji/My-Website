// Imorting required components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
            <Projects />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
