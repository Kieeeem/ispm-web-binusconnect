import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/marketplace.css';

const Marketplace = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeCategory, setActiveCategory] = useState('All');
    const navigate = useNavigate();

    const carouselItems = [
        { id: 1, img: '/storage/carousel1.png', title: 'Ongoing Event', desc: 'Judul Brosur Judul Brosur Judul Brosur Judul' },
        { id: 2, img: '/storage/carousel2.png', title: 'Ongoing Event', desc: 'Judul Brosur Judul Brosur Judul Brosur Judul' },
        { id: 3, img: '/storage/carousel3.png', title: 'Ongoing Event', desc: 'Judul Brosur Judul Brosur Judul Brosur Judul' },
        { id: 4, img: '/storage/carousel4.png', title: 'Ongoing Event', desc: 'Judul Brosur Judul Brosur Judul Brosur Judul' },
        { id: 5, img: '/storage/carousel5.png', title: 'Ongoing Event', desc: 'Judul Brosur Judul Brosur Judul Brosur Judul' },
        { id: 6, img: '/storage/carousel6.png', title: 'Ongoing Event', desc: 'Judul Brosur Judul Brosur Judul Brosur Judul' },
    ];

    const products = [
        { id: 1, img: '/storage/produk1.jpg', title: 'PO Lanyard BSSC QRT', desc: 'Workshop 2025 - Only 20k', category: 'T-Shirt' },
        { id: 2, img: '/storage/produk2.jpg', title: 'PO Kuliner Sipil', desc: '11 - 18 Maret 2025', category: 'Food' },
        { id: 3, img: '/storage/produk3.jpg', title: 'Spring Roll', desc: 'Open PO sampai 20 Maret', category: 'Food' },
        { id: 4, img: '/storage/produk4.jpg', title: 'T-Shirt Event', desc: 'Pre-Order T-Shirt 50k', category: 'T-Shirt' },
        { id: 5, img: '/storage/produk5.jpg', title: 'Hoodie Special', desc: 'Hoodie Limited Edition', category: 'Hoodie' },
    ];

    const filterCategories = ['All', 'Food', 'T-Shirt', 'Pants', 'Hoodie', 'Ticket'];

    const getSlides = () => {
        const slideGroups = [];
        for (let i = 0; i < carouselItems.length; i += 3) {
            slideGroups.push(carouselItems.slice(i, i + 3));
        }
        return slideGroups;
    };

    const slideGroups = getSlides();
    const showSlider = slideGroups.length > 1;

    const filteredProducts = activeCategory === 'All' 
        ? products 
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="marketplaceContainer">
            {/* Search Bar */}
            <div className="searchBar">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search a product"
                        className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            {/* Carousel */}
            <div className="carousel">
                <div className="carousel-inner">
                    {slideGroups[currentSlide].map((item) => (
                        <div className="carousel-card" key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <a href="#" className="cta-button">Selengkapnya</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showSlider && (
                <div className="carousel-controls">
                    <button className="prev" onClick={() => setCurrentSlide((currentSlide - 1 + slideGroups.length) % slideGroups.length)}>&lt;</button>
                    <div className="slide-indicators">
                        {slideGroups.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                    <button className="next" onClick={() => setCurrentSlide((currentSlide + 1) % slideGroups.length)}>&gt;</button>
                </div>
            )}

            {/* Filter */}
            <div className="filter-buttons">
                {filterCategories.map((category) => (
                    <button
                        key={category}
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className="cards-section">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link to={`/marketplace-detail/${product.id}`} key={product.id} className="card-link">
                            <div className="card">
                                <img src={product.img} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.desc}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="no-products">No products available in this category.</p>
                )}
            </div>

            {/* Add Button */}
            <div className="add-button">
                <button className="add-icon" onClick={() => navigate('/marketplace-form')}>+</button>
            </div>
        </div>
    );
};

export default Marketplace;
