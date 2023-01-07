/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PasswordContext from './context/PasswordContext';

function App() {
  const [password, setPassword] = useState(null);

  return (
    <div className="container">
      <PasswordContext.Provider value={{ password, setPassword }}>
        <Content />
        <Sidebar />
      </PasswordContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
