import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img src="logo.png" alt="Six Threads Logo" style={{ height: '50px' }} />
    <h1 style={{ fontSize: '24px', color: 'white' }}>Six Threads</h1>
  </div>
);

const NavBar = () => (
  <nav style={{ backgroundColor: '#1f3a1f', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
    <Logo />
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/inventory" style={{ color: 'white' }}>Inventory</Link>
      <Link to="/custom-request" style={{ color: 'white' }}>Custom Request</Link>
      <Link to="/build-your-own" style={{ color: 'white' }}>Build Your Own</Link>
      <Link to="/help" style={{ color: 'white' }}>Help</Link>
      <Link to="/feedback" style={{ color: 'white' }}>Feedback</Link>
    </div>
  </nav>
);

const Home = () => <div style={{ padding: '2rem', textAlign: 'center' }}><h2>Welcome to Six Threads</h2></div>;
const Inventory = () => <div style={{ padding: '2rem' }}><h2>Inventory</h2></div>;
const CustomRequest = () => <div style={{ padding: '2rem' }}><h2>Request a Custom Rug</h2></div>;
const BuildYourOwn = () => <div style={{ padding: '2rem' }}><h2>Build Your Own Rug</h2></div>;
const Help = () => <div style={{ padding: '2rem' }}><h2>Help</h2></div>;
const Feedback = () => <div style={{ padding: '2rem' }}><h2>Feedback</h2></div>;

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#1f3a1f', color: 'white' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/custom-request" element={<CustomRequest />} />
          <Route path="/build-your-own" element={<BuildYourOwn />} />
          <Route path="/help" element={<Help />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;