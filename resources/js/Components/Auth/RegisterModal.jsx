import React, { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from 'axios';

const RegisterModal = ({ onClose, onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Validasi bahwa password dan konfirmasi password cocok
        if (password !== confirmPassword) {
            setError('Password dan konfirmasi password tidak cocok');
            setLoading(false);
            return;
        }

        // Validasi bahwa username tidak kosong
        if (username.trim() === '') {
            setError('Username tidak boleh kosong');
            setLoading(false);
            return;
        }

        try {
            // Kirim data register ke server
            await axios.post('/register', {
                username,
                name,
                email,
                password,
            });
            // Setelah sukses, bisa redirect atau lakukan aksi lain
            setLoading(false);
            window.location.href = '/';
        } catch (error) {
            setError(error.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi.');
            setLoading(false);
        }
    };

    const handleGoogleRegister = () => {
        window.location.href = '/auth/google'; // Mengarahkan ke Google OAuth
    };

    return (
        <ModalOverlay onClose={onClose}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Daftar</CardTitle>
                    <CardDescription>
                        Masukkan informasi Anda untuk membuat akun
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <div className="mb-4 text-red-600 text-sm">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nama</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-azure-radiance-500 hover:bg-azure-radiance-400"
                                disabled={loading}
                            >
                                {loading ? 'Memproses...' : 'Buat akun'}
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={handleGoogleRegister}
                                disabled={loading}
                            >
                                Daftar dengan Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Sudah punya akun?{' '}
                            <button onClick={onLoginClick} className="underline">
                                Masuk di sini
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </ModalOverlay>
    );
};

export default RegisterModal;