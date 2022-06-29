// animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animation';

const ContactUs = () => {
    return (
        <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit'>
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default ContactUs;