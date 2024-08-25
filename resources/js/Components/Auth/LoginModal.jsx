import React, { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';

const LoginModal = ({ onClose, onRegisterClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('/login', {
                email,
                password,
            });

            if (response.status === 200) {
                window.location.href = '/'; // Redirect ke halaman utama atau halaman tujuan
            }
        } catch (error) {
            setError('Email atau password salah.');
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = '/auth/google';
    };

    return (
        <ModalOverlay onClose={onClose}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Masuk</CardTitle>
                    <CardDescription>
                        Masukkan emailmu di bawah untuk masuk ke akun kamu
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
                    <form className="grid gap-4" onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="ml-auto inline-block text-sm underline">
                                    Lupa kata sandi?
                                </a>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Memproses...' : 'Masuk'}
                        </Button>
                        <Button variant="outline" onClick={handleGoogleLogin} className="w-full">
                            Masuk dengan Google
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Belum punya akun?{" "}
                        <button onClick={onRegisterClick} className="underline">
                            Daftar di sini
                        </button>
                    </div>
                </CardContent>
            </Card>
        </ModalOverlay>
    );
};

export default LoginModal;
