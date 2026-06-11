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
            <span className="hidden md:inline text-white/30">|</span>
            <span><strong>Intake:</strong> 2024 June Intake</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6 max-h-[85vh] overflow-y-auto">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Table of Contents</h2>
            <nav className="space-y-1">
              <a href="#employability" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">01 Employability Skills</a>
              <a href="#ei" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">02 Emotional Intelligence</a>
              <a href="#portfolio" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">03 Portfolio Writing</a>
              <a href="#cv" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">04 CV Writing</a>
              <a href="#interview" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">05 Interview Skills</a>
              <a href="#telephone" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">06 Telephone Etiquette</a>
              <a href="#dining" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">07 Dining Etiquettes</a>
              <a href="#grooming" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">08 Grooming Etiquettes</a>
              <a href="#negotiation" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">09 Negotiation Skills</a>
              <a href="#ethics" className="block px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">10 Codes of Ethics in IT</a>
              <div className="h-px bg-gray-100 my-4"></div>
              <a href="#growgreen" className="block px-4 py-3 text-sm font-bold rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors">🌱 Grow Green Project</a>
            </nav>
          </div>
        </aside>

        {/* CONTENT SECTIONS */}
        <main className="lg:w-3/4 space-y-12">

          {/* 01. EMPLOYABILITY SKILLS */}
          <section id="employability" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span class="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">01</span>
              <h2 className="text-2xl font-bold text-gray-900">Employability Skills</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">Introduction</h3>
                <p className="text-gray-600 leading-relaxed text-justify">This session was designed as a crucial stepping stone to transition us from an academic environment into the professional world. The primary focus was on developing the essential skills and qualities required to thrive in a modern workplace. I came to the profound realization that possessing technical knowledge alone is vastly insufficient for establishing a successful and sustainable career. Professional and interpersonal skills are equally vital, as they empower us to execute individual tasks efficiently while seamlessly adapting to dynamic and unpredictable workplace situations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center min-h-[200px]">
                  <img src="https://via.placeholder.com/400x300?text=Employability+Skills+Chart" alt="Employability Skills Chart" className="rounded-lg shadow-sm max-w-full h-auto object-cover" />
                  <span className="text-xs text-gray-400 mt-2">Diagram: Core Employability Attributes</span>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center min-h-[200px]">
                  <img src="https://via.placeholder.com/400x300?text=Johari+Window+Model" alt="Johari Window" className="rounded-lg shadow-sm max-w-full h-auto object-cover" />
                  <span className="text-xs text-gray-400 mt-2">Diagram: Johari Window Matrix</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">What I Learned</h3>
                <p className="text-gray-600 mb-4 text-justify">Throughout this comprehensive module, I gained a much deeper and practical understanding of employability skills. These are essentially non-technical competencies that enable individuals to perform optimally in corporate settings and interact effectively with colleagues, clients, and employers.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl text-sm font-medium text-gray-700">
                  <li>🔹 Communication & Presentation</li>
                  <li>🔹 Critical Thinking & Problem-solving</li>
                  <li>🔹 Teamwork & Cooperation</li>
                  <li>🔹 Adaptability & Time Management</li>
                </ul>
              </div>

              <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
                <h3 className="text-md font-bold text-indigo-900 mb-2">Personal Reflection</h3>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">This session was an eye-opener. It helped me deeply internalize that my academic qualifications are merely the foundation; true career success depends heavily on how well I can communicate, adapt, and collaborate. Moving forward, I am committed to dedicating equal effort to developing both my hard technical skills and my soft professional qualities.</p>
              </div>
            </div>
          </section>

          {/* 02. EMOTIONAL INTELLIGENCE */}
          <section id="ei" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">02</span>
              <h2 className="text-2xl font-bold text-gray-900">Emotional Intelligence (EI)</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">Introduction</h3>
                <p className="text-gray-600 leading-relaxed text-justify">This segment of the program focused intensely on Emotional Intelligence (EI) and its undeniable importance across personal, academic, and professional domains. The lectures provided profound insights into what emotions truly are, how they subconsciously dictate our thoughts and behaviors, and how harnessing EI can help us build resilient relationships.</p>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center my-6">
                <img src="https://via.placeholder.com/600x250?text=Basic+Emotions+Infographic" alt="Basic Emotions Chart" className="rounded-lg shadow-sm max-w-full h-auto" />
                <span className="text-xs text-gray-400 mt-2">Photo Reference: Understanding Basic Emotional Expressiveness</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">5 Core Components of EI</h4>
                  <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-4">
                    <li><strong>Self-Awareness:</strong> Recognizing our own emotions instantly.</li>
                    <li><strong>Self-Regulation:</strong> Controlling disruptive impulses and stress.</li>
                    <li><strong>Motivation:</strong> Passion to work for internal reasons.</li>
                    <li><strong>Empathy:</strong> Understanding the emotional makeup of others.</li>
                    <li><strong>Social Skills:</strong> Proficiency in managing relationships.</li>
                  </ol>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide font-semibold">IQ vs EQ Matrix</h4>
                  <div className="text-xs space-y-2 text-gray-600">
                    <p><strong>IQ (Intelligence Quotient):</strong> Measures cognitive abilities, logical reasoning, and standard computational skills.</p>
                    <hr className="my-2" />
                    <p><strong>EQ (Emotional Intelligence):</strong> Focuses heavily on emotional self-awareness, deep empathy, proactive self-control, and managing cross-functional teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03. PORTFOLIO WRITING */}
          <section id="portfolio" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">03</span>
              <h2 className="text-2xl font-bold text-gray-900">Portfolio Writing</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-justify">This session was entirely dedicated to the art and science of Portfolio Writing. The lecturer explained how a well-structured portfolio serves as a powerful catalyst for personal development and professional advancement. We explored how portfolios are utilized to visually and factually document achievements, skills, hands-on experience, and concrete evidence of continuous learning.</p>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center my-4 max-w-sm mx-auto">
                <img src="https://via.placeholder.com/350x250?text=Portfolio+Cover+Mockup" alt="Portfolio Mockup" className="rounded-lg shadow-sm" />
              </div>
            </div>
          </section>

          {/* 04. CV WRITING */}
          <section id="cv" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">04</span>
              <h2 className="text-2xl font-bold text-gray-900">CV Writing</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-justify">Crafting a professional Curriculum Vitae (CV) was the core focus of this highly practical session. We received step-by-step guidance on structuring, properly formatting, and strategically tailoring a CV to perfectly highlight our qualifications, unique skills, and past experiences.</p>
              
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center my-4 max-w-sm mx-auto">
                <img src="https://via.placeholder.com/350x200?text=CV+Layout+Graphic" alt="CV Graphic" className="rounded-lg shadow-sm" />
              </div>

              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-sm text-amber-900">
                <strong>Key Takeaway:</strong> Rather than using the same template universally, candidates should strategically modify their content to explicitly match the concrete requirements outlined in specific job descriptions.
              </div>
            </div>
          </section>

          {/* 05. INTERVIEW SKILLS */}
          <section id="interview" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">05</span>
              <h2 className="text-2xl font-bold text-gray-900">Interview Skills</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-justify">Securing an interview is only half the battle; performing well during it is what secures the job. This session focused on mastering effective interview techniques and deeply understanding the vital roles that both verbal and non-verbal communication play during the process.</p>
              
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center">
                <img src="https://via.placeholder.com/550x250?text=Mock+Interview+Illustration" alt="Interview Vector" className="rounded-lg shadow-sm max-w-full h-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-bold text-indigo-900 text-sm mb-2">The STAR Framework</h4>
                  <p className="text-xs text-gray-600 leading-relaxed"><strong>Situation:</strong> Define the background context.<br /><strong>Task:</strong> Explain the targeted assignment.<br /><strong>Action:</strong> Detail the specific behaviors you executed.<br /><strong>Result:</strong> Present quantifiable, verified outcomes.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-bold text-indigo-900 text-sm mb-2">The 6 C's of Communication</h4>
                  <p className="text-xs text-gray-600">Clear, Concise, Correct, Complete, Concrete, Courteous, and Confident.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 06. TELEPHONE & COMMUNICATION ETIQUETTES */}
          <section id="telephone" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">06</span>
              <h2 className="text-2xl font-bold text-gray-900">Telephone & Communication Etiquettes</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-justify">In an era dominated by digital communication, this session focused heavily on telephone and online etiquette within academic and professional spheres. We explored how displaying proper manners across emails, phone calls, and social media platforms reflects our overall professionalism.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center">
                  <img src="https://via.placeholder.com/350x450?text=Survival+Activity+Sheet+1" alt="Survival Activity Document" className="rounded-lg max-w-full h-auto" />
                  <span className="text-xs text-gray-400 mt-2">Activity Sheet: Crash on the Moon Challenge</span>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center">
                  <img src="https://via.placeholder.com/350x450?text=Team+Signature+Sheet+2" alt="Activity Signatures" className="rounded-lg max-w-full h-auto" />
                  <span className="text-xs text-gray-400 mt-2">Log Sheet: Group Allocation Records</span>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-5 rounded-xl">
                <h4 className="text-md font-bold text-indigo-400 mb-2">Group Interaction: "Crash on the Moon"</h4>
                <p className="text-xs text-gray-300 leading-relaxed text-justify">To put our communication and teamwork skills to the test, we engaged in the "Crash on the Moon" survival challenge. Through structured debate and consensus, our team chose key items like an Oxygen tank, Solar-powered heating blanket, Lunar GPS, and a Communication signal booster to practice decision-making under simulated pressure.</p>
              </div>
            </div>
          </section>

          {/* 07. DINING ETIQUETTES */}
          <section id="dining" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">07</span>
              <h2 className="text-2xl font-bold text-gray-900">Dining Etiquettes</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-justify">Business is often conducted over meals. This session focused on the nuances of dining etiquette and table manners, underscoring their importance in personal networking, academic functions, and high-stakes professional environments.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/400x250?text=Phone+Distraction+Task+Card" alt="Task Card" className="rounded-lg shadow-sm" />
                  <span className="text-xs text-gray-400 mt-2">Card 3: Phone Distraction Task Assignment</span>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/400x250?text=Dining+Roleplay+Group+Photo" alt="Roleplay Interaction" className="rounded-lg shadow-sm" />
                  <span className="text-xs text-gray-400 mt-2">Group Snapshot: Phone Distraction Roleplay Execution</span>
                </div>
              </div>

              <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 text-sm rounded-r-xl">
                <span className="font-bold text-indigo-950 block mb-1">The BMW Table Architecture Rule</span>
                <p className="text-gray-700"><strong>B</strong>read on the left-hand side, <strong>M</strong>eal centered appropriately, and <strong>W</strong>ater allocated toward the right side.</p>
              </div>
            </div>
          </section>

          {/* 08. GROOMING ETIQUETTES */}
          <section id="grooming" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">08</span>
              <h2 className="text-2xl font-bold text-gray-900">Grooming Etiquettes</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-justify">This module highlighted the profound impact that personal grooming and visual etiquette have within professional spaces. Professional grooming is not about luxury brands; rather, it is about maintaining a neat appearance as a tangible sign of self-respect.</p>
              
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center my-4 max-w-lg mx-auto">
                <img src="https://via.placeholder.com/500x200?text=Corporate+Grooming+Visual+Asset" alt="Corporate Grooming Standard" className="rounded-lg shadow-sm" />
              </div>
              <p className="text-gray-600 text-sm text-justify">Key elements include personal hygiene, meticulous hand care, formal clothing, clean footwear, and strong posture to build an authentic <strong>Personal Brand</strong>.</p>
            </div>
          </section>

          {/* 09. NEGOTIATION SKILLS */}
          <section id="negotiation" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">09</span>
              <h2 className="text-2xl font-bold text-gray-900">Negotiation Skills</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-justify">Negotiation is an inescapable part of life and software development. This session broke down negotiation mechanics, framing it as collaborative problem-solving aimed at reaching mutually beneficial agreements while preserving long-term professional connections.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/400x250?text=Negotiation+Strategies+Graph" alt="Negotiation Matrix" className="rounded-lg shadow-sm" />
                  <span className="text-xs text-gray-400 mt-2">Diagram: Conflict Resolution & Negotiation Matrix</span>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/400x250?text=Office+Pizza+Party+Roleplay+Photo" alt="Negotiation Interaction" className="rounded-lg shadow-sm" />
                  <span className="text-xs text-gray-400 mt-2">Group Snapshot: Pizza Party Negotiation Roleplay</span>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-950">
                <strong>BATNA:</strong> Best Alternative to a Negotiated Agreement. It serves as your critical fallback plan if a negotiation session stalls completely without positive outcomes.
              </div>
            </div>
          </section>

          {/* 10. CODES OF ETHICS IN IT */}
          <section id="ethics" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
              <span className="bg-indigo-600 text-white font-bold text-lg px-3 py-1 rounded-lg">10</span>
              <h2 className="text-2xl font-bold text-gray-900">Codes of Ethics in IT</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-justify">The final core session transitioned into the realm of morality, focusing on professional responsibilities and the strict codes of ethics governing Information Technology. As future IT professionals, the systems we build will heavily impact society, requiring strict accountability.</p>
              
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-center">
                <img src="https://via.placeholder.com/600x350?text=Stakeholder+Ethical+Responsibilities+Chart" alt="Ethical Matrix" className="rounded-lg shadow-sm max-w-full h-auto" />
                <span className="text-xs text-gray-400 mt-2">Diagram: Commitments toward Clients, Employers, Colleagues, and Society</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl text-xs text-gray-600 leading-relaxed">
                <strong>Recognized Governing Organizations:</strong> Computer Society of Sri Lanka (CSSL), Association for Computing Machinery (ACM), IEEE Computer Society, and British Computer Society (BCS).
              </div>
            </div>
          </section>

          {/* CAPSTONE PROJECT: GROW GREEN */}
          <section id="growgreen" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-100 p-8 scroll-mt-6">
            <div className="flex items-center gap-3 border-b border-green-200 pb-4 mb-6">
              <span className="bg-green-600 text-white font-bold text-lg px-3 py-1 rounded-lg">🌱</span>
              <h2 className="text-2xl font-bold text-green-900">Capstone Project: Grow Green</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-green-950 leading-relaxed text-justify">To culminate our Professional Skills module, I actively participated in an expansive group initiative titled "Grow Green". This project was strategically organized to cultivate environmental awareness among the university's student body and lecturing staff, urging the community to take actionable steps toward a healthier ecosystem.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="border-2 border-dashed border-green-200 rounded-xl p-2 bg-white flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/450x300?text=Grow+Green+Team+Group+Photo" alt="Grow Green Group" className="rounded-lg shadow-sm" />
                  <span className="text-xs text-green-600 mt-2">Team Assembly: 41 Group Members in Hall No: 403</span>
                </div>
                <div className="border-2 border-dashed border-green-200 rounded-xl p-2 bg-white flex flex-col items-center justify-center">
                  <img src="https://via.placeholder.com/450x300?text=Project+Props+And+Materials" alt="Props and Bookmarks" className="rounded-lg shadow-sm" />
                  <span className="text-xs text-green-600 mt-2">Campaign Materials: Bookmarks, Props & Banners Used</span>
                </div>
              </div>

              {/* LOGISTICS TABLE */}
              <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
                <div className="bg-green-600 text-white px-4 py-2 font-bold text-sm">Project Operations Log</div>
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-green-50 text-green-900 font-semibold border-b border-green-100">
                      <th className="p-3">Resource Type</th>
                      <th className="p-3">Quantity / Precise Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-green-50 text-gray-700">
                    <tr><td className="p-3 font-medium">Plants Distributed</td><td className="p-3">50 Live Saplings (Snake Plants)</td></tr>
                    <tr><td className="p-3 font-medium">Execution Venue</td><td className="p-3">University Premises, Turret Tower Hall No: 403</td></tr>
                    <tr><td className="p-3 font-medium">Total Team Members</td><td className="p-3">41 Active Group Members</td></tr>
                    <tr><td className="p-3 font-medium">Target Participants</td><td className="p-3">University Students and Lecturing Staff</td></tr>
                    <tr><td className="p-3 font-medium">Marketing Materials</td><td className="p-3">Custom Bookmarks, Photo Booth Equipment, Custom Props</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-800 text-green-50 rounded-xl p-5">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Project Reflection Summary</h4>
                <p className="text-xs text-green-100 leading-relaxed text-justify">This project was a masterclass in applied professional skills. Operating within a massive 41-person team challenged and ultimately refined my communication and collaborative abilities. It was a powerful reminder that unified teamwork can drive meaningful, positive change in society.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-gray-500 text-center py-6 text-xs border-t border-slate-900 mt-20">
        <p>&copy; 2026 U A S Nethviru. All Rights Reserved.</p>
        <p className="mt-1 text-gray-600">Professional Skills (PPA Module) Portfolio Submission Document.</p>
      </footer>
    </div>
  );
}

export default ProfessionalPortfolio;