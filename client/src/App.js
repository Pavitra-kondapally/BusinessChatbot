import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Registration from './components/Registration';
import OrganizationSetup from './components/OrganizationSetup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import IntegrationTesting from './components/IntegrationTesting';
import SuccessPage from './components/SuccessPage';
import FailurePage from './components/FailurePage';
import EcommercePage from './components/EcommercePage';  // Import EcommercePage
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={() => setIsLoggedIn(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Registration toggleLogin={toggleLogin} />} />
        <Route
          path="/setup-organization"
          element={isLoggedIn ? <OrganizationSetup /> : <Registration toggleLogin={toggleLogin} />}
        />
        <Route
          path="/integration-testing"
          element={isLoggedIn ? <IntegrationTesting /> : <Registration toggleLogin={toggleLogin} />}
        />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
        <Route path="/ecommerce" element={<EcommercePage />} /> {/* Add Ecommerce route */}
      </Routes>
    </div>
  );
}

export default App;
