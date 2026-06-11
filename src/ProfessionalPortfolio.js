import React from 'react';

function ProfessionalPortfolio() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-slate-900 to-indigo-950 py-12 px-6 text-center shadow-lg text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">PROFESSIONAL SKILLS PORTFOLIO</h1>
          <p className="text-indigo-200 text-lg md:text-xl font-medium mb-6">Continuous Development & Career Insights</p>
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm">
            <span><strong>Student:</strong> U A S Nethviru</span>
            <span className="hidden md:inline text-white/30">|</span>
            <span><strong>ID:</strong> SA24611009</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR */}
        <aside className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Table of Contents</h2>
            <nav className="space-y-1">
              <a href="#employability" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50">01 Employability</a>
              <a href="#ei" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50">02 Emotional Intelligence</a>
              <a href="#growgreen" className="block px-4 py-3 mt-4 text-sm font-bold rounded-xl bg-green-50 text-green-700">Grow Green Project</a>
            </nav>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="lg:w-3/4 space-y-12">
          
          {/* ... අනිත් sections ටික මෙතනට දාගන්න ... */}

          {/* CAPSTONE PROJECT: GROW GREEN */}
          <section id="growgreen" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-green-200 pb-4 mb-6">
              <span className="bg-green-600 text-white font-bold text-lg px-3 py-1 rounded-lg">🌱</span>
              <h2 className="text-2xl font-bold text-green-900">Capstone Project: Grow Green</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-green-950 leading-relaxed text-justify">To culminate our Professional Skills module, I actively participated in an expansive group initiative titled "Grow Green". This project was strategically organized to cultivate environmental awareness.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="border-2 border-dashed border-green-200 rounded-xl p-2 bg-white flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/450x300" alt="Grow Green" className="rounded-lg shadow-sm" />
                </div>
              </div>

              {/* LOGISTICS TABLE */}
              <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
                <div className="bg-green-600 text-white px-4 py-2 font-bold text-sm">Project Operations Log</div>
                <table className="w-full text-left text-xs border-collapse">
                  <tbody className="divide-y divide-green-50">
                    <tr><td className="p-3 font-medium">Plants Distributed</td><td className="p-3">50 Live Saplings</td></tr>
                    <tr><td className="p-3 font-medium">Total Team Members</td><td className="p-3">41 Members</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-gray-500 text-center py-6 text-xs border-t border-slate-900 mt-20">
        <p>&copy; 2026 U A S Nethviru. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default ProfessionalPortfolio;