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

const RegisterModal = ({ onClose, onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('murid');  // Peran default
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

        // Implementasi register di sini
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
                            <div className="grid gap-2">
                                <Label htmlFor="role">Peran</Label>
                                <select
                                    id="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-azure-radiance-500"
                                    required
                                >
                                    <option value="murid">Murid</option>
                                    <option value="guru">Guru</option>
                                </select>
                            </div>
                            <Button type="submit" className="w-full bg-azure-radiance-500 hover:bg-azure-radiance-400">
                                Buat akun
                            </Button>
                            <Button variant="outline" className="w-full" onClick={handleGoogleRegister}>
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
