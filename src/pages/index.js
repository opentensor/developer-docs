import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Countdown functionality
    let countdownElement = document.getElementById('countdown');
    let timeLeft = 10;
    
    function updateCountdown() {
      countdownElement.textContent = timeLeft;
      
      if (timeLeft <= 0) {
        countdownElement.textContent = 'Redirecting...';
        window.location.href = 'https://docs.learnbittensor.org';
        return;
      }
      
      timeLeft--;
    }
    
    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Handle manual redirect
    document.querySelector('.redirect-button').addEventListener('click', function() {
      clearInterval(countdownInterval);
    });
    
    // Preload the new site
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'https://docs.learnbittensor.org';
    document.head.appendChild(link);
    
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="redirect-page">
      <div className="container">
        <div className="logo"></div>
        
        <h1>Bittensor Documentation Site Migration Notice</h1>
        
        <div className="official-notice">
          <h2>🏛️ Official Notice from Opentensor Foundation</h2>
          <p>As of June 2025, Latent Holdings is officially taking over development of the official Bittensor Developer documentation, as part of the effort to thoroughly decentralize Bittensor development away from the Opentensor Foundation.</p>
        
          <div className="link-container">            
            📚 The documentation is now hosted at: 
            <div className="link-box">
              <a href="https://docs.learnbittensor.org">docs.learnbittensor.org</a>
            </div>
          </div>
        </div>
        
        <div className="contribution-note">
          <strong>🤝 Open Source & Community Driven</strong>
          <p>The Bittensor documentation is open source, and we thrive on feedback and contributions from community members.</p>
          <div className="link-container">
            <p>💻 The source code is now hosted at:</p>
            <div className="link-box">
              <a href="https://github.com/latent-to/developer-docs">github.com/latent-to/developer-docs</a>
            </div>
          </div>
        </div>

        <div className="countdown-container">
          <p>You will be automatically redirected in:</p>
          <div className="countdown" id="countdown">10</div>
          <p>seconds</p>
        </div>
        
        <a href="https://docs.learnbittensor.org" className="redirect-button">
          Take me to the new documentation site →
        </a>
        
        <div className="security-note">
          <strong>⚠️ Security Notice:</strong> Only trust documentation from official sources. The new site is the official home for Bittensor developer documentation.
        </div>
        
        <div className="footer">
          <p>If you are not automatically redirected, please click the button above or visit: <br/>
          <strong>https://docs.learnbittensor.org</strong></p>
          
          <p style={{ marginTop: '20px' }}>
            © 2024 Bittensor • Latent Holdings
          </p>
        </div>
      </div>
    </div>
  );
} 