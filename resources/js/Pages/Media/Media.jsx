import React from 'react';
import AppLayout from "../../Layouts/AppLayout.jsx";
import {Head} from "@inertiajs/react";
import {Button} from "@/Components/ui/button.jsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {motion} from "framer-motion";
import MediaHero from "@/Pages/Media/MediaHero.jsx";
import BerandaKategori from "@/Pages/Beranda/BerandaKategori.jsx";


const Media = () => {
    return (
        <AppLayout>
            <Head>
                <title>Media</title>
            </Head>
            <div className="flex flex-col w-full gap-8 relative overflow-x-hidden">
                {/* Menambahkan animasi pada setiap komponen */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                >
                    <MediaHero />
                </motion.div>

                {/*<motion.div*/}
                {/*    initial={{opacity: 0, y: 50}}*/}
                {/*    animate={{opacity: 1, y: 0}}*/}
                {/*    transition={{duration: 0.8, ease: 'easeOut', delay: 0.2}}*/}
                {/*>*/}
                {/*    <BerandaKategori/>*/}
                {/*</motion.div>*/}

                {/*<motion.div*/}
                {/*    initial={{opacity: 0, y: 50}}*/}
                {/*    animate={{opacity: 1, y: 0}}*/}
                {/*    transition={{duration: 0.8, ease: 'easeOut', delay: 0.4}}*/}
                {/*>*/}
                {/*    <BerandaPilihan/>*/}
                {/*</motion.div>*/}
            </div>
        </AppLayout>
    );
};

export default Media;
