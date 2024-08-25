import React, { useState, useEffect } from 'react';
import { Link, usePage } from "@inertiajs/react";
import { motion } from 'framer-motion';
import CommandPalette from './CommandPalette';
import LoginModal from './Auth/LoginModal.jsx';
import RegisterModal from './Auth/RegisterModal';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/Components/ui/button.jsx";
import axios from 'axios';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [openPalette, setOpenPalette] = useState(false);

    const { url, props } = usePage(); // Mendapatkan URL saat ini dan props
    const auth = props.auth || {}; // Jika auth tidak ada, buat object kosong sebagai fallback

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

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            window.location.href = '/'; // Arahkan ke halaman yang diinginkan setelah logout
        } catch (error) {
            console.error('Logout gagal:', error);
        }
    };

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
                className={`fixed bg-azure-radiance-50/25 backdrop-blur-md py-2 z-[10000] right-0 left-0 w-full text-lg transition-all duration-300 ease-in-out top-0 ${scrolled ? 'shadow-sm' : ''}`}>
                <div className={'container mx-auto grid grid-cols-4 lg:grid-cols-12 items-center'}>
                    <div className={`col-span-2 font-medium py-2 lg:px-4 transition-all duration-300 justify-self-start`}>
                        <Link href="/" className="flex items-center group">
                            <span
                                className={'bg-gradient-to-r from-azure-radiance-500 to-azure-radiance-300 text-transparent bg-clip-text text-2xl font-bold tracking-[-1px] hover:text-azure-radiance-500'}>
                                SociesMedia
                            </span>
                        </Link>
                    </div>

                    <ul className={'hidden lg:flex lg:col-span-8 xl:justify-self-center justify-self-start lg:gap-2 xl:gap-8 self-center'}>
                        {menuItems.map(item => (
                            <li key={item.href}>
                                <Link
                                    className={` ${url === item.href ? 'text-[#1C7AFF] font-medium' : 'hover:text-[#1C7AFF] transition-colors duration-200'}`}
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
                            <button className={''} onClick={menuToggle}>
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
                        className={`lg:hidden absolute top-16 right-0 left-0 bg-azure-radiance-50/25 backdrop-blur-md py-2 z-[10000] shadow-sm transition-all ease-in-out ${openMenu ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col items-start p-4 gap-4">
                            {menuItems.map(item => (
                                <li key={item.href}>
                                    <Link
                                        className={`block ${url === item.href ? 'text-[#1C7AFF] font-medium' : 'hover:text-[#1C7AFF] transition-colors duration-200'}`}
                                        href={item.href}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className={'hidden lg:flex justify-end gap-8'}>
                        {/* Tombol Search */}
                        <button onClick={() => setOpenPalette(true)} className="hover:text-[#1C7AFF] transition-colors duration-200">
                            <svg className={'size-5'} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5Z"
                                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.5 13.5L10 10" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="overflow-hidden rounded-full bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-0 ring-0 focus:ring-0"
                                    >
                                        <svg className={'size-5'} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.36 13.9641C12.9401 12.6549 12.1154 11.5129 11.0048 10.7027C9.89409 9.89251 8.5548 9.45593 7.18 9.45593C5.80519 9.45593 4.4659 9.89251 3.35521 10.7027C2.24453 11.5129 1.41982 12.6549 1 13.9641H13.36Z" stroke="#529AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.17994 9.46411C9.51724 9.46411 11.412 7.56935 11.412 5.23205C11.412 2.89475 9.51724 1 7.17994 1C4.84264 1 2.94788 2.89475 2.94788 5.23205C2.94788 7.56935 4.84264 9.46411 7.17994 9.46411Z" stroke="#529AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>{auth.user && <span>{auth.user.name}</span>}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <button onClick={() => setShowLogin(true)} className="hover:text-[#1C7AFF] transition-colors duration-200">
                                Masuk
                            </button>
                        )}
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

export default Navbar;
