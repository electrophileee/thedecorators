import React from 'react';

// import components
import Hero from './components/Hero';
import Features from './components/Features';
import NewItems from './components/NewItems';
import FeaturesSecond from './components/FeaturesSecond';
import Products from './components/Products';
import Testimonial from  './components/Testimonial';

const App = () => {
  return <div className='w-full max-w-[1440p] mx-auto bg-white'>
    <Hero />
    <Features />
    <NewItems />
    <FeaturesSecond />
    <Products />
    <Testimonial />
  </div>;
};

export default App;

