import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

// --- ICONS ---
const BackArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> );
const UploadIcon = ({ className = '' }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-gray-400 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg> );

// --- UI COMPONENTS ---

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
export default function AddEventPage({ categories = [], organizations = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        fotoEvent: null,
        judulEvent: '',
        idOrganisasi: '', // Mengganti penyelenggaraEvent dengan idOrganisasi
        idEventOpportunityCategory: '',
        deskripsiEvent: '',
        lokasiEvent: '',
        jadwalStartEvent: '',
        jadwalEndEvent: '',
        linkRegistrasi: '',
    });

    const [posterPreview, setPosterPreview] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        post(route('events.store'));
    };

    return (
        <>
            <Head title="Add Event" />
            <div className="bg-gray-100 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-6">
                        <Link href="/events" className="inline-flex items-center p-2 rounded-full bg-white shadow hover:bg-gray-200 transition">
                            <BackArrowIcon />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800 ml-4">Event Form</h1>
                    </div>

                    <form onSubmit={submit} className="space-y-8">
                        {/* Poster Section */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <InputLabel>Poster*</InputLabel>
                            <FileInput name="fotoEvent" setData={setData} preview={posterPreview} setPreview={setPosterPreview} />
                            {errors.fotoEvent && <p className="text-red-500 text-sm mt-1">{errors.fotoEvent}</p>}
                        </div>

                        {/* Event Information Section */}
                        <div className="bg-white p-6 rounded-lg shadow space-y-4">
                            <h2 className="text-lg font-semibold text-gray-900">Event Information</h2>
                            <div>
                                <InputLabel>Judul Event*</InputLabel>
                                <TextInput name="judulEvent" value={data.judulEvent} onChange={e => setData('judulEvent', e.target.value)} placeholder="Input judul di sini yaa!!" />
                                {errors.judulEvent && <p className="text-red-500 text-sm mt-1">{errors.judulEvent}</p>}
                            </div>
                            <div>
                                <InputLabel>Penyelenggara Event*</InputLabel>
                                <select 
                                    name="idOrganisasi" 
                                    value={data.idOrganisasi} 
                                    onChange={e => setData('idOrganisasi', e.target.value)} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Pilih Penyelenggara</option>
                                    {organizations.map(org => (
                                        <option key={org.idOrganisasi} value={org.idOrganisasi}>
                                            {org.namaOrganisasi}
                                        </option>
                                    ))}
                                </select>
                                {errors.idOrganisasi && <p className="text-red-500 text-sm mt-1">{errors.idOrganisasi}</p>}
                            </div>
                            <div>
                                <InputLabel>Kategori Event*</InputLabel>
                                <select name="idEventOpportunityCategory" value={data.idEventOpportunityCategory} onChange={e => setData('idEventOpportunityCategory', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <option value="">Category</option>
                                    <option value="CAT001">Webinar</option>
                                    <option value="CAT002">Lomba</option>
                                    <option value="CAT003">Comserv</option>
                                    <option value="CAT004">Workshop</option>
                                </select>
                                {errors.idEventOpportunityCategory && <p className="text-red-500 text-sm mt-1">{errors.idEventOpportunityCategory}</p>}
                            </div>
                            <div>
                                <InputLabel>Deskripsi Event*</InputLabel>
                                <Textarea name="deskripsiEvent" value={data.deskripsiEvent} onChange={e => setData('deskripsiEvent', e.target.value)} placeholder="Input deskripsi di sini yaa!!" />
                                {errors.deskripsiEvent && <p className="text-red-500 text-sm mt-1">{errors.deskripsiEvent}</p>}
                            </div>
                            <div>
                                <InputLabel>Lokasi Event*</InputLabel>
                                <TextInput name="lokasiEvent" value={data.lokasiEvent} onChange={e => setData('lokasiEvent', e.target.value)} placeholder="Input lokasi di sini" />
                                {errors.lokasiEvent && <p className="text-red-500 text-sm mt-1">{errors.lokasiEvent}</p>}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <InputLabel>Start Date & Time*</InputLabel>
                                    <TextInput name="jadwalStartEvent" type="datetime-local" value={data.jadwalStartEvent} onChange={e => setData('jadwalStartEvent', e.target.value)} />
                                    {errors.jadwalStartEvent && <p className="text-red-500 text-sm mt-1">{errors.jadwalStartEvent}</p>}
                                </div>
                                <div>
                                    <InputLabel>End Date & Time*</InputLabel>
                                    <TextInput name="jadwalEndEvent" type="datetime-local" value={data.jadwalEndEvent} onChange={e => setData('jadwalEndEvent', e.target.value)} />
                                    {errors.jadwalEndEvent && <p className="text-red-500 text-sm mt-1">{errors.jadwalEndEvent}</p>}
                                </div>
                            </div>
                            <div>
                                <InputLabel>Link Registrasi*</InputLabel>
                                <TextInput name="linkRegistrasi" value={data.linkRegistrasi} onChange={e => setData('linkRegistrasi', e.target.value)} placeholder="Input link di sini yaa!!" />
                                {errors.linkRegistrasi && <p className="text-red-500 text-sm mt-1">{errors.linkRegistrasi}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
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

AddEventPage.layout = page => <MainLayout children={page} />;
