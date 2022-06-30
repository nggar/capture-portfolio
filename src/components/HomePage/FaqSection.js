import styled from 'styled-components';
import { SectionLayout } from './Styles';
import Toggle from '../Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
    return (
        <FAQ>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                    </div>
                </Toggle>
                <Toggle title='What Products do you offer?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                    </div>
                </Toggle>
                <Toggle title='Diferrent Payment Methods'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                    </div>
                </Toggle>
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
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`

export default FaqSection;