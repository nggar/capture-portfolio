// import pages
import Nav from './components/Nav';
import HomePage from './pages/Home';
import Works from './pages/Works';
import MovieDetails from './pages/MovieDetails';
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
                <Route path='/' element={<HomePage />} />
                <Route path='work' element={<Works />} />
                <Route path='work/:id' element={<MovieDetails />} />
                <Route path='contact' element={<ContactUs />} />
            </Routes>
        </div>
    );
}

export default App;
