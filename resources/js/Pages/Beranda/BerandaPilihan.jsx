import React from 'react';
import videoThumbnail from './../../../img/pages/beranda/pilihan/video_pilihan_1.png';
import video from './../../../img/pages/beranda/hero/bandicam 2024-08-25 14-46-37-818.mp4';
import { motion } from 'framer-motion';

const BerandaPilihan = () => {

    return (
        <section className="flex flex-col items-center px-4 lg:px-16 py-4 lg:py-12">
            <h2 className="mt-4 text-2xl text-primary-500 font-bold text-center">
                Video Pilihan
            </h2>
            <p className="text-sm lg:text-base text-primary-400 mt-2 text-center max-w-xl mx-auto">
                Nikmati pembelajaran yang menyenangkan melalui video-video terpopuler di SociesMedia.
            </p>

            <div className="mt-8 w-full flex justify-center">
                <div className="relative w-full max-w-4xl">
                    {/* Custom Video Player */}
                    <video
                        className="w-full h-auto rounded-lg shadow-sm"
                        controls
                        poster={videoThumbnail} // Gambar yang akan muncul sebelum video diputar
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default BerandaPilihan;
