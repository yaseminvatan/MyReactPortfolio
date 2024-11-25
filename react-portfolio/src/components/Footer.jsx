import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h3>Contact</h3>
      <a href="https://github.com/yaseminvatan" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/yasemin-vatan-6730353b" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </footer>
  );
}

export default Footer;
// //Purpose: Prevents the new tab from gaining access to the original tab via the window.opener property.
// Why It’s Important:
// When you open a link with target="_blank", the new page can access the window.opener object, which references the original page.
// This can lead to security risks, such as:
// The new page manipulating the original page (e.g., redirecting it to a malicious site).
// Potential phishing or clickjacking attacks.
// By using noopener, the new tab is completely isolated and has no access to the original page.
// noreferrer
// Purpose: Prevents the browser from sending the Referer header when navigating to the new page.
// Why It’s Important:
// The Referer header contains the URL of the original page, which is sent to the new site by default.
// Using noreferrer:
// Enhances privacy: The new site doesn’t know where the visitor came from.
// Prevents potential information leakage, especially if the original page's URL contains sensitive data like query parameters.
//Always use rel="noopener noreferrer" when using target="_blank". It's a good practice to protect your website and users from security and privacy vulnerabilities