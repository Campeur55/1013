import { ChevronDown, Target, TrendingUp, Shield, Users, Award, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-[#F21B2D]/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F21B2D] to-[#A60321] flex items-center justify-center transform rotate-45">
              <span className="text-white font-bold text-xl transform -rotate-45">7R</span>
            </div>
            <span className="text-2xl font-bold tracking-wider">7AMRA ROYALE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="hover:text-[#F21B2D] transition-colors">Mission</a>
            <a href="#intelligence" className="hover:text-[#F21B2D] transition-colors">Intelligence</a>
            <a href="#strategy" className="hover:text-[#F21B2D] transition-colors">Strategy</a>
            <a href="#vision" className="hover:text-[#F21B2D] transition-colors">Vision</a>
            <button className="bg-[#F21B2D] hover:bg-[#A60321] px-6 py-2 rounded transition-all transform hover:scale-105">
              Explore
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#A60321]/20 to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(242, 27, 45, 0.1) 0%, transparent 50%)',
          backgroundSize: '100px 100px'
        }}></div>

        {/* Animated shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#F21B2D]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F22E52]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6 inline-block px-6 py-2 border border-[#F21B2D] rounded-full text-sm tracking-widest text-[#F21B2D] animate-fade-in">
            ACADEMIC CASE STUDY • 11/23
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-[#F21B2D]">7AMRA</span> ROYALE
          </h1>
          <p className="text-3xl md:text-4xl mb-4 font-light tracking-wide">Where Fortune Meets Fire</p>
          <p className="text-xl md:text-2xl mb-8 text-gray-400 font-arabic">بلعب الحظ مع الحمرا</p>
          <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
            Strategic Management Analysis • Tunisia's Entertainment Sector
          </p>
          <button className="group relative bg-[#F21B2D] hover:bg-[#A60321] px-12 py-4 rounded text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#F21B2D]/50">
            Begin Mission
            <span className="absolute inset-0 rounded bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#F21B2D]" />
        </div>
      </section>

      {/* Key Phrase Section */}
      <section className="py-20 bg-gradient-to-r from-[#A60321] to-[#F21B2D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
        }}></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-5xl md:text-6xl font-bold mb-6">الحمرا مش برّا، الحمرا هنا</p>
          <p className="text-2xl font-light">The opportunity is not outside, the opportunity is here.</p>
        </div>
      </section>

      {/* Mission Briefing */}
      <section id="mission" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-[#F21B2D] to-[#A60321]"></div>
            <div>
              <span className="text-[#F21B2D] text-sm tracking-widest">SECTION 01</span>
              <h2 className="text-5xl font-bold">Mission Briefing</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-300">
                This strategic management case study examines the hypothetical market entry strategy for <span className="text-[#F21B2D] font-semibold">'7amra Royale'</span>, a conceptual venture into Tunisia's entertainment sector.
              </p>
              <p className="text-xl leading-relaxed text-gray-300">
                This analysis explores market dynamics, competitive challenges, and strategic positioning in a complex regulatory environment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#A60321]/20 to-transparent border border-[#F21B2D]/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#F21B2D]">Framework</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                The project employs military-style operational terminology to frame strategic business concepts, making this an engaging framework for understanding market reconnaissance, competitive analysis, and strategic planning methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Alpha */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0000] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-[#F21B2D] to-[#A60321]"></div>
            <div>
              <span className="text-[#F21B2D] text-sm tracking-widest">SECTION 10</span>
              <h2 className="text-5xl font-bold">Phase Alpha: The Genesis</h2>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Market Analysis", question: "What drives consumer behavior in highly regulated entertainment markets?" },
              { icon: TrendingUp, title: "Competitive Positioning", question: "How can a new entrant differentiate against established international competitors?" },
              { icon: Shield, title: "Cultural Adaptation", question: "What role does cultural sensitivity play in market penetration strategy?" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-black border border-[#F21B2D]/30 p-8 rounded-lg hover:border-[#F21B2D] transition-all hover:shadow-xl hover:shadow-[#F21B2D]/20 transform hover:-translate-y-2">
                <item.icon className="w-12 h-12 text-[#F21B2D] mb-4" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.question}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-12 bg-gradient-to-r from-[#A60321]/20 via-[#F21B2D]/20 to-[#A60321]/20 rounded-lg border border-[#F21B2D]/30">
            <p className="text-3xl md:text-4xl font-bold mb-4">
              "It's time to win. Time to build something that changes the game entirely."
            </p>
            <p className="text-2xl text-[#F21B2D] font-arabic">حان وقت الفوز</p>
          </div>
        </div>
      </section>

      {/* Intelligence Report */}
      <section id="intelligence" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F21B2D]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-[#F21B2D] to-[#A60321]"></div>
            <div>
              <span className="text-[#F21B2D] text-sm tracking-widest">SECTION 11</span>
              <h2 className="text-5xl font-bold">Intelligence Report</h2>
              <p className="text-xl text-gray-400 mt-2">Market Reconnaissance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { label: "Annual Growth Rate", value: "12%", desc: "Year-over-year market expansion" },
              { label: "Capital Outflow", value: "$15M", desc: "Annual spending on foreign platforms" },
              { label: "Youth Demographics", value: "42%", desc: "Population aged 18-35" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#A60321]/20 to-transparent border-l-4 border-[#F21B2D] p-8 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
                <p className="text-6xl font-bold text-[#F21B2D] mb-4">{stat.value}</p>
                <p className="text-gray-300">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-8">
            {[
              { title: "Unmet Demand", content: "The steady annual growth rate and significant capital outflow to foreign platforms confirm a robust, unmet domestic demand. Consumers actively seek alternatives, indicating a ripe opportunity for local market solutions." },
              { title: "Digital Native Audience", content: "The substantial youth demographic (42% in the 18-35 age bracket) represents a digitally-native audience receptive to modern, sophisticated online entertainment experiences with mobile-first design." },
              { title: "Innovation Imperative", content: "Current market conditions necessitate an approach that is both innovative and compliant, offering a superior alternative to existing offshore options while respecting local regulations and cultural norms." },
              { title: "Market Gap", content: "The $15M annual capital outflow represents revenue leakage to international competitors, highlighting a significant market gap that a well-positioned local player could capture." }
            ].map((item, idx) => (
              <div key={idx} className="bg-black border border-[#F21B2D]/30 p-8 rounded-lg hover:border-[#F21B2D] transition-all">
                <h3 className="text-2xl font-bold mb-4 text-[#F21B2D]">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Assessment */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-[#F21B2D] to-[#A60321]"></div>
            <div>
              <span className="text-[#F21B2D] text-sm tracking-widest">SECTION 12</span>
              <h2 className="text-5xl font-bold">Threat Assessment</h2>
              <p className="text-xl text-gray-400 mt-2">Hostile Territory: Market Challenges</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="space-y-6">
              {[
                { title: "Regulatory Uncertainty", desc: "The legal framework remains complex and ambiguous, requiring careful navigation, expert legal counsel, and adaptive strategic planning to ensure compliance." },
                { title: "Banking Hesitance", desc: "Financial institutions exhibit significant caution regarding payment processing, necessitating innovative fintech solutions and alternative payment methods for secure transactions." },
                { title: "Cultural Sensitivities", desc: "Respect for local traditions, values, and social norms is paramount, demanding a nuanced and culturally relevant approach to all aspects of business operations." },
                { title: "International Competition", desc: "Established offshore players with significant resources pose a formidable threat, requiring a highly differentiated and competitive market positioning strategy." }
              ].map((item, idx) => (
                <div key={idx} className="bg-black border-l-4 border-[#F21B2D] p-6 rounded hover:bg-[#A60321]/10 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-[#F21B2D]">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#F21B2D]/20 to-transparent border border-[#F21B2D]/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Strategic Responses</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Shield, text: "Build Local Trust" },
                    { icon: Users, text: "Cultural Relevance" },
                    { icon: Award, text: "Community Investment" },
                    { icon: Globe, text: "Innovation Leadership" }
                  ].map((resp, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-lg">
                      <resp.icon className="w-6 h-6 text-[#F21B2D]" />
                      <span>{resp.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Framework */}
      <section id="strategy" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-[#F21B2D] to-[#A60321]"></div>
            <div>
              <span className="text-[#F21B2D] text-sm tracking-widest">SECTION 15</span>
              <h2 className="text-5xl font-bold">Operation Build</h2>
              <p className="text-xl text-gray-400 mt-2">Strategic Framework</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { phase: "Phase 1", title: "Foundation", items: ["Legal Compliance", "Technology Infrastructure", "Partnership Development"] },
              { phase: "Phase 2", title: "Launch", items: ["Soft Launch", "Brand Building", "Customer Acquisition"] },
              { phase: "Phase 3", title: "Growth", items: ["Market Expansion", "Feature Enhancement", "Community Building"] },
              { phase: "Phase 4", title: "Leadership", items: ["Market Dominance", "Strategic Partnerships", "Innovation Lab"] }
            ].map((phase, idx) => (
              <div key={idx} className="group bg-gradient-to-b from-[#A60321]/20 to-transparent border border-[#F21B2D]/30 p-6 rounded-lg hover:border-[#F21B2D] transition-all transform hover:scale-105">
                <div className="text-5xl font-bold text-[#F21B2D]/20 mb-2">{`0${idx + 1}`}</div>
                <p className="text-sm text-[#F21B2D] tracking-widest mb-2">{phase.phase}</p>
                <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#F21B2D] mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 bg-gradient-to-b from-black via-[#0a0000] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(242, 27, 45, 0.3) 0%, transparent 50%)'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-[#F21B2D] to-[#A60321]"></div>
            <div>
              <span className="text-[#F21B2D] text-sm tracking-widest">SECTION 16</span>
              <h2 className="text-5xl font-bold">Mission Complete</h2>
              <p className="text-xl text-gray-400 mt-2">Phase Foxtrot: The Vision</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <div className="bg-black border border-[#F21B2D]/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#F21B2D]">Success Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-[#F21B2D] mb-2">35%</p>
                    <p className="text-gray-300">Market Share Target (Within 3 years)</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#F21B2D] mb-2">4.5+</p>
                    <p className="text-gray-300">Customer Satisfaction Rating</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#F21B2D] mb-2">200+</p>
                    <p className="text-gray-300">Jobs Created Directly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#F21B2D]/20 to-transparent border border-[#F21B2D]/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Vision Pillars</h3>
                <ul className="space-y-4">
                  {["Business Excellence", "Social Responsibility", "Regional Expansion", "Technology Leadership"].map((pillar, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg">
                      <div className="w-2 h-2 bg-[#F21B2D] rounded-full"></div>
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Context */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-[#F21B2D] to-[#A60321]"></div>
            <div>
              <span className="text-[#F21B2D] text-sm tracking-widest">SECTION 20</span>
              <h2 className="text-5xl font-bold">Academic Learning Objectives</h2>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#A60321]/20 via-[#F21B2D]/20 to-[#A60321]/20 border border-[#F21B2D]/30 p-12 rounded-lg">
            <p className="text-2xl mb-8 leading-relaxed">
              This case study serves as a comprehensive example of strategic management principles in action.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Market analysis and competitive intelligence gathering",
                "Strategic positioning in complex regulatory environments",
                "Cultural adaptation and localization strategies",
                "Risk assessment and mitigation planning",
                "Multi-phase implementation roadmaps",
                "Measuring success across financial and non-financial metrics"
              ].map((obj, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#F21B2D] text-2xl">✓</span>
                  <p className="text-lg text-gray-300">{obj}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-[#F21B2D]/30 text-center">
              <p className="text-sm tracking-widest text-[#F21B2D] mb-2">PROJECT TYPE</p>
              <p className="text-3xl font-bold">ACADEMIC PROJECT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-[#0a0000] border-t border-[#F21B2D]/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F21B2D] to-[#A60321] flex items-center justify-center transform rotate-45">
                  <span className="text-white font-bold transform -rotate-45">7R</span>
                </div>
                <span className="text-xl font-bold">7AMRA ROYALE</span>
              </div>
              <p className="text-gray-400">Strategic Management Analysis</p>
              <p className="text-gray-400">Tunisia's Entertainment Sector</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#F21B2D]">Location</h4>
              <p className="text-gray-400">Tunis, Tunisia</p>
              <p className="text-gray-400 mt-4">Entertainment Sector</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#F21B2D]">Framework</h4>
              <p className="text-gray-400">Military-style Operational Terminology</p>
              <p className="text-gray-400 mt-4">Date: 11/23</p>
            </div>
          </div>
          <div className="border-t border-[#F21B2D]/30 pt-8 text-center text-gray-400">
            <p>© 2023 7amra Royale. Academic Case Study. All rights reserved.</p>
            <p className="mt-2 text-sm">Hypothetical Market Entry Strategy for Educational Purposes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
