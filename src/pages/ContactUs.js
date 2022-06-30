import styled from 'styled-components';
// animation
import { motion } from 'framer-motion';
import { pageTransition, titleAnimation } from '../utils/animation';

const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageTransition}
            initial='hidden'
            animate='show'
            exit='exit'
            style={{ background: '#fff', height: '110vh' }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
                <div className="line2"></div>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Socials</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Drop an email.</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

// styled
const Hide = styled.div`
  overflow: hidden;
`;

const ContactStyle = styled( motion.div )`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: #353535;
`;

const Social = styled( motion.div )`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;