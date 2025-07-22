// src/pages/LandingPage.jsx
import React from 'react';

const LandingPage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Binus Connect</div>
      </header>

      <section className="hero-section">
        <h1 className="hero-title">Binus Connect</h1>
        <p className="hero-description">
          Platform digital yang menghubungkan seluruh komunitas Binusian dalam satu ekosistem terpadu. 
          Temukan event, diskusi forum, informasi organisasi, dan marketplace dalam satu tempat.
        </p>
        <button className="cta-button">Daftar Sini</button>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Event Hub</h3>
            <p className="feature-description">
              Temukan dan ikuti berbagai acara menarik yang diselenggarakan oleh Binus dan organisasi kemahasiswaan
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Forum Diskusi</h3>
            <p className="feature-description">
              Bertukar pikiran, pendapat, dan solusi bersama sesama Binusian
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Organisasi</h3>
            <p className="feature-description">
              Kenali lebih dekat organisasi kampus lengkap dengan profil dan kegiatannya
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Marketplace</h3>
            <p className="feature-description">
              Jual-beli barang dan dukung kegiatan dana usaha organisasi kampus
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
