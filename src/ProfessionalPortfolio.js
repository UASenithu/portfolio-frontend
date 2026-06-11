import React, { useEffect } from 'react';

function ProfessionalPortfolio() {
  // Automatically injects Tailwind CSS to make it look beautiful instantly
  useEffect(() => {
    const existingScript = document.getElementById('tailwind-cdn');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      script.id = 'tailwind-cdn';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen selection:bg-indigo-500 selection:text-white pb-12">
      
      {/* PREMIUM HERO BANNER */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-16 px-6 text-center shadow-xl text-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Academic Submission
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-white">
            PROFESSIONAL SKILLS PORTFOLIO
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 font-light">
            Continuous Development & Career Insights • PPA Module Portfolio
          </p>
          
          <div className="inline-flex flex-wrap justify-center gap-6 bg-slate-900/60 border border-slate-800 px-8 py-4 rounded-2xl text-sm shadow-inner">
            <div><strong>Student:</strong> U A S Nethviru</div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div><strong>ID:</strong> SA24611009</div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div><strong>Intake:</strong> 2024 June</div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-5 sticky top-6 max-h-[85vh] overflow-y-auto">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Table of Contents</h2>
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
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                >
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded text-slate-400">
                    {item.num}
                  </span>
                  {item.title}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-4"></div>
              <a href="#growgreen" className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all border border-emerald-100">
                🌱 Grow Green Project
              </a>
            </nav>
          </div>
        </aside>

        {/* CONTENT WRAPPER */}
        <main className="lg:w-3/4 space-y-12">
          {/* 01. EMPLOYABILITY SKILLS */}
          <section id="employability" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">01</span>
              <h2 className="text-xl font-bold text-slate-900">Employability Skills</h2>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed text-justify text-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600">Introduction</h4>
              <p>This session was designed as a crucial stepping stone to transition us from an academic environment into the professional world. The primary focus was on developing the essential skills and qualities required to thrive in a modern workplace. I came to the profound realization that possessing technical knowledge alone is vastly insufficient for establishing a successful and sustainable career. Professional and interpersonal skills are equally vital, as they empower us to execute individual tasks efficiently while seamlessly adapting to dynamic and unpredictable workplace situations.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="border border-slate-200 bg-slate-50 rounded-xl p-2 text-center">
                  <img src="https://ied.eu/project-updates/how-the-improvement-of-long-term/" alt="Chart" className="rounded-lg mx-auto max-w-full" />
                  <span className="text-[11px] text-slate-400 block mt-2">Diagram: Core Employability Attributes</span>
                </div>
                <div className="border border-slate-200 bg-slate-50 rounded-xl p-2 text-center">
                  <img src="https://via.placeholder.com/400x250?text=Johari+Window+Matrix" alt="Johari" className="rounded-lg mx-auto max-w-full" />
                  <span className="text-[11px] text-slate-400 block mt-2">Diagram: Johari Window Matrix</span>
                </div>
              </div>
            </div>
          </section>

          {/* 02. EMOTIONAL INTELLIGENCE */}
          <section id="ei" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">02</span>
              <h2 className="text-xl font-bold text-slate-900">Emotional Intelligence (EI)</h2>
            </div>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-justify">
              <p>This segment of the program focused intensely on Emotional Intelligence (EI) and its undeniable importance across personal, academic, and professional domains. The lectures provided profound insights into what emotions truly are, how they subconsciously dictate our thoughts and behaviors, and how harnessing EI can help us build resilient relationships.</p>
              <div className="border border-slate-200 bg-slate-50 rounded-xl p-2 text-center my-4">
                <img src="https://via.placeholder.com/600x220?text=Basic+Emotions+Infographic" alt="EI Infographic" className="rounded-lg mx-auto max-w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <h5 className="font-bold text-indigo-950 mb-2 uppercase">5 Core Components of EI</h5>
                  <p>1. Self-Awareness | 2. Self-Regulation | 3. Motivation | 4. Empathy | 5. Social Skills</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <h5 className="font-bold text-indigo-950 mb-2 uppercase">IQ vs EQ Matrix</h5>
                  <p>IQ measures logical and computing capacities, while EQ governs interpersonal harmony, stress control, and deep adaptive empathy.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 03. PORTFOLIO WRITING */}
          <section id="portfolio" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">03</span>
              <h2 className="text-xl font-bold text-slate-900">Portfolio Writing</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed">This session was entirely dedicated to the art and science of Portfolio Writing. The lecturer explained how a well-structured portfolio serves as a powerful catalyst for personal development and professional advancement. We explored how portfolios are utilized to visually and factually document achievements, skills, hands-on experience, and concrete evidence of continuous learning.</p>
          </section>

          {/* 04. CV WRITING */}
          <section id="cv" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">04</span>
              <h2 className="text-xl font-bold text-slate-900">CV Writing</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed mb-4">Crafting a professional Curriculum Vitae (CV) was the core focus of this highly practical session. We received step-by-step guidance on structuring, properly formatting, and strategically tailoring a CV to perfectly highlight our qualifications, unique skills, and past experiences.</p>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-xs text-amber-900">
              <strong>Key Takeaway:</strong> Tailor your CV explicitly to match the requirements outlined in specific job descriptions rather than using generic templates.
            </div>
          </section>

          {/* 05. INTERVIEW SKILLS */}
          <section id="interview" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">05</span>
              <h2 className="text-xl font-bold text-slate-900">Interview Skills</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed mb-4">Securing an interview is only half the battle; performing well during it is what secures the job. This session focused on mastering effective interview techniques and deeply understanding the vital roles that both verbal and non-verbal communication play during the process.</p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 border border-slate-100">
              <strong>The STAR Framework:</strong> Situation (Context), Task (Assignment), Action (Your steps), Result (Quantifiable outcome).
            </div>
          </section>

          {/* 06. TELEPHONE ETIQUETTE */}
          <section id="telephone" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">06</span>
              <h2 className="text-xl font-bold text-slate-900">Telephone & Communication Etiquettes</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed mb-4">In an era dominated by digital communication, this session focused heavily on telephone and online etiquette within academic and professional spheres. We explored how displaying proper manners across emails, phone calls, and social media platforms reflects our overall professionalism.</p>
            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs">
              <span className="text-indigo-400 font-bold block mb-1">Group Interaction Challenge: "Crash on the Moon"</span>
              Through structured consensus, our group prioritized critical items like Oxygen tanks, Lunar GPS, and Communication signal boosters to practice collaborative decision-making under intense simulated pressure.
            </div>
          </section>

          {/* 07. DINING ETIQUETTES */}
          <section id="dining" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">07</span>
              <h2 className="text-xl font-bold text-slate-900">Dining Etiquettes</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed mb-4">Business is often conducted over meals. This session focused on the nuances of dining etiquette and table manners, underscoring their importance in personal networking, academic functions, and high-stakes professional environments.</p>
            <div className="border-l-4 border-indigo-500 bg-indigo-50 p-3 text-xs text-indigo-950 rounded-r-lg">
              <strong>The BMW Rule:</strong> <strong>B</strong>read on the left-hand side, <strong>M</strong>eal centered appropriately, and <strong>W</strong>ater allocated toward the right side.
            </div>
          </section>

          {/* 08. GROOMING ETIQUETTES */}
          <section id="grooming" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">08</span>
              <h2 className="text-xl font-bold text-slate-900">Grooming Etiquettes</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed">This module highlighted the profound impact that personal grooming and visual etiquette have within professional spaces. Professional grooming is not about luxury brands; rather, it is about maintaining a neat appearance, clean corporate attire, and solid posture as a tangible sign of self-respect to build a powerful Personal Brand.</p>
          </section>

          {/* 09. NEGOTIATION SKILLS */}
          <section id="negotiation" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">09</span>
              <h2 className="text-xl font-bold text-slate-900">Negotiation Skills</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed mb-4">Negotiation is an inescapable part of life and software development. This session broke down negotiation mechanics, framing it as collaborative problem-solving aimed at reaching mutually beneficial agreements while preserving long-term professional connections.</p>
            <div className="p-3 bg-amber-50 rounded-lg text-xs border border-amber-100 text-amber-950">
              <strong>BATNA:</strong> Best Alternative to a Negotiated Agreement—your essential fallback strategy if negotiation stalls completely.
            </div>
          </section>

          {/* 10. CODES OF ETHICS IN IT */}
          <section id="ethics" className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-xs px-2.5 py-1 rounded-lg">10</span>
              <h2 className="text-xl font-bold text-slate-900">Codes of Ethics in IT</h2>
            </div>
            <p className="text-slate-600 text-sm text-justify leading-relaxed mb-4">The final core session transitioned into the realm of morality, focusing on professional responsibilities and the strict codes of ethics governing Information Technology. As future IT professionals, the systems we build will heavily impact society, requiring strict accountability.</p>
            <div className="p-3 bg-slate-50 text-slate-500 font-bold text-center tracking-wider text-[10px] rounded-xl">
              GOVERNED BY: CSSL | ACM | IEEE COMPUTER SOCIETY | BCS
            </div>
          </section>

          {/* CAPSTONE PROJECT: GROW GREEN */}
          <section id="growgreen" className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-sm border border-green-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-green-200 pb-5 mb-6">
              <span className="bg-emerald-600 text-white text-sm px-2.5 py-1 rounded-lg">🌱</span>
              <h2 className="text-xl font-bold text-green-950">Capstone Project: Grow Green</h2>
            </div>
            
            <div className="space-y-4 text-green-900 text-sm text-justify leading-relaxed">
              <p>To culminate our Professional Skills module, I actively participated in an expansive group initiative titled "Grow Green". This project was strategically organized to cultivate environmental awareness among the university's student body and lecturing staff, urging the community to take actionable steps toward a healthier ecosystem.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="border border-green-200 bg-white rounded-xl p-2 text-center">
                  <img src="11.2.jpeg" alt="Group" className="rounded-lg mx-auto" />
                  <span className="text-[11px] font-semibold text-green-700 block mt-2">Team Assembly: 41 Group Members in Hall No: 403</span>
                </div>
                <div className="border border-green-200 bg-white rounded-xl p-2 text-center">
                  <img src="11.4.jpeg" alt="Props" className="rounded-lg mx-auto" />
                  <span className="text-[11px] font-semibold text-green-700 block mt-2">Campaign Materials: Bookmarks, Props & Banners Used</span>
                </div>
                <div className="border border-green-200 bg-white rounded-xl p-2 text-center">
                  <img src="11.1.jpeg" alt="Props" className="rounded-lg mx-auto" />
                  <span className="text-[11px] font-semibold text-green-700 block mt-2">Campaign Materials: Bookmarks, Props & Banners Used</span>
                </div>
                <div className="border border-green-200 bg-white rounded-xl p-2 text-center">
                  <img src="11.6.jpeg" alt="Props" className="rounded-lg mx-auto" />
                  <span className="text-[11px] font-semibold text-green-700 block mt-2">Campaign Materials: Bookmarks, Props & Banners Used</span>
                </div>
              </div>

              {/* LOGISTICS TABLE */}
              <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden text-xs">
                <div className="bg-emerald-600 text-white px-4 py-2 font-bold uppercase">Project Operations Summary Log</div>
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="p-3 font-bold bg-slate-50/50 w-1/3">Plants Distributed</td><td className="p-3 text-emerald-700 font-semibold">50 Live Saplings (Snake Plants)</td></tr>
                    <tr><td className="p-3 font-bold bg-slate-50/50">Execution Venue</td><td className="p-4">University Premises, Turret Tower Hall No: 403</td></tr>
                    <tr><td className="p-3 font-bold bg-slate-50/50">Total Active Cohort</td><td className="p-4">41 Active Group Members</td></tr>
                    <tr><td className="p-3 font-bold bg-slate-50/50">Target Segment</td><td className="p-4">University Student Community & Academic Lecturing Staff</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 text-center py-8 text-xs border-t border-slate-900 mt-20">
        <p className="text-slate-400">&copy; 2026 U A S Nethviru. All Rights Reserved.</p>
        <p className="font-light mt-1">Professional Skills (PPA Module) Portfolio Development Document.</p>
      </footer>
    </div>
  );
}

export default ProfessionalPortfolio;