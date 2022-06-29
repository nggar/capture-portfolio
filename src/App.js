// import pages
import Nav from './components/Nav';
import HomePage from './pages/Home';
import Works from './pages/Works';
import MovieDetails from './pages/MovieDetails';
import ContactUs from './pages/ContactUs';
// Style
import GlobalStyle from './components/GlobalStyle';
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
// animation
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='work' element={<Works />} />
                    <Route path='work/:id' element={<MovieDetails />} />
                    <Route path='contact' element={<ContactUs />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
