import React from 'react'
import Header from '../components/Header/Header'
import RecommendedCards from '../components/Cards/RecommendedCards'
import AddCards from '../components/Cards/AddCards'

const Home = () => {
    return (
        <div>
            <Header />
            <RecommendedCards />
            <hr></hr>
            <AddCards />
        </div>
    )
}

export default Home
