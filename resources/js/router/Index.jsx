import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import MarketplaceDetail from '../Pages/MarketPlaceDetail'
import Marketplace from '../Pages/Marketplace'
import MarketplaceForm from '../Pages/MarketplaceForm'

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/marketplace" element={<Marketplace onAddClick={() => console.log('Add clicked')} />} />
            <Route path="/marketplace-detail/:id" element={<MarketplaceDetail />} />
            <Route path="/marketplace-form" element={<MarketplaceForm />} />
        </Routes>
    )
}

export default Index