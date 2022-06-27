//Images
import homeImg1 from '../../img/home1.png';
// Style
import styled from 'styled-components';
import { SectionLayout, Description, Image } from './Styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
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