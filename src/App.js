// import pages
import Nav from './components/Nav';
import HomePage from './pages/Home';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
// Style
import GlobalStyle from './components/GlobalStyle';
// Router
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Routes>
                <Route path="/" exact element={<HomePage />} />

                <Route path="/work" element={<OurWork />} />

                <Route path="/contact" element={<ContactUs />} />

            </Routes>
        </div>
    );
}

export default App;
