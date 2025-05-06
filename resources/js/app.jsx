import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return         <div class="container">
    <header class="header">
        <div class="logo">Binus Connect</div>
    </header>
    
    <section class="hero-section">
        <h1 class="hero-title">Binus Connect</h1>
        <p class="hero-description">
            Platform digital yang menghubungkan seluruh komunitas Binusian dalam satu ekosistem terpadu. 
            Temukan event, diskusi forum, informasi organisasi, dan marketplace dalam satu tempat.
        </p>
        <button class="cta-button">Daftar Sini</button>
    </section>
    
    <section class="features-section">
        <div class="features-grid">
            <div class="feature-card">
                <h3 class="feature-title">Event Hub</h3>
                <p class="feature-description">
                    Temukan dan ikuti berbagai acara menarik yang diselenggarakan oleh Binus dan organisasi kemahasiswaan
                </p>
            </div>
            
            <div class="feature-card">
                <h3 class="feature-title">Forum Diskusi</h3>
                <p class="feature-description">
                    Bertukar pikiran, pendapat, dan solusi bersama sesama Binusian
                </p>
            </div>
            
            <div class="feature-card">
                <h3 class="feature-title">Organisasi</h3>
                <p class="feature-description">
                    Kenali lebih dekat organisasi kampus lengkap dengan profil dan kegiatannya
                </p>
            </div>
            
            <div class="feature-card">
                <h3 class="feature-title">Marketplace</h3>
                <p class="feature-description">
                    Jual-beli barang dan dukung kegiatan dana usaha organisasi kampus
                </p>
            </div>
        </div>
    </section>
</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
