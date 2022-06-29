// import pages
import Nav from './components/Nav';
import HomePage from './pages/Home';
import Works from './pages/Works';
import ContactUs from './pages/ContactUs';
// Style
import GlobalStyle from './pages/GlobalStyle';
// Router
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='work' element={<Works />} />
                <Route path='contact' element={<ContactUs />} />
            </Routes>
        </div>
    );
}

export default App;
