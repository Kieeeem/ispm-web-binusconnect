import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

// --- ICONS ---
const BackArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> );
const UploadIcon = ({ className = '' }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-gray-400 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg> );

// --- UI COMPONENTS (YANG HILANG SUDAH DITAMBAHKAN) ---

const InputLabel = ({ children }) => (
    <label className="block text-sm font-medium text-gray-700 mb-1">{children}</label>
);

const TextInput = ({ name, value, onChange, placeholder, type = 'text' }) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
);

const Textarea = ({ name, value, onChange, placeholder, rows = 4 }) => (
    <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
);

const FileInput = ({ name, setData, preview, setPreview }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData(name, file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                {preview ? (
                    <img src={preview} alt="Preview" className="mx-auto h-24 w-auto object-contain" />
                ) : (
                    <UploadIcon className="mx-auto" />
                )}
                <div className="flex text-sm text-gray-600 justify-center">
                    <label htmlFor={name} className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                        <span>Click to upload</span>
                        <input id={name} name={name} type="file" className="sr-only" onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
export default function AddProductPage() {
    const { data, setData, post, processing, errors } = useForm({
        fotoMarketplace: null, // Kembali menjadi null (bukan array)
        judulMarketplace: '',
        deskripsiMarketplace: '',
        lokasiMarketplace: '',
        jadwalStartMarketplace: '',
        jadwalEndMarketplace: '',
    });

    const [posterPreview, setPosterPreview] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        post(route('marketplace.store'));
    };

    return (
        <>
            <Head title="Add Product" />
            <div className="bg-gray-100 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-6">
                        <Link href={route('marketplace')} className="inline-flex items-center p-2 rounded-full bg-white shadow hover:bg-gray-200 transition">
                            <BackArrowIcon />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800 ml-4">Product Form</h1>
                    </div>

                    <form onSubmit={submit} className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <InputLabel>Foto Marketplace*</InputLabel>
                            <FileInput name="fotoMarketplace" setData={setData} preview={posterPreview} setPreview={setPosterPreview} />
                            {errors.fotoMarketplace && <p className="text-red-500 text-sm mt-1">{errors.fotoMarketplace}</p>}
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow space-y-4">
                            <h2 className="text-lg font-semibold text-gray-900">Product Information</h2>
                            <div>
                                <InputLabel>Judul Marketplace*</InputLabel>
                                <TextInput name="judulMarketplace" value={data.judulMarketplace} onChange={e => setData('judulMarketplace', e.target.value)} placeholder="Input judul di sini yaa!!" />
                                {errors.judulMarketplace && <p className="text-red-500 text-sm mt-1">{errors.judulMarketplace}</p>}
                            </div>
                            
                            <div>
                                <InputLabel>Deskripsi Marketplace*</InputLabel>
                                <Textarea name="deskripsiMarketplace" value={data.deskripsiMarketplace} onChange={e => setData('deskripsiMarketplace', e.target.value)} placeholder="Input deskripsi di sini yaa!!" />
                                {errors.deskripsiMarketplace && <p className="text-red-500 text-sm mt-1">{errors.deskripsiMarketplace}</p>}
                            </div>
                            <div>
                                <InputLabel>Lokasi Marketplace*</InputLabel>
                                <TextInput name="lokasiMarketplace" value={data.lokasiMarketplace} onChange={e => setData('lokasiMarketplace', e.target.value)} placeholder="Input lokasi di sini" />
                                {errors.lokasiMarketplace && <p className="text-red-500 text-sm mt-1">{errors.lokasiMarketplace}</p>}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <InputLabel>Jadwal Mulai*</InputLabel>
                                    <TextInput name="jadwalStartMarketplace" type="date" value={data.jadwalStartMarketplace} onChange={e => setData('jadwalStartMarketplace', e.target.value)} />
                                    {errors.jadwalStartMarketplace && <p className="text-red-500 text-sm mt-1">{errors.jadwalStartMarketplace}</p>}
                                </div>
                                <div>
                                    <InputLabel>Jadwal Selesai*</InputLabel>
                                    <TextInput name="jadwalEndMarketplace" type="date" value={data.jadwalEndMarketplace} onChange={e => setData('jadwalEndMarketplace', e.target.value)} />
                                    {errors.jadwalEndMarketplace && <p className="text-red-500 text-sm mt-1">{errors.jadwalEndMarketplace}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="pb-8">
                            <button type="submit" disabled={processing} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50">
                                {processing ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

AddProductPage.layout = page => <MainLayout children={page} />;
