import { ChevronDown, Target, TrendingUp, Shield, Users, Award, Globe, Menu, X, Sparkles, Check, Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['history', 'journey', 'product', 'mission', 'audience', 'strategy', 'challenges'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length === 0) return;

        const headerOffsetPx = 80;
        let best = visible
          .filter(e => e.target.getBoundingClientRect().top >= headerOffsetPx * -0.25)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)[0];

        if (!best) {
          best = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        }

        const id = (best.target as HTMLElement).id;
        if (id && id !== activeSection) {
          setActiveSection(id);
          const currentHash = window.location.hash.replace('#', '');
          if (currentHash !== id) {
            history.replaceState(null, '', `#${id}`);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75]
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#590505]/95 backdrop-blur-sm border-b border-[#D98D30]/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
              <div className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#F21313] via-[#BF3111] to-[#590505] shadow-lg shadow-[#F21313]/50"></div>
              <div className="absolute w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-radial from-[#F21313] to-[#BF3111]"></div>
              <div className="absolute w-4 h-4 rounded-full bg-white/90 top-2.5 left-3.5 md:top-3 md:left-4 blur-sm"></div>
              <div className="absolute w-2 h-2 rounded-full bg-white top-2.5 left-4 md:top-3 md:left-5"></div>
            </div>
            <div className="leading-none">
              <span className="text-xl sm:text-2xl font-bold tracking-[0.3em] text-[#F2DEA2]">7AMRA</span>
              <span className="text-xl sm:text-2xl font-bold tracking-[0.3em] text-white"> ROYALE</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#history" className={`transition-colors uppercase tracking-wider text-sm ${activeSection === 'history' ? 'text-[#D98D30]' : 'hover:text-[#D98D30] text-white'}`}>History</a>
            <a href="#journey" className={`transition-colors uppercase tracking-wider text-sm ${activeSection === 'journey' ? 'text-[#D98D30]' : 'hover:text-[#D98D30] text-white'}`}>Journey</a>
            <a href="#product" className={`transition-colors uppercase tracking-wider text-sm ${activeSection === 'product' ? 'text-[#D98D30]' : 'hover:text-[#D98D30] text-white'}`}>Product</a>
            <a href="#strategy" className={`transition-colors uppercase tracking-wider text-sm ${activeSection === 'strategy' ? 'text-[#D98D30]' : 'hover:text-[#D98D30] text-white'}`}>Strategy</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#D98D30]/40 hover:border-[#D98D30] text-[#F2DEA2]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
            <div className="absolute top-16 left-0 right-0 mx-4 rounded border border-[#D98D30]/30 bg-[#0a0000]">
              <nav className="flex flex-col divide-y divide-[#D98D30]/20">
                {[
                  { id: 'history', label: 'History' },
                  { id: 'journey', label: 'Journey' },
                  { id: 'product', label: 'Product' },
                  { id: 'strategy', label: 'Strategy' }
                ].map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`px-5 py-4 uppercase tracking-wider ${activeSection === item.id ? 'text-[#D98D30]' : 'text-white hover:text-[#D98D30]'}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#590505] via-black to-[#590505]"></div>

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F2DEA2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#F21313] to-[#BF3111] blur-2xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#D98D30] to-[#BF3111] blur-3xl animate-pulse delay-1000 opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#F21313] blur-2xl animate-pulse opacity-10" style={{animationDelay: '2s'}}></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-8">
            <span className="text-sm md:text-base tracking-[0.5em] text-[#D98D30] uppercase">Premium Gaming</span>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D98D30] to-transparent mt-4"></div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-wider">
            <span className="text-[#F2DEA2]">7AMRA</span>
            <br/>
            <span className="text-[#F21313]">ROYALE</span>
          </h1>

          <div className="h-1 w-48 md:w-64 mx-auto bg-gradient-to-r from-transparent via-[#D98D30] to-transparent mb-8"></div>

          <p className="text-xl md:text-3xl mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300 tracking-wide">
            North Africa's premier digital gaming platform. Where sophistication meets entertainment.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-sm md:text-base">
            <div className="flex flex-col items-center">
              <span className="text-[#D98D30] tracking-widest uppercase mb-2">Launched</span>
              <span className="text-2xl font-bold text-[#F2DEA2]">2023</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#D98D30] tracking-widest uppercase mb-2">Region</span>
              <span className="text-2xl font-bold text-[#F2DEA2]">North Africa</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#D98D30] tracking-widest uppercase mb-2">Founded</span>
              <span className="text-2xl font-bold text-[#F2DEA2]">2021</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#D98D30]" />
        </div>
      </section>

      {/* Origin Story Section */}
      <section id="history" className="py-32 bg-black relative scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-[#F21313] via-[#D98D30] to-[#F21313]"></div>
            <div>
              <span className="text-[#D98D30] text-sm tracking-[0.3em] uppercase">Origin Story</span>
              <h2 className="text-5xl font-bold tracking-wide text-[#F2DEA2]">HISTORY</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-[#D98D30]" />
                  <h3 className="text-3xl font-bold text-[#F2DEA2]">2021</h3>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-[#D98D30]">The Genesis</h4>
              </div>

              <div className="bg-[#590505]/30 border-l-4 border-[#D98D30] p-6">
                <h4 className="text-xl font-bold mb-3 text-[#F2DEA2]">The Founders</h4>
                <p className="text-gray-300 leading-relaxed">Three visionaries from Tunisia</p>
              </div>

              <p className="text-lg leading-relaxed text-gray-300">
                7amra Royale started in 2021 with three Tunisian university friends — a software engineer, a marketing student, and a data analyst. They shared an interest in online gaming and noticed that most platforms came from abroad and did not fit North African users' habits or payment systems.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                What began as a small side project in a café in Sfax turned into a working prototype. It included local payment options such as e-dinar and offered both Arabic and French interfaces.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#590505]/40 to-transparent border-2 border-[#D98D30]/40 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#F21313]/10 blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-[#D98D30] tracking-widest uppercase">The Beginning</h3>
              <p className="text-lg leading-relaxed text-gray-300 tracking-wide relative z-10">
                In the heart of Sfax, three university friends discovered a gap in the market. International gaming platforms dominated the landscape, but none catered to the unique needs of North African users. The solution was clear: build something tailored for their region, their culture, their payment systems.
              </p>
              <div className="mt-8 pt-6 border-t border-[#D98D30]/30">
                <MapPin className="w-6 h-6 text-[#D98D30] mb-2" />
                <p className="text-sm text-gray-400 uppercase tracking-wider">Sfax, Tunisia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders' Journey */}
      <section id="journey" className="py-32 bg-gradient-to-b from-black via-[#590505]/10 to-black relative scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-[#F21313] via-[#D98D30] to-[#F21313]"></div>
            <div>
              <span className="text-[#D98D30] text-sm tracking-[0.3em] uppercase">The Journey</span>
              <h2 className="text-5xl font-bold tracking-wide text-[#F2DEA2]">FOUNDERS' JOURNEY</h2>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black border-2 border-[#F21313]/30 p-8 hover:border-[#F21313] transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#590505]/0 via-[#590505]/20 to-[#590505]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Shield className="w-12 h-12 text-[#F21313] mb-4 relative z-10" />
                <h3 className="text-2xl font-bold mb-4 text-[#F2DEA2] tracking-wider relative z-10">The Challenge</h3>
                <h4 className="text-lg font-bold mb-3 text-[#D98D30] relative z-10">Early Obstacles</h4>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  In the beginning, many investors refused to support the project because of its link to gambling. The team decided to focus on skill-based games and reward systems that could operate legally. This change helped them attract a small investor from Tunis who believed in their idea.
                </p>
              </div>

              <div className="bg-black border-2 border-[#D98D30]/30 p-8 hover:border-[#D98D30] transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#590505]/0 via-[#590505]/20 to-[#590505]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Sparkles className="w-12 h-12 text-[#D98D30] mb-4 relative z-10" />
                <h3 className="text-2xl font-bold mb-4 text-[#F2DEA2] tracking-wider relative z-10">The Launch</h3>
                <h4 className="text-lg font-bold mb-3 text-[#D98D30] relative z-10">2023 Beta Release</h4>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  By 2023, the team launched a beta version of 7amra Royale. It quickly found an audience among young Tunisians who wanted a safe and easy-to-use local gaming platform. The mix of local culture, secure payments, and clear design helped it gain attention in a space full of foreign competitors.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#590505]/40 via-[#BF3111]/40 to-[#590505]/40 border-t-4 border-b-4 border-[#D98D30] p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #F2DEA2 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
              <blockquote className="text-2xl md:text-3xl font-bold mb-6 text-[#F2DEA2] italic text-center leading-relaxed relative z-10">
                "What started as rejection became our strength. By pivoting to skill-based gaming and responsible entertainment, we built something that investors, users, and regulators could trust."
              </blockquote>
              <div className="h-1 w-32 mx-auto bg-[#F21313] mb-4"></div>
              <p className="text-center text-[#D98D30] text-lg relative z-10">— The Founders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section id="product" className="py-32 bg-black relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F21313]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D98D30]/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-[#F21313] via-[#D98D30] to-[#F21313]"></div>
            <div>
              <span className="text-[#D98D30] text-sm tracking-[0.3em] uppercase">The Platform</span>
              <h2 className="text-5xl font-bold tracking-wide text-[#F2DEA2]">PRODUCT DESCRIPTION</h2>
            </div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-12 mt-8">
            A mobile-first digital gambling app designed exclusively for North African users
          </p>

          <div className="bg-[#590505]/30 border-2 border-[#D98D30] p-8 md:p-12 mb-12">
            <p className="text-lg leading-relaxed text-gray-300">
              7amra Royale is a mobile-first digital gambling app designed for North African users. It features casino-style games such as roulette, blackjack, slots, dice, and card-based wagering games, offering engaging and exciting gameplay for all types of players. The app supports Arabic and French interfaces and integrates local payment options like e-dinar and mobile wallets for easy and secure transactions. Responsible gaming tools — including age verification, deposit limits, and self-exclusion features — are included to ensure a safe and enjoyable experience, while a sleek, mobile-optimized interface keeps the platform accessible and fun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Casino-Style Games", desc: "Roulette, blackjack, slots, dice, and card-based wagering games" },
              { icon: Globe, title: "Bilingual Interface", desc: "Full support for Arabic and French languages" },
              { icon: Award, title: "Local Payments", desc: "E-dinar and mobile wallets integration" },
              { icon: Shield, title: "Responsible Gaming", desc: "Age verification, deposit limits, and self-exclusion tools" },
              { icon: TrendingUp, title: "Mobile-Optimized Excellence", desc: "Designed with a sleek, responsive interface that delivers premium gaming experiences across all devices" }
            ].map((item, idx) => (
              <div key={idx} className="bg-black border-l-4 border-[#D98D30] p-6 hover:bg-[#590505]/20 transition-all">
                <item.icon className="w-10 h-10 text-[#D98D30] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[#F2DEA2]">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-32 bg-gradient-to-b from-black via-[#590505]/20 to-black relative scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black border-2 border-[#F21313]/40 p-10">
              <h2 className="text-4xl font-bold mb-6 text-[#F21313]">Mission</h2>
              <p className="text-xl leading-relaxed text-gray-300 mb-8">
                7amra Royale aims to build a secure and culturally adapted gaming platform that promotes responsible, skill-based entertainment.
              </p>
              <ul className="space-y-4">
                {[
                  "Expand user base across North Africa within two years",
                  "Form key partnerships with telecom and payment providers",
                  "Maintain full regulatory compliance",
                  "Combining local innovation with measurable growth and user protection"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#F21313] mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black border-2 border-[#D98D30]/40 p-10">
              <h2 className="text-4xl font-bold mb-6 text-[#D98D30]">Vision</h2>
              <p className="text-xl leading-relaxed text-gray-300 mb-8">
                7amra Royale aspires to become the leading North African digital gaming brand, uniting players through trusted and inclusive online experiences.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                It envisions transforming regional digital entertainment by blending technology, culture, and ethical design.
              </p>
              <div className="bg-[#590505]/30 border-l-4 border-[#D98D30] p-6 mt-8">
                <p className="text-sm text-[#D98D30] uppercase tracking-widest mb-2">Long-Term Goal</p>
                <p className="text-lg text-gray-300 italic">
                  To shape how millions engage with safe and locally inspired digital play
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#590505]/40 via-[#BF3111]/40 to-[#590505]/40 border-t-4 border-b-4 border-[#D98D30] p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#F2DEA2]">A Platform Built on Principles</h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Where cutting-edge technology meets cultural authenticity, creating experiences that resonate with North African players while maintaining the highest standards of security and responsibility
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-32 bg-black relative scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-[#F21313] via-[#D98D30] to-[#F21313]"></div>
            <div>
              <span className="text-[#D98D30] text-sm tracking-[0.3em] uppercase">Audience</span>
              <h2 className="text-5xl font-bold tracking-wide text-[#F2DEA2]">TARGET MARKET</h2>
            </div>
          </div>

          <div className="bg-[#590505]/30 border-2 border-[#D98D30] p-10 mb-12 mt-16">
            <h3 className="text-2xl font-bold mb-4 text-[#F2DEA2]">Primary Audience</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Young adults aged 18–35 in Tunisia and neighboring North African countries who are digitally connected, mobile-first, and interested in skill-based gaming.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "University Students", desc: "Tech-savvy early adopters seeking entertainment" },
                { icon: Award, title: "Young Professionals", desc: "Career-focused individuals with disposable income" },
                { icon: Target, title: "Casual Gamers", desc: "Entertainment seekers valuing local culture" }
              ].map((item, idx) => (
                <div key={idx} className="bg-black border-l-4 border-[#D98D30] p-6">
                  <item.icon className="w-10 h-10 text-[#D98D30] mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-[#F2DEA2]">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black border-2 border-[#F21313]/30 p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#F21313]">Market Segmentation</h3>
              <div className="space-y-6">
                {[
                  { title: "Casual Players", desc: "Engage for fun, socializing, and short sessions" },
                  { title: "Competitive Players", desc: "Participate in tournaments, leaderboards, and skill-based challenges" },
                  { title: "Value-Oriented Users", desc: "Sensitive to pricing, promotions, and reward systems" }
                ].map((seg, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-[#F2DEA2] mb-2">{seg.title}</h4>
                    <p className="text-gray-400">{seg.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black border-2 border-[#D98D30]/30 p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#D98D30]">Unique Value Proposition</h3>
              <ul className="space-y-4">
                {[
                  "Focuses on local culture and languages (Arabic and French interfaces, region-specific themes)",
                  "Offers accessible payments compatible with local e-dinar and mobile wallets",
                  "Combines legal compliance with responsible gaming tools, making it a safe alternative to international platforms"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D98D30] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Roadmap */}
      <section id="strategy" className="py-32 bg-gradient-to-b from-black via-[#590505]/10 to-black relative scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-[#F21313] via-[#D98D30] to-[#F21313]"></div>
            <div>
              <span className="text-[#D98D30] text-sm tracking-[0.3em] uppercase">Strategy</span>
              <h2 className="text-5xl font-bold tracking-wide text-[#F2DEA2]">EXECUTION ROADMAP</h2>
              <p className="text-xl text-[#BF3111] mt-2 tracking-widest uppercase">A systematic approach to market dominance</p>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            {[
              {
                step: "Step 1",
                title: "Concept Validation",
                timeframe: "Months 1–3",
                goals: "Develop prototype, test gameplay mechanics, ensure legal compliance",
                milestones: [
                  "Complete prototype with basic skill-based games",
                  "Conduct internal and small external user tests",
                  "Complete regulatory review and define compliance framework"
                ]
              },
              {
                step: "Step 2",
                title: "Beta Launch",
                timeframe: "Months 4–6",
                goals: "Launch beta version to a limited audience, refine UX, implement responsible gaming tools",
                milestones: [
                  "Release beta version to 500–1,000 users",
                  "Collect and analyze user feedback for usability improvements",
                  "Integrate e-dinar and mobile wallet payments",
                  "Deploy age verification, deposit limits, and self-exclusion features"
                ]
              },
              {
                step: "Step 3",
                title: "Full Market Launch",
                timeframe: "Months 7–12",
                goals: "Open platform to wider market, secure partnerships, execute marketing campaigns",
                milestones: [
                  "Achieve first 10,000 registered users",
                  "Form at least two partnerships with telecoms or payment providers",
                  "Launch regional digital marketing campaigns",
                  "Track key KPIs: daily active users, session length, retention rate"
                ]
              },
              {
                step: "Step 4",
                title: "Growth and Scale",
                timeframe: "Months 13–24",
                goals: "Expand regionally, add advanced features, strengthen local developer ecosystem",
                milestones: [
                  "Launch localized versions in Algeria and Morocco",
                  "Introduce tournaments, leaderboards, and AI-driven game recommendations",
                  "Establish training program for local junior developers and designers",
                  "Optimize user retention, engagement, and monetization metrics"
                ]
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-black border-2 border-[#D98D30]/30 p-8 md:p-10 hover:border-[#D98D30] transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#590505]/0 via-[#590505]/20 to-[#590505]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <p className="text-sm text-[#D98D30] uppercase tracking-widest mb-2">{phase.step}</p>
                      <h3 className="text-3xl font-bold text-[#F2DEA2]">{phase.title}</h3>
                    </div>
                    <div className="bg-[#590505]/50 border border-[#D98D30]/30 px-6 py-2 mt-4 md:mt-0 inline-block">
                      <p className="text-[#D98D30] font-bold">{phase.timeframe}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm text-[#D98D30] uppercase tracking-widest mb-2">Goals</h4>
                    <p className="text-lg text-gray-300">{phase.goals}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-[#D98D30] uppercase tracking-widest mb-4">Milestones</h4>
                    <ul className="space-y-3">
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#F21313] mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#590505]/40 via-[#BF3111]/40 to-[#590505]/40 border-t-4 border-b-4 border-[#D98D30] p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2DEA2]">24-Month Vision</h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              From concept to regional leader — a meticulously planned journey built on validation, iteration, and strategic expansion
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section id="challenges" className="py-32 bg-black relative scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-[#F21313] via-[#D98D30] to-[#F21313]"></div>
            <div>
              <span className="text-[#D98D30] text-sm tracking-[0.3em] uppercase">Obstacles & Solutions</span>
              <h2 className="text-5xl font-bold tracking-wide text-[#F2DEA2]">BUILDING AGAINST THE ODDS</h2>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            {/* Opening */}
            <div className="bg-gradient-to-r from-[#590505]/40 via-[#BF3111]/40 to-[#590505]/40 border-l-4 border-[#D98D30] p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 italic">
                "Picture this: You're trying to launch an online gaming platform in a region where gambling laws exist in a legal gray zone, payment systems barely speak to each other, and international competitors have a decade-long head start."
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 italic mt-4">
                Welcome to our first year.
              </p>
            </div>

            {/* Story Sections */}
            <div className="space-y-8">
              {[
                {
                  title: "The Legal Minefield",
                  story: "The problem hit us on day one. Tunisia's gambling laws weren't just restrictive—they were unclear. What counted as gambling versus skill-based gaming? Nobody could tell us for certain. Algeria had one interpretation, Morocco another, and Tunisia seemed to shift with the wind. We couldn't build a product without knowing if it would be legal tomorrow.",
                  solution: "We brought in gaming and fintech lawyers who knew the region. They mapped every regulation, every gray area, every enforcement pattern across North Africa. Then we made a calculated bet—we rebuilt our game mechanics to emphasize skill over chance. Poker and strategy games became our foundation, not slots or pure luck games. When authorities asked questions, we had answers. We filed formal inquiries with Tunisia's Ministry of Communication Technologies. We created compliance roadmaps for three scenarios: full licensing, digital service frameworks, or pivoting entirely. We never moved without our legal team's sign-off."
                },
                {
                  title: "The Compliance Nightmare",
                  story: "AML regulations. Age verification. Transaction monitoring. Data protection. Each one could sink us if we got it wrong. We built a compliance framework from scratch. Multi-step ID verification with facial recognition. Real-time transaction monitoring that flagged suspicious patterns—rapid deposits, unusual withdrawals, anything above our thresholds. Monthly audits where we reviewed random samples of transactions and user accounts, hunting for gaps before regulators did.",
                  solution: "Every payment method—e-dinar, mobile wallets, bank transfers—came with different technical requirements and compliance obligations. We integrated them all, then added transaction limits that adjusted based on user verification levels. The result? A 19-year-old couldn't slip through. A money launderer would trigger alerts. And we had documentation to prove it."
                },
                {
                  title: "The Ethics Question",
                  story: "Here's what kept us up at night: We were building something that could genuinely harm people. In North Africa, gambling carries social stigma. Families fracture over addiction. Young people lose rent money chasing wins. We knew that if we ignored this, we'd become part of the problem. So we didn't ignore it.",
                  solution: "We implemented self-exclusion tools—users could block themselves for 24 hours, a week, a month, or permanently. Deposit limits with cooling-off periods before increases took effect. Session timers with automatic logout. Educational prompts at registration, before first deposits, explaining odds and risks in clear Arabic and French. We partnered with Tunisian mental health organizations to provide gambling addiction support links. We trained customer support to spot problem behavior. We created an internal ethics committee that reviewed user complaints and spending patterns monthly. The pitch became: We're not just another gaming platform. We're the regulated alternative to sketchy international sites that don't care if you lose your savings."
                },
                {
                  title: "Breaking Through",
                  story: "Nobody trusted us. Why would they? International platforms had brand recognition, capital, and years of operation. We were three founders with a prototype and a dream.",
                  solution: "We launched to 500 beta users—university students and tech community members who'd give us honest feedback. We documented everything: uptime, security measures, transaction success rates, user satisfaction scores. Then we took that data to telecom operators and payment providers. 'Look,' we said. 'Here's proof this works. Partner with us and you'll see increased mobile data usage, transaction fees, and access to a growing market.' We offered pilot programs with limited user groups. Low commitment, measurable results. One by one, they agreed."
                },
                {
                  title: "The Technical Gauntlet",
                  story: "Building a mobile-first platform that handles real-time gaming and secure transactions across North Africa's inconsistent internet infrastructure? That was another beast entirely.",
                  solution: "We started with cloud hosting for scalability. Implemented content delivery networks for speed. Added industry-standard encryption and multi-factor authentication. Ran regular penetration testing through third-party security firms. But talent was scarce. We trained our team through online courses in mobile development, cybersecurity, and payment systems. We hired freelancers remotely for specialized work—payment gateway integration, game algorithms. We built everything modular: user management, payment processing, game engines, compliance monitoring—all separate components we could update independently. It took longer than planned. Cost more than budgeted. But it worked."
                },
                {
                  title: "The Payment Puzzle",
                  story: "E-dinar operators wouldn't return our calls. Mobile wallet APIs had zero documentation. Bank integrations failed mysteriously. So we went direct.",
                  solution: "We connected with other Tunisian fintech startups, learned who to talk to, got introductions. We built custom middleware to bridge compatibility gaps between our platform and payment systems. We created testing environments that simulated every transaction scenario: successes, failures, refunds, edge cases. We established direct lines to payment provider tech teams to fix issues in hours, not weeks. And we added fallback systems—if one payment method failed, users could try another. No abandoned transactions. We monitored success rates obsessively, using data to prioritize fixes and partnership discussions."
                }
              ].map((section, idx) => (
                <div key={idx} className="bg-black border-2 border-[#D98D30]/30 p-8 md:p-10 hover:border-[#D98D30] transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#590505]/0 via-[#590505]/20 to-[#590505]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6 text-[#F21313]">{section.title}</h3>
                    <p className="text-lg leading-relaxed text-gray-400 mb-6 italic border-l-2 border-[#D98D30] pl-6">
                      {section.story}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                      {section.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Learnings */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#D98D30]">What We Learned</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Proactive Beats Reactive",
                    desc: "We ran quarterly risk assessments—legal, technical, financial, reputational—and prepared response plans before crises hit."
                  },
                  {
                    title: "Regulators Want Partners",
                    desc: "We provided updates, asked questions, positioned ourselves as cooperative. They appreciated it."
                  },
                  {
                    title: "Ethics Aren't Optional",
                    desc: "We built responsible gaming features from day one, not as afterthoughts. Users noticed. Parents trusted us."
                  },
                  {
                    title: "Data Drives Decisions",
                    desc: "From beta launch, we tracked user acquisition, session duration, deposits, retention. Weekly KPI reviews informed where we invested time and money."
                  },
                  {
                    title: "Flexibility Matters",
                    desc: "We had a 24-month roadmap but planned in three-month cycles with scenario analysis. When reality hit, we pivoted fast."
                  },
                  {
                    title: "Every Challenge Strengthens",
                    desc: "Every setback taught us something. Every regulatory hurdle made us more resilient. We didn't just survive—we built something stronger."
                  }
                ].map((learning, idx) => (
                  <div key={idx} className="bg-[#590505]/20 border-l-4 border-[#D98D30] p-6">
                    <h4 className="text-xl font-bold mb-3 text-[#F2DEA2]">{learning.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{learning.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing */}
            <div className="bg-gradient-to-r from-[#590505]/40 via-[#BF3111]/40 to-[#590505]/40 border-t-4 border-b-4 border-[#D98D30] p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #F2DEA2 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
              <blockquote className="text-2xl md:text-3xl font-bold text-[#F2DEA2] italic leading-relaxed relative z-10">
                "We didn't just survive the gauntlet. We built something stronger because of it."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-[#0a0000] border-t border-[#F21313]/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F21313] to-[#BF3111] flex items-center justify-center transform rotate-45">
                  <span className="text-white font-bold transform -rotate-45 text-sm">7R</span>
                </div>
                <span className="text-xl font-bold">7amra Royale</span>
              </div>
              <p className="text-gray-400 mb-2">PREMIUM GAMING EXPERIENCE</p>
              <p className="text-gray-400 text-sm">North Africa's premier digital gaming platform. Built with culture, designed with care, powered by innovation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#F21313]">Timeline</h4>
              <div className="space-y-2 text-gray-400">
                <p>FOUNDED: 2021</p>
                <p>LAUNCHED: 2023</p>
                <p>REGION: North Africa</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#F21313]">Coverage</h4>
              <p className="text-gray-400 mb-4">Tunisia • Algeria • Morocco</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Crafted with Excellence</p>
            </div>
          </div>
          <div className="border-t border-[#F21313]/30 pt-8 text-center text-gray-400">
            <p className="mb-2">Case Study © 2024 7amra Royale. All rights reserved.</p>
            <p className="text-sm">Redefining Digital Entertainment</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
