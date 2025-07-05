import React, { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

// Komponen Halaman Utama (Wrapper)
export default function Login({ status, canResetPassword }) {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = (e) => {
        e.preventDefault();
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-sans p-4">
            <Head title={isLogin ? "Log in" : "Register"} />
            
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg relative">
                <Link 
                    href={route('landing')}
                    className="absolute top-4 left-4 text-indigo-400 hover:text-indigo-300 transition-colors"
                    aria-label="Back to Home"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>

                {isLogin ? <LoginForm status={status} canResetPassword={canResetPassword} /> : <RegistrationForm />}

                <p className="text-center text-sm text-gray-400">
                    {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}
                    <a
                        href="#"
                        onClick={toggleForm}
                        className="font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none ml-2"
                    >
                        {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
                    </a>
                </p>
            </div>
        </div>
    );
}


// --- Komponen Form Login (Sudah Dimodifikasi) ---
function LoginForm({ status, canResetPassword }) {
    // State untuk menampilkan pesan sukses
    const [loginMessage, setLoginMessage] = useState('');

    // Menggunakan useForm untuk menangani state, validasi, dan submit
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    // Reset password saat komponen tidak ditampilkan
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    // Fungsi submit yang baru
    const submit = (e) => {
        e.preventDefault();
        setLoginMessage(''); // Hapus pesan lama setiap kali submit
        
        // Kirim data ke backend dengan callback onSuccess
        post(route('login'), {
            onSuccess: () => {
                setLoginMessage('Login Berhasil! Selamat datang.');
                reset('password'); // Kosongkan password setelah sukses
            },
        });
    };

    return (
         <div>
            <h2 className="text-3xl font-extrabold text-center text-white">Sign in</h2>
            {status && <div className="mb-4 font-medium text-sm text-green-500">{status}</div>}
            
            <form className="mt-8 space-y-6" onSubmit={submit}>
                <div>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={data.email}
                        autoComplete="username"
                        required 
                        onChange={(e) => setData('email', e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Alamat Email" 
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        value={data.password}
                        autoComplete="current-password"
                        required 
                        onChange={(e) => setData('password', e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" 
                    />
                    {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember" name="remember" type="checkbox" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-800"/>
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">Remember me</label>
                    </div>
                    {canResetPassword && (
                        <div className="text-sm">
                            <Link href={route('password.request')} className="font-medium text-indigo-400 hover:text-indigo-300">
                                Lupa password?
                            </Link>
                        </div>
                    )}
                </div>

                <button type="submit" disabled={processing} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
                    {processing ? 'Processing...' : 'Sign in'}
                </button>
            </form>

            {/* Blok untuk menampilkan pesan sukses */}
            {loginMessage && (
                <div className="mt-4 rounded-md bg-green-900 p-4 text-center">
                    <p className="font-medium text-green-300">{loginMessage}</p>
                </div>
            )}
         </div>
    );
}

// --- Komponen Form Registrasi (Juga sudah dimodifikasi agar konsisten) ---
function RegistrationForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // Untuk registrasi, kita biarkan default behavior Breeze (redirect ke dashboard)
        post(route('register'));
    };

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center text-white">Buat Akun Baru</h2>
            <form className="mt-8 space-y-6" onSubmit={submit}>
                <div>
                    <input id="name" name="name" type="text" value={data.name} required onChange={(e) => setData('name', e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Nama" />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                    <input id="email-address-reg" name="email" type="email" value={data.email} required onChange={(e) => setData('email', e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Alamat Email" />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                    <input id="password-reg" name="password" type="password" value={data.password} required onChange={(e) => setData('password', e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" />
                    {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
                </div>
                <div>
                    <input id="password-confirmation" name="password_confirmation" type="password" value={data.password_confirmation} required onChange={(e) => setData('password_confirmation', e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Konfirmasi Password" />
                    {errors.password_confirmation && <p className="mt-1 text-xs text-red-400">{errors.password_confirmation}</p>}
                </div>
                <button type="submit" disabled={processing} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
                    {processing ? 'Processing...' : 'Buat Akun'}
                </button>
            </form>
        </div>
    );
}