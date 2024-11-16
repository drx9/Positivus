import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import InfinitySlider from './components/infiniteslider';
import Services from './components/services';
import WorkingProcess from './components/workingprocess';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  return (
    <div className="flex flex-col items-center font-spacegrotesk" style={{width:'100%', height:'100vh'}}>
      <Header />
      <Hero />
      <div className="w-full max-w-6xl mx-auto">
        <InfinitySlider />
      </div>
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
