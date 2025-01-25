import React from 'react'
import Header from './components/header'
import SearchBar from './components/searchBar'
import PromoCard from './components/offerCard'
import Restaurant from './components/restorentCard'
import DishCato from './components/dishCato'
import RestaurantList, { RestaurantListData } from './components/newRestorent'
import Filters from './components/filterCompo'
import ExploreRestorent from './components/exploreRestorent'

function App() {
  return (
    <div className='p-4'>
      <Header />
      <SearchBar />
      <PromoCard />
      <Restaurant />
      <DishCato />
      <RestaurantList />
      <Filters />
      <ExploreRestorent />
    </div>
  )
}

export default App