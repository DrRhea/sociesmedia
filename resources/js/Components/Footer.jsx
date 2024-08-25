import React from 'react';
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="max-w-screen-2xl w-full mx-auto lg:py-8 lg:px-16 py-6 px-4 text-azure-radiance-400 bg-azure-radiance-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand and Description */}
                <div className="flex flex-col">
                    <h3 className="font-semibold lg:text-3xl text-xl tracking-tighter">
                        <Link href={'/'}>
                            SociesMedia
                        </Link>
                    </h3>
                    <p className="mt-4">
                        SociesMedia adalah platform pembelajaran yang didedikasikan
                        untuk memperkaya pengetahuan dalam studi sosial.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h4 className="font-semibold text-lg lg:text-xl mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-azure-radiance-500">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-azure-radiance-500">Contact Us</Link></li>
                        <li><Link href="/careers" className="hover:text-azure-radiance-500">Careers</Link></li>
                        <li><Link href="/privacy" className="hover:text-azure-radiance-500">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h4 className="font-semibold text-lg lg:text-xl mb-4">Contact</h4>
                    <ul className="space-y-2">
                        <li>Email: <a href="mailto:info@sociesmedia.id" className="hover:text-azure-radiance-500">info@sociesmedia.id</a></li>
                        <li>Phone: <a href="tel:+6281234567890" className="hover:text-azure-radiance-500">+62 812 3456 7890</a></li>
                        <li>Address: <span className="hover:text-azure-radiance-500">Jl. Dr. Setiabudhi No. 229 Bandung 40154</span></li>
                    </ul>
                </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="mt-8">
                <h4 className="font-semibold text-lg lg:text-xl mb-4">Our Location</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5082365117464!2d107.59670409069367!3d-6.871448099179413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e69f6e9fdbe1%3A0x9f939b58ea4e299b!2sJl.%20Dr.%20Setiabudi%20No.229%2C%20Gegerkalong%2C%20Kec.%20Sukasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040154!5e0!3m2!1sid!2sid!4v1693490165298!5m2!1sid!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={'rounded-lg shadow-sm opacity-90'}>
                </iframe>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 border-t border-azure-radiance-300 pt-4">
                <h4 className="font-semibold text-lg lg:text-xl mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-azure-radiance-500">
                        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            {/* Icon Facebook */}
                            <path d="M12 0C5.372 0 0 5.372 0 12C0 17.991 4.388 22.95 10.125 23.85V15.468H7.077V12H10.125V9.356C10.125 6.348 11.917 4.875 14.633 4.875C15.911 4.875 17.25 5.102 17.25 5.102V8.06H15.771C14.313 8.06 13.875 8.956 13.875 9.889V12H17.11L16.583 15.468H13.875V23.85C19.612 22.95 24 17.991 24 12C24 5.372 18.628 0 12 0Z"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-azure-radiance-500">
                        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            {/* Icon Twitter */}
                            <path d="M24 4.557C23.117 4.948 22.168 5.213 21.172 5.332C22.189 4.737 22.97 3.779 23.337 2.616C22.386 3.172 21.332 3.583 20.21 3.798C19.313 2.847 18.032 2.25 16.616 2.25C13.437 2.25 11.136 5.124 12.007 8.21C7.728 7.97 4.1 5.905 1.67 2.898C0.381 5.146 1.02 8.035 3.194 9.522C2.388 9.499 1.626 9.273 0.964 8.897C0.947 11.213 2.638 13.276 5.128 13.722C4.36 13.923 3.535 13.985 2.729 13.905C3.41 15.936 5.355 17.38 7.636 17.419C5.589 18.964 2.924 19.593 0 19.156C2.292 20.577 5.025 21.375 7.857 21.375C16.65 21.375 21.557 13.875 21.557 7.9C21.557 7.657 21.552 7.415 21.542 7.174C22.505 6.555 23.34 5.73 24 4.557Z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-azure-radiance-500">
                        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            {/* Icon Instagram */}
                            <path d="M12 2.163C6.508 2.163 2.163 6.508 2.163 12C2.163 17.492 6.508 21.837 12 21.837C17.492 21.837 21.837 17.492 21.837 12C21.837 6.508 17.492 2.163 12 2.163ZM12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0ZM18.635 6.346C18.002 6.346 17.404 6.573 16.969 7.009C16.534 7.444 16.308 8.042 16.308 8.675C16.308 9.307 16.534 9.906 16.969 10.341C17.404 10.776 18.002 11.003 18.635 11.003C19.267 11.003 19.866 10.776 20.301 10.341C20.736 9.906 20.962 9.307 20.962 8.675C20.962 8.042 20.736 7.444 20.301 7.009C19.866 6.573 19.267 6.346 18.635 6.346ZM12 5.838C8.29 5.838 5.249 8.879 5.249 12.589C5.249 16.298 8.29 19.34 12 19.34C15.709 19.34 18.751 16.298 18.751 12.589C18.751 8.879 15.709 5.838 12 5.838ZM12 17.153C9.307 17.153 7.131 14.978 7.131 12.284C7.131 9.591 9.307 7.415 12 7.415C14.692 7.415 16.868 9.591 16.868 12.284C16.868 14.978 14.692 17.153 12 17.153Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
