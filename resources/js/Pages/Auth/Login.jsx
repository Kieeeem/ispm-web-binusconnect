import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout'; // Sesuaikan jika Anda punya layout utama

// Komponen-komponen UI bisa Anda sesuaikan
const Checkbox = ({ name, value, handleChange }) => (
    <input
        type="checkbox"
        name={name}
        value={value}
        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
        onChange={(e) => handleChange(e)}
    />
);

const InputLabel = ({ forInput, value, className, children }) => (
    <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
        {value ? value : children}
    </label>
);

const TextInput = ({ type = 'text', name, id, value, className, autoComplete, isFocused, handleChange }) => {
    const input = React.useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` + className}
            ref={input}
            autoComplete={autoComplete}
            onChange={(e) => handleChange(e)}
        />
    );
};

const InputError = ({ message, className = '' }) => (
    message ? <p className={'text-sm text-red-600 ' + className}>{message}</p> : null
);

const PrimaryButton = ({ className = '', disabled, children, ...props }) => (
    <button
        {...props}
        className={
            `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                disabled && 'opacity-25'
            } ` + className
        }
        disabled={disabled}
    >
        {children}
    </button>
);


// --- KOMPONEN UTAMA LOGIN ---

export default function Login({ status, canResetPassword }) {
    // Gunakan useForm untuk menangani state dan submission
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        // Reset password field saat komponen di-unmount
        return () => {
            reset('password');
        };
    }, []);

    // Fungsi submit yang akan mengirim data ke backend
    const submit = (e) => {
        e.preventDefault();
        // 'post' dari useForm akan otomatis mengikuti redirect dari backend
        post(route('login'));
    };

    return (
        // Anda bisa membungkusnya dengan MainLayout jika ada
        // <MainLayout> 
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <Head title="Log in" />

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                handleChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox name="remember" value={data.remember} handleChange={(e) => setData('remember', e.target.checked)} />
                                <span className="ms-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        // </MainLayout>
    );
}
