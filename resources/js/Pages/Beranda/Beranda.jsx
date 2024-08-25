import React from 'react';
import AppLayout from "../../../Layouts/AppLayout.jsx";
import { Head } from "@inertiajs/react";
import BerandaHero from "@/Pages/Beranda/BerandaHero.jsx";
import BerandaKategori from "@/Pages/Beranda/BerandaKategori.jsx";
import BerandaPilihan from "@/Pages/Beranda/BerandaPilihan.jsx";

import { motion } from 'framer-motion';
import BerandaArtikel from "@/Pages/Beranda/BerandaArtikel.jsx";
import BerandaFAQ from "@/Pages/Beranda/BerandaFAQ.jsx";

const Beranda = () => {
    return (
        <AppLayout>
            <Head>
                <title>Beranda - SociesMedia</title>
                <meta name="description" content="Temukan dan bagikan materi serta media pendidikan di SociesMedia. Dapatkan inspirasi dan dukungan untuk perjalanan belajar Anda." />
                <meta name="keywords" content="Materi pendidikan, Media belajar, Penelitian, SociesMedia" />
                <meta property="og:title" content="Beranda - SociesMedia" />
                <meta property="og:description" content="Temukan dan bagikan materi serta media pendidikan di SociesMedia. Dapatkan inspirasi dan dukungan untuk perjalanan belajar Anda." />
                <meta property="og:image" content="URL_TO_IMAGE" />
                <meta property="og:url" content="https://www.sociesmedia.id/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Beranda - SociesMedia" />
                <meta name="twitter:description" content="Temukan dan bagikan materi serta media pendidikan di SociesMedia. Dapatkan inspirasi dan dukungan untuk perjalanan belajar Anda." />
                <meta name="twitter:image" content="URL_TO_IMAGE" />
            </Head>
            <div className="flex flex-col w-full gap-8 relative overflow-x-hidden">
                {/* Menambahkan animasi pada setiap komponen */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <BerandaHero />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <BerandaKategori />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                >
                    <BerandaPilihan />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                >
                    <BerandaArtikel />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                >
                    <BerandaFAQ />
                </motion.div>
            </div>
        </AppLayout>
    );
};

export default Beranda;