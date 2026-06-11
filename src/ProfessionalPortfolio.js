import React from 'react';

function ProfessionalPortfolio() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white">
      
      {/* PREMIUM HERO BANNER */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-16 px-6 text-center shadow-xl text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span> Academic Submission
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3 bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
            PROFESSIONAL SKILLS PORTFOLIO
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light">
            A comprehensive documentation of professional advancement, interpersonal dynamics, and ethical responsibility.
          </p>
          
          <div className="inline-flex flex-wrap justify-center gap-6 bg-slate-900/60 border border-slate-800 backdrop-blur-md px-8 py-4 rounded-2xl text-sm shadow-inner">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
              <span><strong>Student:</strong> U A S Nethviru</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 002.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/></svg>
              <span><strong>ID:</strong> SA24611009</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/></svg>
              <span><strong>Intake:</strong> 2024 June</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-5 sticky top-6 max-h-[85vh] overflow-y-auto backdrop-blur-md">
            <div className="flex items-center gap-2 px-3 mb-4">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Table of Contents</h2>
            </div>
            
            <nav className="space-y-1">
              {[
                { id: 'employability', num: '01', title: 'Employability Skills' },
                { id: 'ei', num: '02', title: 'Emotional Intelligence' },
                { id: 'portfolio', num: '03', title: 'Portfolio Writing' },
                { id: 'cv', num: '04', title: 'CV Writing' },
                { id: 'interview', num: '05', title: 'Interview Skills' },
                { id: 'telephone', num: '06', title: 'Telephone Etiquette' },
                { id: 'dining', num: '07', title: 'Dining Etiquettes' },
                { id: 'grooming', num: '08', title: 'Grooming Etiquettes' },
                { id: 'negotiation', num: '09', title: 'Negotiation Skills' },
                { id: 'ethics', num: '10', title: 'Codes of Ethics in IT' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 group"
                >
                  <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 rounded-md text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                    {item.num}
                  </span>
                  {item.title}
                </a>
              ))}
              
              <div className="h-px bg-slate-100 my-4"></div>
              
              <a 
                href="#growgreen" 
                className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-200 shadow-sm border border-emerald-100/50"
              >
                <span className="text-base">🌱</span> Grow Green Project
              </a>
            </nav>
          </div>
        </aside>

        {/* PROFILE/CONTENT WRAPPER */}
        <main className="lg:w-3/4 space-y-12">

          {/* 01. EMPLOYABILITY SKILLS */}
          <section id="employability" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">01</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Employability Skills</h2>
            </div>
            
            <div className="space-y-6">
              <div className="prose max-w-none text-slate-600 leading-relaxed text-justify">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 11.053 1.308l-.041.02a.75.75 0 01-.053-1.308zM12 18a.375.375 0 100-.75.375.375 0 000.75zM12 3c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9z"/></svg>
                  Introduction
                </h4>
                <p>This session was designed as a crucial stepping stone to transition us from an academic environment into the professional world. The primary focus was on developing the essential skills and qualities required to thrive in a modern workplace. I came to the profound realization that possessing technical knowledge alone is vastly insufficient for establishing a successful and sustainable career. Professional and interpersonal skills are equally vital, as they empower us to execute individual tasks efficiently while seamlessly adapting to dynamic and unpredictable workplace situations.</p>
              </div>

              {/* IMAGE HOVERS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <div className="w-full h-48 bg-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center">
                    <img src="https://via.placeholder.com/400x300?text=Employability+Skills+Chart" alt="Employability Skills" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 mt-3 group-hover:text-indigo-600">Diagram: Core Employability Attributes</span>
                </div>
                
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <div className="w-full h-48 bg-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center">
                    <img src="https://via.placeholder.com/400x300?text=Johari+Window+Model" alt="Johari Window" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 mt-3 group-hover:text-indigo-600">Diagram: Johari Window Matrix</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
                  What I Learned
                </h4>
                <p className="text-slate-600 text-sm mb-4 text-justify">Throughout this comprehensive module, I gained a much deeper and practical understanding of employability skills. These are essentially non-technical competencies that enable individuals to perform optimally in corporate settings.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Communication & Presentation</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Critical Thinking & Problem-solving</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Teamwork & Cooperation</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Adaptability & Time Management</div>
                </div>
              </div>

              <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100/50 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 text-indigo-100 transform translate-x-4 translate-y-4 font-black text-7xl select-none pointer-events-none opacity-40">“</div>
                <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">Personal Reflection</h4>
                <p className="text-slate-700 text-sm leading-relaxed text-justify">This session was an eye-opener. It helped me deeply internalize that my academic qualifications are merely the foundation; true career success depends heavily on how well I can communicate, adapt, and collaborate. Moving forward, I am committed to dedicating equal effort to developing both my hard technical skills and my soft professional qualities.</p>
              </div>
            </div>
          </section>

          {/* 02. EMOTIONAL INTELLIGENCE */}
          <section id="ei" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">02</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Emotional Intelligence (EI)</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-2">Introduction</h4>
                <p className="text-slate-600 leading-relaxed text-justify">This segment of the program focused intensely on Emotional Intelligence (EI) and its undeniable importance across personal, academic, and professional domains. The lectures provided profound insights into what emotions truly are, how they subconsciously dictate our thoughts and behaviors, and how harnessing EI can help us build resilient relationships.</p>
              </div>

              <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center my-6 transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                <div className="w-full h-56 bg-slate-200 rounded-xl overflow-hidden relative">
                  <img src="https://via.placeholder.com/600x250?text=Basic+Emotions+Infographic" alt="Basic Emotions" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                </div>
                <span className="text-xs font-medium text-slate-400 mt-3 group-hover:text-indigo-600">Photo Reference: Understanding Basic Emotional Expressiveness</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                  <h5 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider text-indigo-950">5 Core Components of EI</h5>
                  <ul className="space-y-2 text-xs text-slate-600 list-none pl-0">
                    <li className="flex items-start gap-2"><strong>1.</strong> <span><strong>Self-Awareness:</strong> Recognizing our own emotions instantly.</span></li>
                    <li className="flex items-start gap-2"><strong>2.</strong> <span><strong>Self-Regulation:</strong> Controlling disruptive impulses and stress.</span></li>
                    <li className="flex items-start gap-2"><strong>3.</strong> <span><strong>Motivation:</strong> Passion to work for internal reasons.</span></li>
                    <li className="flex items-start gap-2"><strong>4.</strong> <span><strong>Empathy:</strong> Understanding the emotional makeup of others.</span></li>
                    <li className="flex items-start gap-2"><strong>5.</strong> <span><strong>Social Skills:</strong> Proficiency in managing relationships.</span></li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider text-indigo-950">IQ vs EQ Matrix</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3"><strong>IQ (Intelligence Quotient):</strong> Measures cognitive abilities, logical reasoning, and computational skills.</p>
                    <hr className="border-slate-200 my-2" />
                    <p className="text-xs text-slate-600 leading-relaxed"><strong>EQ (Emotional Intelligence):</strong> Focuses heavily on emotional self-awareness, deep empathy, proactive self-control, and managing cross-functional teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03. PORTFOLIO WRITING */}
          <section id="portfolio" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">03</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Portfolio Writing</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed text-justify">This session was entirely dedicated to the art and science of Portfolio Writing. The lecturer explained how a well-structured portfolio serves as a powerful catalyst for personal development and professional advancement. We explored how portfolios are utilized to visually and factually document achievements, skills, hands-on experience, and concrete evidence of continuous learning.</p>
              
              <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 max-w-sm mx-auto flex flex-col items-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                <img src="https://via.placeholder.com/350x250?text=Portfolio+Cover+Mockup" alt="Portfolio Cover" className="rounded-xl shadow-sm w-full h-auto object-cover" />
                <span className="text-xs font-medium text-slate-400 mt-2">Sample Template Structure Mockup</span>
              </div>
            </div>
          </section>

          {/* 04. CV WRITING */}
          <section id="cv" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">04</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">CV Writing</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed text-justify">Crafting a professional Curriculum Vitae (CV) was the core focus of this highly practical session. We received step-by-step guidance on structuring, properly formatting, and strategically tailoring a CV to perfectly highlight our qualifications, unique skills, and past experiences.</p>
              
              <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 max-w-sm mx-auto flex flex-col items-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                <img src="https://via.placeholder.com/350x200?text=CV+Layout+Graphic" alt="CV Layout" className="rounded-xl shadow-sm w-full h-auto object-cover" />
                <span className="text-xs font-medium text-slate-400 mt-2">Corporate CV Layout Grid Placement</span>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200/70 text-xs font-medium text-amber-900 flex items-start gap-3">
                <span className="text-lg leading-none">💡</span>
                <p><strong>Key Takeaway:</strong> Rather than using the same template universally, candidates should strategically modify their content to explicitly match the concrete requirements outlined in specific job descriptions.</p>
              </div>
            </div>
          </section>

          {/* 05. INTERVIEW SKILLS */}
          <section id="interview" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">05</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Interview Skills</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 text-justify">Securing an interview is only half the battle; performing well during it is what secures the job. This session focused on mastering effective interview techniques and deeply understanding the vital roles that both verbal and non-verbal communication play during the process.</p>
              
              <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                <img src="https://via.placeholder.com/550x250?text=Mock+Interview+Illustration" alt="Mock Interview" className="rounded-xl shadow-sm max-w-full h-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <h5 className="font-bold text-indigo-950 text-xs uppercase tracking-wider mb-2">The STAR Framework</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Situation:</strong> Define the background context.<br />
                    <strong>Task:</strong> Explain the targeted assignment.<br />
                    <strong>Action:</strong> Detail the specific behaviors you executed.<br />
                    <strong>Result:</strong> Present quantifiable, verified outcomes.
                  </p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                  <h5 className="font-bold text-indigo-950 text-xs uppercase tracking-wider mb-1">The 6 C's of Communication</h5>
                  <p className="text-xs text-slate-600 font-medium">Clear, Concise, Correct, Complete, Concrete, Courteous, and Confident.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 06. TELEPHONE & COMMUNICATION ETIQUETTES */}
          <section id="telephone" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">06</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Telephone & Communication Etiquettes</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 text-justify">In an era dominated by digital communication, this session focused heavily on telephone and online etiquette within academic and professional spheres. We explored how displaying proper manners across emails, phone calls, and social media platforms reflects our overall professionalism.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <img src="https://via.placeholder.com/350x450?text=Survival+Activity+Sheet+1" alt="Survival Sheet 1" className="rounded-lg max-w-full h-auto shadow-sm" />
                  <span className="text-xs font-medium text-slate-400 mt-2">Activity Sheet: Crash on the Moon Challenge</span>
                </div>
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <img src="https://via.placeholder.com/350x450?text=Team+Signature+Sheet+2" alt="Signature Sheet 2" className="rounded-lg max-w-full h-auto shadow-sm" />
                  <span className="text-xs font-medium text-slate-400 mt-2">Log Sheet: Group Allocation Records</span>
                </div>
              </div>

              <div className="bg-slate-950 text-white p-6 rounded-2xl shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl font-black">MOON</div>
                <h5 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Group Interaction: "Crash on the Moon"</h5>
                <p className="text-xs text-slate-300 leading-relaxed text-justify">To put our communication and teamwork skills to the test, we engaged in the "Crash on the Moon" survival challenge. Through structured debate and consensus, our team chose key items like an Oxygen tank, Solar-powered heating blanket, Lunar GPS, and a Communication signal booster to practice decision-making under simulated pressure.</p>
              </div>
            </div>
          </section>

          {/* 07. DINING ETIQUETTES */}
          <section id="dining" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">07</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Dining Etiquettes</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 text-justify">Business is often conducted over meals. This session focused on the nuances of dining etiquette and table manners, underscoring their importance in personal networking, academic functions, and high-stakes professional environments.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <img src="https://via.placeholder.com/400x250?text=Phone+Distraction+Task+Card" alt="Task Card" className="rounded-xl shadow-sm w-full" />
                  <span className="text-xs font-medium text-slate-400 mt-2">Card 3: Phone Distraction Task Assignment</span>
                </div>
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <img src="https://via.placeholder.com/400x250?text=Dining+Roleplay+Group+Photo" alt="Dining Roleplay" className="rounded-xl shadow-sm w-full" />
                  <span className="text-xs font-medium text-slate-400 mt-2">Group Snapshot: Phone Distraction Roleplay Execution</span>
                </div>
              </div>

              <div className="border-l-4 border-indigo-500 bg-indigo-50/50 p-4 text-xs rounded-r-xl border-dashed">
                <span className="font-bold text-indigo-950 block mb-1 uppercase tracking-wider">The BMW Table Architecture Rule</span>
                <p className="text-slate-700"><strong>B</strong>read on the left-hand side, <strong>M</strong>eal centered appropriately, and <strong>W</strong>ater allocated toward the right side.</p>
              </div>
            </div>
          </section>

          {/* 08. GROOMING ETIQUETTES */}
          <section id="grooming" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">08</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Grooming Etiquettes</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed text-justify">This module highlighted the profound impact that personal grooming and visual etiquette have within professional spaces. Professional grooming is not about luxury brands; rather, it is about maintaining a neat appearance as a tangible sign of self-respect.</p>
              
              <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 max-w-xl mx-auto flex flex-col items-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                <img src="https://via.placeholder.com/500x200?text=Corporate+Grooming+Visual+Asset" alt="Grooming Standard" className="rounded-xl shadow-sm w-full" />
                <span className="text-xs font-medium text-slate-400 mt-2">Visual Roadmap: Standard Executive Profile Requirements</span>
              </div>
              <p className="text-slate-600 text-xs text-center font-medium max-w-md mx-auto">Key elements include personal hygiene, meticulous hand care, formal clothing, clean footwear, and strong posture to build an authentic <strong>Personal Brand</strong>.</p>
            </div>
          </section>

          {/* 09. NEGOTIATION SKILLS */}
          <section id="negotiation" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">09</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Negotiation Skills</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 text-justify">Negotiation is an inescapable part of life and software development. This session broke down negotiation mechanics, framing it as collaborative problem-solving aimed at reaching mutually beneficial agreements while preserving long-term professional connections.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <img src="https://via.placeholder.com/400x250?text=Negotiation+Strategies+Graph" alt="Negotiation Matrix" className="rounded-xl shadow-sm w-full" />
                  <span className="text-xs font-medium text-slate-400 mt-2">Diagram: Conflict Resolution & Negotiation Matrix</span>
                </div>
                <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <img src="https://via.placeholder.com/400x250?text=Office+Pizza+Party+Roleplay+Photo" alt="Pizza Party Roleplay" className="rounded-xl shadow-sm w-full" />
                  <span className="text-xs font-medium text-slate-400 mt-2">Group Snapshot: Pizza Party Negotiation Roleplay</span>
                </div>
              </div>

              <div className="p-4 bg-amber-50/60 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-950 font-medium">
                <strong>BATNA fallback:</strong> Best Alternative to a Negotiated Agreement. It serves as your critical alternative layout if negotiations collapse entirely.
              </div>
            </div>
          </section>

          {/* 10. CODES OF ETHICS IN IT */}
          <section id="ethics" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-lg shadow-sm shadow-indigo-200">10</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Codes of Ethics in IT</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 text-justify">The final core session transitioned into the realm of morality, focusing on professional responsibilities and the strict codes of ethics governing Information Technology. As future IT professionals, the systems we build will heavily impact society, requiring strict accountability.</p>
              
              <div className="group border border-slate-200 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                <img src="https://via.placeholder.com/600x350?text=Stakeholder+Ethical+Responsibilities+Chart" alt="Ethical Chart" className="rounded-xl shadow-sm max-w-full h-auto" />
                <span className="text-xs font-medium text-slate-400 mt-2">Diagram: Commitments toward Clients, Employers, Colleagues, and Society</span>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-xs text-slate-500 font-semibold text-center tracking-wide">
                INSTITUTIONAL FRAMEWORKS: CSSL | ACM | IEEE COMPUTER SOCIETY | BCS
              </div>
            </div>
          </section>

          {/* CAPSTONE PROJECT: GROW GREEN */}
          <section id="growgreen" className="bg-gradient-to-br from-emerald-50/40 via-green-50/10 to-emerald-50/60 rounded-2xl shadow-sm border border-green-100/80 p-8 scroll-mt-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-green-200 pb-5 mb-6">
              <span className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-base px-2.5 py-1 rounded-lg shadow-sm shadow-emerald-200">🌱</span>
              <h2 className="text-2xl font-bold text-green-950 tracking-tight">Capstone Project: Grow Green</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-green-900 leading-relaxed text-justify">To culminate our Professional Skills module, I actively participated in an expansive group initiative titled "Grow Green". This project was strategically organized to cultivate environmental awareness among the university's student body and lecturing staff, urging the community to take actionable steps toward a healthier ecosystem.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="group border border-green-200 bg-white rounded-2xl p-3 flex flex-col items-center transition-all duration-300 hover:border-emerald-400 hover:shadow-xl">
                  <img src="https://via.placeholder.com/450x300?text=Grow+Green+Team+Group+Photo" alt="Grow Green Group" className="rounded-xl shadow-sm w-full h-auto" />
                  <span className="text-xs font-semibold text-green-700 mt-3">Team Assembly: 41 Group Members in Hall No: 403</span>
                </div>
                <div className="group border border-green-200 bg-white rounded-2xl p-3 flex flex-col items-center transition-all duration-300 hover:border-emerald-400 hover:shadow-xl">
                  <img src="https://via.placeholder.com/450x300?text=Project+Props+And+Materials" alt="Props and Bookmarks" className="rounded-xl shadow-sm w-full h-auto" />
                  <span className="text-xs font-semibold text-green-700 mt-3">Campaign Materials: Bookmarks, Props & Banners Used</span>
                </div>
              </div>

              {/* LOGISTICS TABLE WITH MODERN LOOK */}
              <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-3 font-bold text-xs uppercase tracking-wider">
                  Project Operations Summary Log
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-400 uppercase tracking-wider text-[10px] border-b border-green-50">
                        <th className="p-4 font-bold">Resource / Logistic Parameter</th>
                        <th className="p-4 font-bold">Operational Quantities & Specifics</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                      <tr className="hover:bg-slate-50/50"><td className="p-4 font-semibold text-slate-900">Plants Distributed</td><td className="p-4 text-emerald-700">50 Live Saplings (Snake Plants)</td></tr>
                      <tr className="hover:bg-slate-50/50"><td className="p-4 font-semibold text-slate-900">Execution Venue</td><td className="p-4">University Premises, Turret Tower Hall No: 403</td></tr>
                      <tr className="hover:bg-slate-50/50"><td className="p-4 font-semibold text-slate-900">Total Assigned Cohort</td><td className="p-4">41 Active Group Members</td></tr>
                      <tr className="hover:bg-slate-50/50"><td className="p-4 font-semibold text-slate-900">Target Segment</td><td className="p-4">University Student Community & Academic Lecturing Staff</td></tr>
                      <tr className="hover:bg-slate-50/50"><td className="p-4 font-semibold text-slate-900">Collateral Produced</td><td className="p-4">Custom Bookmarks, Photo Booth Gear, Custom Marketing Props</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-6 shadow-xl relative border border-emerald-900">
                <h5 className="font-bold text-xs uppercase tracking-wider text-emerald-400 mb-2">Project Reflection Summary</h5>
                <p className="text-xs text-emerald-200/90 leading-relaxed text-justify">This project was a masterclass in applied professional skills. Operating within a massive 41-person team challenged and ultimately refined my communication and collaborative abilities. It was a powerful reminder that unified teamwork can drive meaningful, positive change in society.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* MODERN FOOTER */}
      <footer className="bg-slate-950 text-slate-600 text-center py-10 text-xs border-t border-slate-900 mt-24">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="text-slate-400 font-medium">&copy; 2026 U A S Nethviru. All Rights Reserved.</p>
          <p className="font-light text-slate-500">Professional Skills (PPA Module) Portfolio Development Document.</p>
          <div className="pt-4 flex justify-center gap-2 text-[10px] text-slate-700">
            <span>React App Framework</span> &bull; <span>Tailwind CSS Styling Engine</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProfessionalPortfolio;