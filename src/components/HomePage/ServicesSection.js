//Import Icons
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';
import homeImg2 from '../../img/home2.png'
//Import Styles
import styled from 'styled-components';
import { SectionLayout, Description, Image } from './Styles';
// import animations
import { useScroll } from '../../utils/useScroll';
import { scrollReaveal } from '../../utils/animation';


const ServicesSection = () => {
    const [element, controls] = useScroll();

    return (
        <Services variants={scrollReaveal} animate={controls} initial='hidden' ref={element}>
            <Description>
                <h2>High <span>quality</span> services.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={homeImg2} alt="camera" />
            </Image>
        </Services>

    )
}

//Styled Component
const Services = styled( SectionLayout )`
    padding: 15rem 10rem 5rem;
    h2 {
        padding-bottom: 10rem;
    }
    p {
        width: 70%;
        padding: 3rem 0 6rem 0;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    flex-basis: 24rem;

    .icon {
        display: flex;
        align-items: center;

        img {
            width: 3.5rem;
        }

        h3 {
            margin-left: 2rem;
            background: white;
            color: black;
            padding:  1rem;
            
        }
    }
`

export default ServicesSection;