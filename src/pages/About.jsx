import React from 'react';

const About = () => {
  const team = [
    { initials: 'RM', name: 'Rodi Mihaj', email: 'rodi.mihaj@cit.edu.al' },
    { initials: 'FZ', name: 'Furkan Zhilla', email: 'furkan.zhilla@cit.edu.al' },
    { initials: 'SB', name: 'Serxho Bunoca', email: 'serxho.bunoca@cit.edu.al' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 page-shell">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 rounded-[2rem] border border-slate-700 bg-slate-950/85 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-500 neon-blue mb-3 text-center lg:text-left">About Cyber Safety Hub</h1>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                A student project built to make cybersecurity concepts easy to understand, with interactive examples and practical advice that help classmates learn safe browsing habits.
              </p>
            </div>
            <div className="accent-chip">Project</div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-8">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">Help students understand cybersecurity fundamentals like DNS, HTTPS, and phishing through a polished, easy-to-navigate site.</p>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">What We Cover</h2>
            <ul className="text-gray-300 space-y-3 leading-relaxed">
              <li>• DNS resolution and how names map to IPs</li>
              <li>• HTTPS and SSL/TLS encryption</li>
              <li>• Phishing awareness with an interactive quiz</li>
              <li>• Security tools such as password managers and 2FA</li>
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Project Goal</h2>
            <p className="text-gray-300 leading-relaxed">Create a clean, cyber-themed website students can demo in minutes while highlighting key networking and safety topics.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">RM</span>
              </div>
              <h3 className="text-xl font-medium text-white">Rodi Mihaj</h3>
              <p className="text-gray-400">Student</p>
              <p className="text-sm text-gray-500 mt-2">rodi.mihaj@cit.edu.al</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">FZ</span>
              </div>
              <h3 className="text-xl font-medium text-white">Furkan Zhilla</h3>
              <p className="text-gray-400">Student</p>
              <p className="text-sm text-gray-500 mt-2">furkan.zhilla@cit.edu.al</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SB</span>
              </div>
              <h3 className="text-xl font-medium text-white">Serxho Bunoca</h3>
              <p className="text-gray-400">Student</p>
              <p className="text-sm text-gray-500 mt-2">serxho.bunoca@cit.edu.al</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <p className="text-gray-400 leading-relaxed text-center">
            This project was created as part of a Computer Communication and Network course to demonstrate understanding of key cybersecurity concepts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;