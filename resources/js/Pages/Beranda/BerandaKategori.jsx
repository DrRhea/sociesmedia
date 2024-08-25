import React from 'react';
import Slider from "react-slick";

import kategori_materi from './../../../img/pages/beranda/kategori/kategori_materi.svg';
import kategori_media from './../../../img/pages/beranda/kategori/kategori_media.svg';
import kategori_forum from './../../../img/pages/beranda/kategori/kategori_forum.svg';
import kategori_video from './../../../img/pages/beranda/kategori/kategori_video.svg';
import kategori_mentoring from './../../../img/pages/beranda/kategori/kategori_mentoring.svg';
import kategori_ebook from './../../../img/pages/beranda/kategori/kategori_ebook.svg';

const categories = [
    {
        image: kategori_materi,
        alt: "Materi Pembelajaran Terstruktur",
        description: "Materi Pembelajaran Terstruktur"
    },
    {
        image: kategori_media,
        alt: "Media Edukatif Interaktif",
        description: "Media Edukatif Interaktif"
    },
    {
        image: kategori_forum,
        alt: "Forum Diskusi Kolaboratif",
        description: "Forum Diskusi Kolaboratif"
    },
    {
        image: kategori_ebook,
        alt: "Ebook dan Materi Pendukung",
        description: "Ebook dan Materi Pendukung"
    },
    {
        image: kategori_video,
        alt: "Video Pembelajaran",
        description: "Video Pembelajaran"
    },
    {
        image: kategori_mentoring,
        alt: "Sesi Mentoring",
        description: "Sesi Mentoring"
    }
];

const BerandaKategori = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 2048,
                settings: {
                    slidesToShow: 6,
                }
            }
        ]
    };

    return (
        <section className="flex flex-col items-center mt-4 pt-12 pb-4 lg:pb-8">
            <h2 className="mt-4 text-2xl text-primary-500 font-bold text-center">
                Fitur Utama
            </h2>
            <p className="text-sm lg:text-base text-primary-400 mt-2 text-center max-w-xl mx-auto">
                Jelajahi berbagai kategori materi yang tersedia di SociesMedia. Kami menyediakan beragam pilihan untuk mendukung pembelajaran Anda secara efektif dan menyenangkan.
            </p>
            <Slider {...settings} className="mt-8 w-full text-center">
                {categories.map((category, index) => (
                    <div key={index} className="px-4">
                        <div className="flex flex-col items-center justify-center gap-4 p-4 transition transform hover:-translate-y-2 rounded-lg">
                            <div className="p-8 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-300/20 w-fit flex items-center justify-center">
                                <img src={category.image} alt={category.alt} className="size-8"/>
                            </div>
                            <span className="text-primary-600 font-medium">
                                {category.description}
                            </span>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default BerandaKategori;
