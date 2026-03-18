import React from 'react';
import Hero from './Components/heroSection/Hero';
import ImageSection from './Components/imageSection/ImageSection';
import TableSection from './Components/tableSection/TableSection';
import VideoSection from './Components/videoSection/VideoSection';
import Form from './Components/formSection/Form';
import Footer from './Components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <VideoSection />
      <ImageSection />
      <TableSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;