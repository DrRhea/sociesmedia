import React, { useState } from 'react';
import hero_globe from './../../../img/pages/beranda/hero/hero_globe.png';

const suggestionsData = [
    "Social Studies",
    "History",
    "Geography",
    "Political Science",
    "Economics",
    "Sociology",
    "Anthropology",
];

const BerandaHero = () => {
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
        <section className="relative flex flex-col items-center gap-8 py-12 px-4 mx-4 rounded-xl">
            <div className={'z-50'}>
                <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-white text-center tracking-widest hero-h1__stroke p-3" >
                    Social Studies Multimedia
                </h1>
                <p className={'text-sm lg:text-base text-primary-400 mt-2 text-center max-w-xl mx-auto'}>
                    Temukan video, materi, dan diskusi seru yang membantu belajar IPS dengan lebih mudah.
                </p>
            </div>

            <div className={'w-full z-10'}>
                <form onSubmit={handleSubmit} className={'relative flex gap-8 bg-white px-4 pt-2.5 pb-3 md:py-3.5 md:px-6 lg:py-4 lg:px-8 rounded-full justify-between items-center backdrop-blur-sm bg-primary-50/20 border-2 border-primary-500/20 shadow-sm w-full max-w-screen-md mx-auto'}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        className={'outline-none border-none font-medium tracking-wide focus:outline-none text-xs lg:text-base text-primary-500 w-full placeholder-primary-900/60 bg-transparent'}
                        placeholder={'Cari video, podcast, atau poster...'}
                    />
                    <button type="submit">
                        <svg className={'size-4 lg:size-5 stroke-primary-500 hover:stroke-primary-600 duration-150'}
                             viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12Z"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 14L10.5 10.5" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </button>

                    {suggestions.length > 0 && (
                        <ul className="absolute top-full left-0 right-0 bg-white mt-2 p-2 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
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

                <div className={'flex justify-center select-none'}>
                    <div className={'absolute -bottom-[90px] size-80 -z-[4] bg-gradient-to-b from-transparent to-primary-50 from-0% to-80%'}/>
                    <img src={hero_globe} alt="" className={'absolute -bottom-[150px] size-80 -z-10 opacity-70'}/>
                </div>
            </div>
        </section>
    );
};

export default BerandaHero;
