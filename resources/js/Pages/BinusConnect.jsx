// resources/js/Pages/BinusConnect.jsx
import React from 'react';


const binusConnect = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="logo">Logo</div>
            </header>
            
            <section className="hero">
                <h1>Binus Connect</h1>
                <p>Platform digital yang menghubungkan seluruh komunitas Binusian dalam satu ekosistem terpadu. Temukan event, diskusi forum, informasi organisasi, dan marketplace dalam satu tempat.</p>
                <button className="cta-button">Daftar Sini</button>
            </section>
            
            <div className="features">
                <div className="feature-card">
                    <h3>Event Hub</h3>
                    <p>Temukan dan ikuti berbagai acara menarik yang diselenggarakan oleh Binus dan organisasi kemahasiswaan</p>
                </div>
                
                <div className="feature-card">
                    <h3>Forum Diskusi</h3>
                    <p>Bertukar pikiran, pendapat, dan solusi bersama sesama Binusian</p>
                </div>
                
                <div className="feature-card">
                    <h3>Organisasi</h3>
                    <p>Kenali lebih dekat organisasi kampus lengkap dengan profil dan kegiatannya</p>
                </div>
                
                <div className="feature-card">
                    <h3>Marketplace</h3>
                    <p>Jual-beli barang dan dukung kegiatan dana usaha organisasi kampus</p>
                </div>
            </div>
        </div>
    );
};

export default binusConnect;