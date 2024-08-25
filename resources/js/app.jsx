import './bootstrap';
import '../css/app.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

        const page = pages[`./Pages/${name}.jsx`];

        if (!page || !page.default) {
            throw new Error(`Halaman ${name} tidak memiliki ekspor default.`);
        }

        return page.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});


