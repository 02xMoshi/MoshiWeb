import React, { useEffect, useRef, useState } from 'react';
import '../components/css/navbar.css';

function Navbar() {
  const [spin, setSpin] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    // Sakura efektini başlatmak için
    if (window.initSakura) {
      window.initSakura();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpin(true);
      setTimeout(() => setSpin(false), 1200); // animasyon süresiyle aynı olmalı
    }, 4000); // Her 4 saniyede bir tetiklenir
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div id="sakura-container"></div>
      <ul>
        <img
          src="/sakura.png"
          alt="Moshi Logo"
          id="moshi-logo"
          style={{ display: 'block' }}
          ref={logoRef}
          className={spin ? 'logo-spin' : ''}
        />
        <li>
          <a href="/"><i className="fa-solid fa-house"></i> AnaSayfa</a>
        </li>
        <li>
          <a href="#"><i className="fas fa-info-circle"></i> Hakkımızda</a>
        </li>
        <li>
          <a href="#team"><i className="fa-solid fa-ghost"></i>Ekibimiz</a>
        </li>
        <li>
          <a href="#reviews"><i className="fa-solid fa-comments"></i>M. Yorumları</a>
        </li>
        <li>
          <a href="https://discord.gg/A6gEGpKrxw" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i> İletişim</a>
        </li>
        <li>
          <a href="/pages/shop.html"><i className="fas fa-store"></i> Mağaza</a>
        </li>
        <li>
          <a href="#sss"><i className="fas fa-question-circle"></i> SSS</a>
        </li>
        <li>
          <a href="/giris"><i className="fas fa-sign-in-alt"></i> Giriş Yap</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;