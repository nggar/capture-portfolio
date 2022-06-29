// Images
import homeImg1 from '../../img/home1.png';
// Style
import styled from 'styled-components';
import { SectionLayout, Description, Image } from './Styles';
// Framer
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We
                    have professionals with amazing skills to help you achieve it.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={homeImg1} alt="camera guy" />
            </Image>
        </About>
    );
}

// styled components
const About = styled( SectionLayout )`
`
const Hide = styled.div`
    overflow: hidden;
`

export default AboutSection;