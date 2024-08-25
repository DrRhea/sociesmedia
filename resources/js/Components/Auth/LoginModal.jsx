import React, { useState } from 'react';
import ModalOverlay from './ModalOverlay';

const LoginModal = ({ onClose, onRegisterClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementasi login di sini
    };

    const handleGoogleLogin = () => {
        window.location.href = '/auth/google';
    };

    return (
        <ModalOverlay onClose={onClose}>
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition"
                >
                    Login
                </button>
            </form>
            <button
                onClick={handleGoogleLogin}
                className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
                Login with Google
            </button>
            <p className="mt-4 text-center text-sm text-gray-500">
                Belum punya akun?{' '}
                <button onClick={onRegisterClick} className="text-primary-500 hover:underline">
                    Daftar di sini
                </button>
            </p>
        </ModalOverlay>
    );
};

export default LoginModal;
