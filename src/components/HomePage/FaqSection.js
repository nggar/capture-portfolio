import styled from 'styled-components';
import { SectionLayout } from './Styles';
import Toggle from '../../utils/Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from '../../utils/useScroll';
import { scrollReaveal } from '../../utils/animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <FAQ ref={element} animate={controls} variants={scrollReaveal} initial='hidden'>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?' />
                <Toggle title='What Products do you offer?' />
                <Toggle title='Diferrent Payment Methods' />
                <Toggle title='Daily Schedule' />
            </AnimateSharedLayout>
        </FAQ >
    );
}

//Styled Components
const FAQ = styled( SectionLayout )`
    display: block;
    padding: 10rem;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background-color: #ccc;
        height: .2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0 0rem;
        p {
            padding: 1rem 0;
        }
    }
`

export default FaqSection;