import React from 'react';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Content />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
