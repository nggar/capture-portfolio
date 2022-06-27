import styled from 'styled-components';
import { SectionLayout } from './Styles';

const FaqSection = () => {
    return (
        <FAQ>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Diferrent Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </FAQ>
    );
}

//Styled Components
const FAQ = styled( SectionLayout )`
    display: block;
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