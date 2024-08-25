import React from 'react';

const ModalOverlay = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
            <div className="relative rounded-lg p-6 max-w-md w-full">
                <button
                    onClick={onClose}
                    className="absolute top-10 right-12 text-azure-radiance-400 hover:text-azure-radiance-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalOverlay;
