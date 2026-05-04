import React from 'react';

const Tools = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 page-shell">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 rounded-[2rem] border border-slate-700 bg-slate-950/85 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-500 neon-blue mb-3 text-center lg:text-left">Cyber Safety Tools & Tips</h1>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                Practical student-facing security advice for passwords, authentication, and safe wireless habits.
              </p>
            </div>
            <div className="accent-chip">Tools • Defense</div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-8">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Password Managers</h2>
            <ul className="text-gray-300 space-y-3 leading-relaxed">
              <li>• Use strong, unique passwords for every account.</li>
              <li>• Let the manager autofill instead of reusing passwords.</li>
              <li>• Protect the vault with a strong master password.</li>
            </ul>
            <p className="mt-5 text-sm text-gray-400">Recommended: Bitwarden, 1Password, LastPass</p>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Two-Factor Authentication</h2>
            <ul className="text-gray-300 space-y-3 leading-relaxed">
              <li>• Add an extra security layer to your accounts.</li>
              <li>• Use authenticator apps or hardware keys instead of SMS.</li>
              <li>• Do not share verification codes with anyone.</li>
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Safe Wi-Fi</h2>
            <ul className="text-gray-300 space-y-3 leading-relaxed">
              <li>• Avoid sensitive work on public Wi-Fi without a VPN.</li>
              <li>• Disable auto-connect and verify network names.</li>
              <li>• Use a guest network and keep your router updated.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-strong p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Quick Security Checks</h2>
              <span className="accent-chip">Fast tips</span>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-4">Keep your browser and extensions updated.</div>
              <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-4">Install antivirus and enable your firewall.</div>
              <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-4">Never open unknown attachments or suspicious links.</div>
            </div>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Email & Browser Safety</h2>
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>• Don’t trust messages that pressure you to act fast.</li>
              <li>• Verify email addresses before clicking links.</li>
              <li>• Enable HTTPS-only mode if supported by your browser.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;