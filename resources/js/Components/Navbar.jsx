import React, { useState, useEffect } from 'react';
import { Link, usePage } from "@inertiajs/react";
import { motion } from 'framer-motion';
import CommandPalette from './CommandPalette';
import LoginModal from './Auth/LoginModal.jsx';
import RegisterModal from './Auth/RegisterModal';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [openPalette, setOpenPalette] = useState(false);

    const { url } = usePage(); // Mendapatkan URL saat ini

    const menuItems = [
        { name: 'Beranda', href: '/' },
        { name: 'Media', href: '/media' },
        { name: 'Materi', href: '/materi' },
        { name: 'Artikel', href: '/artikel' },
        { name: 'Peneliti', href: '/peneliti' },
    ];

    const menuToggle = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                setOpenPalette(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed bg-primary-50/25 backdrop-blur-md py-2 z-[10000] right-0 left-0 w-full text-lg transition-all duration-300 ease-in-out top-0 `}>
                <div className={'container mx-auto grid grid-cols-4 lg:grid-cols-12 items-center'}>
                    <div className={`col-span-2 font-medium py-2 px-4 transition-all duration-300 justify-self-start`}>
                        <span
                            className={'bg-gradient-to-r from-primary-500 to-primary-300 text-transparent bg-clip-text text-2xl font-bold tracking-[-1px]'}>
                            SociesMedia
                        </span>
                    </div>

                    <ul className={'hidden lg:flex lg:col-span-8 xl:justify-self-center justify-self-start lg:gap-2 xl:gap-8 self-center'}>
                        {menuItems.map(item => (
                            <li key={item.href}>
                                <Link
                                    className={` ${url === item.href ? 'text-[#1C7AFF] font-medium' : ''}`}
                                    href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div
                        className={`col-span-2 font-medium py-2 px-4 transition-all duration-300 text-right justify-self-end flex items-center lg:hidden`}>
                        {!openMenu
                            ?
                            <button onClick={menuToggle}>
                                <svg width="45" height="14" viewBox="0 0 45 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.92871 1.64282H43.0001" stroke="#529AFF" stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M1.92871 12.3571H43.0001" stroke="#529AFF" stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </button>
                            :
                            <button className={'mr-4'} onClick={menuToggle}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2L2 20" stroke="#529AFF" stroke-width="3" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M2 2L20 20" stroke="#529AFF" stroke-width="3" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </button>
                        }
                    </div>

                    {/* Animasi Framer Motion untuk menu mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: openMenu ? 1 : 0, y: openMenu ? 0 : -20 }}
                        transition={{ duration: 0.3 }}
                        className={`lg:hidden absolute top-16 right-0 left-0 bg-primary-50/25 backdrop-blur-md py-2 z-[10000] shadow-sm transition-all ease-in-out ${openMenu ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col items-start p-4 gap-4">
                            {menuItems.map(item => (
                                <li key={item.href}>
                                    <Link
                                        className={`block ${url === item.href ? 'text-[#1C7AFF] font-medium' : ''}`}
                                        href={item.href}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className={'hidden lg:flex justify-end gap-8'}>
                        {/* Tombol Search */}
                        <button onClick={() => setOpenPalette(true)}>
                            <svg className={'size-5'} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.5 13.5L10 10" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button onClick={() => setShowLogin(true)}>
                            Masuk
                        </button>
                    </div>

                </div>
            </nav>

            {/* Render Command Palette */}
            <CommandPalette open={openPalette} setOpen={setOpenPalette} />

            {/* Render Modals */}
            {showLogin && (
                <LoginModal
                    onClose={() => setShowLogin(false)}
                    onRegisterClick={() => {
                        setShowLogin(false);
                        setShowRegister(true);
                    }}
                />
            )}
            {showRegister && (
                <RegisterModal
                    onClose={() => setShowRegister(false)}
                    onLoginClick={() => {
                        setShowRegister(false);
                        setShowLogin(true);
                    }}
                />
            )}
        </>
    );
};
