import React, { useState } from 'react';
import { motion } from 'framer-motion';
import media1 from './../../../img/pages/beranda/hero/hero_globe.png';

const suggestionsData = [
    "Social Studies",
    "History",
    "Geography",
    "Political Science",
    "Economics",
    "Sociology",
    "Anthropology",
];

const MediaHero = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const filteredSuggestions = suggestionsData.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);  // Tutup suggestion setelah dipilih
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementasi pencarian berdasarkan query
        console.log('Search for:', query);
    };

    return (
        <section className="relative py-16 overflow-hidden overflow-x-hidden lg:py-24 rounded-lg">
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full">
                <svg
                    width="100%"
                    height="110%"
                    viewBox="0 0 430 724"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="object-cover w-full h-full"
                    preserveAspectRatio="none"
                >
                    <g clipPath="url(#clip0_287_2099)">
                        <rect width="1392" height="768" transform="translate(-676 -64)" fill="#E3EFFF"/>
                        <circle cx="-470.5" cy="415.5" r="714.5" fill="#9DC6FF" fillOpacity="0.15"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_287_2099)">
                            <rect width="1392" height="768" fill="white" transform="translate(-676 -64)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className="relative grid items-center grid-cols-1 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-2 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
                        Pusat Media Pembelajaran
                    </h1>
                    <p className="mt-4 text-lg text-blue-800">
                        Temukan berbagai media pembelajaran yang dirancang khusus untuk memahami konsep penting dalam pelajaran IPS.
                    </p>
                    <div className="flex justify-start mt-8">
                        <form onSubmit={handleSubmit} className="relative flex gap-4 bg-white px-4 pt-2.5 pb-3 md:py-3.5 md:px-6 lg:py-4 lg:px-8 rounded-full justify-between items-center backdrop-blur-sm bg-primary-50/20 border-2 border-primary-500/20 shadow-sm w-full max-w-md">
                            <input
                                type="text"
                                value={query}
                                onChange={handleInputChange}
                                className="w-full text-xs font-medium tracking-wide bg-transparent border-none outline-none focus:outline-none lg:text-base text-primary-500 placeholder-primary-900/60"
                                placeholder="Cari video, podcast, atau poster..."
                            />
                            <button type="submit">
                                <svg className="w-4 h-4 duration-150 lg:w-5 lg:h-5 stroke-primary-500 hover:stroke-primary-600"
                                     viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12Z"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14 14L10.5 10.5" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>

                            {suggestions.length > 0 && (
                                <ul className="absolute left-0 right-0 z-20 p-2 mt-2 overflow-y-auto bg-white rounded-lg shadow-lg top-full max-h-60">
                                    {suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSuggestionClick(suggestion)}
                                            className="p-2 cursor-pointer hover:bg-primary-500 hover:text-white"
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </form>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="flex justify-center md:justify-end"
                >
                    <img
                        src={media1}
                        alt="Materi Pembelajaran"
                        className="object-cover w-64 h-64 md:w-[30rem] md:h-[30rem]"
                        style={{
                            transform: 'translate(0%, -20%)',
                            objectFit: 'contain',
                            objectPosition: 'center',
                            marginTop: '-2rem', // Mengurangi jarak antara gambar dan search bar pada mode mobile
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default MediaHero;