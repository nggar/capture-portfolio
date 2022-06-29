import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const Works = () => {
    return (
        <StyledWorks>
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to=''>
                    <img src={athlete} alt='athlete' />
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to=''>
                    <img src={theracer} alt="the racer" />
                </Link>
            </StyledMovie>
            <div>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to=''>
                    <img src={goodtimes} alt='goodtimes' />
                </Link>
            </div>
        </StyledWorks>
    )
}

// styled
const StyledWorks = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`
const StyledMovie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default Works;