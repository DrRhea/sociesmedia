import React, { useState } from 'react';
import ModalOverlay from './ModalOverlay';

const RegisterModal = ({ onClose, onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('murid');  // Default role
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validasi bahwa password dan konfirmasi password cocok
        if (password !== confirmPassword) {
            setError('Password dan konfirmasi password tidak cocok');
            return;
        }

        // Validasi bahwa username tidak kosong
        if (username.trim() === '') {
            setError('Username tidak boleh kosong');
            return;
        }

        // Implementasi register di sini, misalnya:
        // axios.post('/register', { username, name, email, password, role })
        //     .then(response => {
        //         // Handle success
        //     })
        //     .catch(error => {
        //         setError(error.response.data.message || 'Terjadi kesalahan. Silakan coba lagi.');
        //     });
    };

    const handleGoogleRegister = () => {
        window.location.href = '/auth/google'; // Mengarahkan ke Google OAuth
    };

    return (
        <ModalOverlay onClose={onClose}>
            <h2 className="text-2xl font-semibold mb-6">Register</h2>
            {error && (
                <div className="mb-4 text-red-600 text-sm">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
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
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                    >
                        <option value="murid">Murid</option>
                        <option value="guru">Guru</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition"
                >
                    Register
                </button>
            </form>
            <button
                onClick={handleGoogleRegister}
                className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
                Register with Google
            </button>
            <p className="mt-4 text-center text-sm text-gray-500">
                Sudah punya akun?{' '}
                <button onClick={onLoginClick} className="text-primary-500 hover:underline">
                    Login di sini
                </button>
            </p>
        </ModalOverlay>
    );
};

export default RegisterModal;
