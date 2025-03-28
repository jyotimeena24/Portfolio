import React from 'react'; // Ensure React is imported

import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './home';
import Portfolio from './portfolio';

function App() {
  return (
    <>
    <div >
      <Navbar />
      <Home />
      <Portfolio/>
      <Footer />
      </div>
    </>
  );
}

export default App;
