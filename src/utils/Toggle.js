import { motion } from 'framer-motion';
import { useState } from 'react';

const Toggle = ( { title } ) => {
    const [toggle, setToggle] = useState( false );
    return (
        <motion.div layout className='question' onClick={() => { setToggle( !toggle ) }}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
            </div> : ''}
            <div className="faq-line"></div>
        </motion.div>
    )
}


export default Toggle;