import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,170,0,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(122,106,255,0.18),transparent_20%)]"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-12 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <h1 className="text-6xl font-bold text-blue-500 neon-blue mb-4 text-center">Cyber Safety Hub</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your ultimate guide to staying safe online with clear, visual explainers for DNS, HTTPS, phishing, and security habits students can use.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6">
              <div className="accent-chip mb-4">DNS</div>
              <h2 className="text-2xl font-semibold text-white mb-2">Name resolution</h2>
              <p className="text-gray-400 leading-relaxed">See how domain names are resolved into IP addresses and why DNS security matters.</p>
            </article>
            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6">
              <div className="accent-chip mb-4">HTTPS</div>
              <h2 className="text-2xl font-semibold text-white mb-2">Secure connections</h2>
              <p className="text-gray-400 leading-relaxed">Understand the padlock, SSL/TLS certificates, and how secure sessions protect your data.</p>
            </article>
            <article className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6">
              <div className="accent-chip mb-4">Quiz</div>
              <h2 className="text-2xl font-semibold text-white mb-2">Phishing test</h2>
              <p className="text-gray-400 leading-relaxed">Test yourself with a short interactive quiz and learn how to spot phishing attacks.</p>
            </article>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dns" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition">Explore DNS</Link>
            <Link to="/https" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition">Learn HTTPS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;