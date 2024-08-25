import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
    return (
        <div className="max-w-screen-md mx-auto px-4 py-4 lg:py-12">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">FAQ</h2>
            <p className="text-center text-gray-500 mb-12">
                Temukan jawaban dari pertanyaan-pertanyaan yang paling sering ditanyakan oleh pengguna SociesMedia di sini.
            </p>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default BerandaFAQ;
