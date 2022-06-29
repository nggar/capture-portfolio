// page components
import AboutSection from '../components/HomePage/AboutSection';
import ServicesSection from '../components/HomePage/ServicesSection';
import FaqSection from '../components/HomePage/FaqSection';
// animation
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animation';

const HomePage = () => {
    return (
        <motion.div variants={pageTransition} initial="hidden" animate="show" exit='exit'>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}

export default HomePage;