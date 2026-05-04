import React from 'react';

const Dns = () => {
  const steps = [
    'You type "example.com" in the browser.',
    'The browser checks its cache for the IP address.',
    'If not found, it queries the DNS resolver (usually your ISP).',
    'The resolver checks caches then queries root servers.',
    'Root servers respond with the TLD nameserver.',
    'The TLD server points to the domain’s authoritative server.',
    'The authoritative server returns the IP address.',
    'Your browser connects to the IP to load the website.'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 page-shell">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 rounded-[2rem] border border-slate-700 bg-slate-950/85 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-500 neon-blue mb-3">What Happens When You Type a Website Name?</h1>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                Behind every website load, DNS translates the address you type into an IP address. This page breaks down the process and shows why this networking layer is critical for safety.
              </p>
            </div>
            <div className="accent-chip">DNS • Network</div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4 max-w-full">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step w-full">
                <div className="flex items-center gap-3">
                  <span>{index + 1}</span>
                  <h2 className="text-lg font-semibold text-white">Step {index + 1}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="card-strong p-6 lg:p-8 w-full">
            <div className="accent-chip mb-5">Query Example</div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A simple DNS lookup command shows how the resolver translates a name into an IP address.
            </p>
            <pre className="code-shell whitespace-pre-wrap break-words">dig example.com +short
172.217.13.164</pre>
            <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-900/90 p-5">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Safety note</h3>
              <p className="text-gray-300 leading-relaxed">
                Attackers can tamper with DNS responses, so use trusted resolvers and pay attention to browser warnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dns;