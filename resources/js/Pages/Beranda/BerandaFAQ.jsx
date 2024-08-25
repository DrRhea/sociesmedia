import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Bagaimana peran sosial dalam masyarakat?",
        answer: (
            <>
                <p className="text-gray-700">Cara memahami peran sosial dalam masyarakat:</p>
                <ul className="list-decimal list-inside mt-2 text-gray-700">
                    <li>Pahami nilai-nilai, norma, dan aturan yang berlaku di masyarakat.</li>
                    <li>Pelajari sejarah perkembangan peran sosial dalam berbagai budaya.</li>
                    <li>Evaluasi peran Anda dalam keluarga, sekolah, dan komunitas.</li>
                    <li>Ikuti diskusi dan debat tentang isu-isu sosial terkini.</li>
                    <li>Konsultasikan dengan ahli seperti guru atau mentor sosial.</li>
                </ul>
            </>
        )
    },
    {
        question: "Bagaimana fitur diskusi di SociesMedia?",
        answer: "Fitur diskusi di SociesMedia memungkinkan pengguna untuk berbagi pendapat, berdiskusi tentang topik-topik yang sedang tren, dan berinteraksi dengan komunitas yang lebih luas."
    },
    {
        question: "Kapan SociesMedia diresmikan?",
        answer: "SociesMedia diresmikan pada tahun 2021 sebagai platform yang berfokus pada pendidikan dan diskusi sosial."
    }
];

const BerandaFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-screen-md mx-auto px-4 py-4 lg:py-12">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">FAQ</h2>
            <p className="text-center text-gray-500 mb-12">
                Temukan jawaban dari pertanyaan-pertanyaan yang paling sering ditanyakan oleh pengguna SociesMedia di sini.
            </p>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left text-lg text-blue-600 bg-blue-100 py-3 px-4 rounded-lg flex justify-between items-center"
                    >
                        {faq.question}
                        <motion.span
                            className="transform transition-transform duration-200"
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        >
                            ▼
                        </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                        {activeIndex === index && (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden mt-2 p-4 bg-gray-100 rounded-lg text-gray-700"
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default BerandaFAQ;
