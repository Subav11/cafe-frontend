import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>SBY Cafe</h3>
        <p>Brewing happiness since 2025 ☕</p>
        <p>Visit us for freshly brewed coffee, snacks, and a warm ambiance.</p>
        <p>Email: contact@sbycafe.com | Phone: +91-9876543210</p>
      </div>
      <p className="footer-bottom">&copy; 2025 SBY Cafe. All rights reserved.</p>
    </footer>
  );
}
