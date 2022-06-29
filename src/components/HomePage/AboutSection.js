// Images
import homeImg1 from '../../img/home1.png';
import Wave from '../../utils/Wave';
// Style
import styled from 'styled-components';
import { SectionLayout, Description, Image } from './Styles';
// Framer
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../../utils/animation';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We
                    have professionals with amazing skills to help you achieve it.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={homeImg1} alt="camera guy" />
            </Image>
            <Wave />
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