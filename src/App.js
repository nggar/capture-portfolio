// import pages
import HomePage from './pages/Home';
// Style
import Nav from './components/Nav';
import GlobalStyle from './components/GlobalStyle';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <HomePage />
        </div>
    );
}

export default App;
