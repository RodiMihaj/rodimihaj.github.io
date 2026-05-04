import React from 'react';

const Https = () => {
  const handshakeSteps = [
    { label: 'Client Hello', text: 'Your browser begins by asking for a secure connection and offering supported cryptography.' },
    { label: 'Server Hello', text: 'The server responds with a certificate and selected encryption settings.' },
    { label: 'Key Exchange', text: 'Both sides agree on a shared key and verify the certificate chain.' },
    { label: 'Encrypted Connection', text: 'Data is exchanged securely once the handshake completes.' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 page-shell">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 rounded-[2rem] border border-slate-700 bg-slate-950/85 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-500 neon-blue mb-3">Why the Padlock Matters: HTTPS and SSL/TLS</h1>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                The padlock icon shows your connection is encrypted and verified. HTTPS protects your data from eavesdroppers and ensures the website is authentic.
              </p>
            </div>
            <div className="accent-chip">HTTPS • SSL</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="card p-6">
            <div className="accent-chip mb-4">Encryption</div>
            <h2 className="text-xl font-semibold text-white mb-2">Keeps data private</h2>
            <p className="text-gray-300 leading-relaxed">HTTPS encrypts the traffic between you and the site so attackers cannot read passwords or personal information.</p>
          </div>
          <div className="card p-6">
            <div className="accent-chip mb-4">Authentication</div>
            <h2 className="text-xl font-semibold text-white mb-2">Validates the site</h2>
            <p className="text-gray-300 leading-relaxed">Certificates prove the website is who it claims to be, protecting you from fake or spoofed pages.</p>
          </div>
          <div className="card p-6">
            <div className="accent-chip mb-4">Integrity</div>
            <h2 className="text-xl font-semibold text-white mb-2">Protects content</h2>
            <p className="text-gray-300 leading-relaxed">HTTPS prevents attackers from changing the page contents while your browser loads it.</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          <div className="card-strong p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">SSL/TLS Handshake</h2>
              <span className="accent-chip">Connection flow</span>
            </div>
            <div className="space-y-4">
              {handshakeSteps.map((step, index) => (
                <div key={index} className="timeline-step">
                  <div className="flex items-center gap-3">
                    <span>{index + 1}</span>
                    <h3 className="text-lg font-semibold text-white">{step.label}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <div className="accent-chip mb-4">Security Check</div>
            <h2 className="text-2xl font-semibold text-white mb-4">Warning Signs</h2>
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li className="rounded-3xl border border-red-500/20 bg-red-500/8 p-4">No padlock or browser warning shows "Not Secure".</li>
              <li className="rounded-3xl border border-orange-400/20 bg-orange-400/8 p-4">Certificate errors, expired certificates, or domain mismatches.</li>
              <li className="rounded-3xl border border-cyan-400/20 bg-cyan-400/8 p-4">Mixed content on the page where HTTP resources load inside HTTPS.</li>
            </ul>
            <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-900/90 p-5">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Best Practice</h3>
              <p className="text-gray-300 leading-relaxed">Only enter passwords or personal data on sites with HTTPS and a valid certificate. If unsure, navigate manually to the website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Https;