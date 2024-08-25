import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "./../Components/Navbar.jsx";
import Footer from "./../Components/Footer.jsx";

const AppLayout = ({ children }) => {
    return (
        <div className={'h-full bg-azure-radiance-50'}>
            <motion.div
                className={'relative'}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Navbar />
            </motion.div>
            <div className={'pt-20 max-w-screen-2xl w-full mx-auto min-h-screen'}>
                {children}
            </div>
            <div className={'bg-gradient-to-b from-primary-50 to-primary-100/50 mt-4'}>
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;