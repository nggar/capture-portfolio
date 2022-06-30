import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// animation
import { motion } from 'framer-motion';
import { pageTransition, fade, fade2, photoAnimation, lineAnimation, lineAnimation2, slideAnimation, slideContainer } from '../utils/animation';
import { useScroll } from '../utils/useScroll';

const Works = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <StyledWorks style={{ background: '#fff' }} variants={pageTransition} initial='hidden' animate='show' exit='exit'>

            <motion.div variants={slideContainer}>
                <Frame1 variants={slideAnimation}></Frame1>
                <Frame2 variants={slideAnimation}></Frame2>
                <Frame3 variants={slideAnimation}></Frame3>
                <Frame4 variants={slideAnimation}></Frame4>
            </motion.div>

            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to='the-athlete' >
                    <Hide>
                        <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
                    </Hide>
                </Link>
            </StyledMovie>
            <StyledMovie variants={fade2} animate={controls} initial='hidden' ref={element}>
                <h2>The Racer</h2>
                <motion.div variants={lineAnimation2} className='line'></motion.div>
                <Link to='the-racer'>
                    <img src={theracer} alt="the racer" />
                </Link>
            </StyledMovie>
            <StyledMovie variants={fade2} animate={controls2} initial='hidden' ref={element2} >
                <h2>Good Times</h2>
                <motion.div variants={lineAnimation2} className='line'></motion.div>
                <Link to='good-times'>
                    <img src={goodtimes} alt='goodtimes' />
                </Link>
            </StyledMovie>
        </StyledWorks>
    )
}

// styled
const StyledWorks = styled( motion.div )`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`
const StyledMovie = styled( motion.div )`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Hide = styled.div`
    overflow: hidden;
`

// Framer Animation
const Frame1 = styled( motion.div )`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled( Frame1 )`
    background: #ff8efb;
`
const Frame3 = styled( Frame1 )`
    background: #8ed2ff;
`
const Frame4 = styled( Frame1 )`
    background: #8effa0;
`
export default Works;