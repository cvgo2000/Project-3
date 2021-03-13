import React from 'react'
import Header from '../components/Header/Header'
import RecommendedCards from '../components/Cards/RecommendedCards'
import AddCards from '../components/Add/AddCards'

const Home = () => {
    return (
        <div>
            <Header />
            <RecommendedCards />
            <hr></hr>
            <AddCards />
            <hr></hr>
        </div>
    )
}

export default Home
