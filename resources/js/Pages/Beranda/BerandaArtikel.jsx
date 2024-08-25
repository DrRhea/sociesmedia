import React from 'react';

const articles = [
    {
        title: "Memahami Demokrasi: Suara Rakyat dalam Sistem Politik",
        views: "24M views",
        image: "https://source.unsplash.com/random/300x200?democracy,politics",
        link: "/artikel/memahami-demokrasi"
    },
    {
        title: "Krisis Ekonomi: Mengapa Perekonomian Bisa Terpuruk?",
        views: "21M views",
        image: "https://source.unsplash.com/random/300x200?economy,crisis",
        link: "/artikel/krisis-ekonomi"
    },
    {
        title: "Korupsi Berjamaah: Bagaimana Kita Melawannya?",
        views: "18M views",
        image: "https://source.unsplash.com/random/300x200?corruption",
        link: "/artikel/korupsi-berjamaah"
    },
    {
        title: "Pemilu dan Harapan Baru: Apa yang Bisa Kita Lakukan?",
        views: "20M views",
        image: "https://source.unsplash.com/random/300x200?election,hope",
        link: "/artikel/pemilu-harapan-baru"
    }
];

const BerandaArtikel = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-4 lg:py-12">
            <h2 className="text-3xl font-bold text-azure-radiance-600 mb-8 text-center">
                Artikel Terbaru
            </h2>
            <p className="text-azure-radiance-400 text-center mb-12 max-w-xl mx-auto">
                Dapatkan informasi terkini dari dunia sosial dengan membaca artikel terbaru, selalu ada sesuatu yang baru untuk dipelajari setiap harinya.
            </p>
            <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="relative min-w-[200px] md:min-w-[250px] lg:min-w-[300px] bg-white rounded-lg overflow-hidden shadow-lg backdrop-blur-md"
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="text-lg font-semibold leading-tight mb-2">
                                {article.title}
                            </h3>
                            <p className="text-sm flex items-center">
                                <svg
                                    className="w-4 h-4 mr-1 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 6a9 9 0 109 9 9.011 9.011 0 00-9-9zm4.5 9.75a4.5 4.5 0 01-9 0 1.5 1.5 0 013 0 1.5 1.5 0 003 0 4.5 4.5 0 013-3.75 1.5 1.5 0 010 3z"></path>
                                </svg>
                                {article.views}
                            </p>
                        </div>
                        <a
                            href={article.link}
                            className="absolute inset-0 z-10"
                            aria-label={`Read more about ${article.title}`}
                        ></a>
                        <div className="absolute top-2 right-2">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 13.59l-1.42 1.42L12 13.42l-1.59 1.59L9 15.59 10.59 14 9 12.41l1.41-1.41L12 10.59l1.59-1.59L15 9.41 13.41 11 15 12.59z"></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BerandaArtikel;
