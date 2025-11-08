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
              <h2 className="text-5xl font-bold tracking-wide text-[#F2DEA2]">CHALLENGES FACED</h2>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            {/* Problems Encountered */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#F21313]">Problems Encountered</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Regulatory Uncertainty",
                    points: [
                      "Online gambling laws in Tunisia and North Africa are often unclear or restrictive, requiring careful navigation of legal boundaries",
                      "Regulatory landscape varied significantly between Tunisia, Algeria, and Morocco, with different interpretations of gambling versus skill-based gaming",
                      "Team faced ambiguity around licensing requirements, operational permissions, and legal status of specific game mechanics",
                      "Uncertainty created risks around product development timelines, market entry strategies, and long-term operational viability"
                    ]
                  },
                  {
                    title: "Compliance Requirements",
                    points: [
                      "Meeting financial, anti-money laundering (AML), and age-verification rules was complex and required ongoing monitoring",
                      "Platform needed to align with multiple regulatory frameworks: banking sector requirements, AML protocols, and data protection standards",
                      "Each payment method (e-dinar, mobile wallets, bank transfers) came with distinct technical integration challenges and compliance obligations",
                      "Required systems for transaction monitoring, suspicious activity reporting, and user identity verification while maintaining smooth user experience"
                    ]
                  },
                  {
                    title: "Ethical Concerns",
                    points: [
                      "Gambling platforms face social and ethical scrutiny regarding addiction, underage access, and negative public perception",
                      "Cultural context in North Africa added complexity, as gambling carries social stigma in many communities",
                      "Founders recognized that user harm (financial, psychological, or social) could undermine the business and damage the broader digital entertainment sector",
                      "Balancing commercial objectives with user protection required embedding ethical considerations into every operational decision"
                    ]
                  },
                  {
                    title: "Market Entry Barriers",
                    points: [
                      "Establishing credibility as a local startup in a market dominated by international platforms presented multiple challenges",
                      "Users had existing relationships with foreign competitors, requiring demonstration of technical reliability and financial security",
                      "Faced skepticism from potential partners (telecom operators, payment providers) who viewed the gaming sector as high-risk",
                      "Building partnerships was critical for payment integration and user acquisition but required extensive negotiation and proof of concept"
                    ]
                  },
                  {
                    title: "Technical Infrastructure Limitations",
                    points: [
                      "Developing a mobile-first platform that could handle real-time gaming, secure transactions, and data protection required capabilities beyond initial resources",
                      "Needed to build scalable server architecture, implement encryption protocols, and ensure platform stability under varying North African network conditions",
                      "Limited access to specialized technical talent in the region meant developing solutions internally or relying on remote collaboration",
                      "Increased development time and costs due to talent constraints"
                    ]
                  },
                  {
                    title: "Payment System Integration",
                    points: [
                      "Local payment infrastructure in North Africa operates differently from global systems",
                      "E-dinar adoption varies by region, mobile wallet standards are not uniform across countries",
                      "Banking APIs often lack documentation or support available in more developed markets",
                      "Encountered technical compatibility issues, transaction processing delays, and limited customer support from financial service providers",
                      "Each integration required custom development work and direct coordination with multiple financial institutions"
                    ]
                  }
                ].map((problem, idx) => (
                  <div key={idx} className="bg-[#590505]/20 border-l-4 border-[#F21313] p-8">
                    <h4 className="text-2xl font-bold mb-4 text-[#F2DEA2]">{problem.title}</h4>
                    <ul className="space-y-3">
                      {problem.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#F21313] rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-400 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Implemented */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#D98D30]">Solutions Implemented</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Addressing Regulatory Uncertainty",
                    solutions: [
                      "Engaged legal advisors with experience in gaming, fintech, and digital services across Tunisia and neighboring countries",
                      "Advisors conducted regulatory mapping exercises to identify applicable laws, gray areas, and enforcement patterns",
                      "Structured game mechanics to emphasize skill-based elements and minimize pure chance components, positioning platform within more defensible legal territory",
                      "Submitted formal applications and inquiry letters to relevant authorities, including Tunisia's Ministry of Communication Technologies and banking regulators",
                      "Created compliance roadmap with multiple scenarios (full licensing to operating under existing digital service frameworks) for quick adaptation",
                      "Established legal review process where new game features and promotional campaigns were assessed for regulatory risk before launch",
                      "Maintained compliance calendar tracking regulatory changes, renewal dates, and reporting obligations across target markets"
                    ]
                  },
                  {
                    title: "Meeting Compliance Requirements",
                    solutions: [
                      "Developed internal compliance framework documenting policies, procedures, and responsibilities for financial transactions, AML protocols, and age verification",
                      "Framework included detailed workflows for user registration, identity verification, transaction limits, and suspicious activity detection",
                      "Implemented multi-step age verification: government-issued ID submission, facial recognition matching, and automated document validation",
                      "System flagged incomplete or inconsistent submissions for manual review by dedicated compliance officer",
                      "Integrated secure local payment systems with real-time transaction monitoring tracking patterns (rapid deposit sequences, unusual withdrawal requests, transactions exceeding preset thresholds)",
                      "Platform automatically applied transaction limits based on user verification levels and account history, with manual override capabilities for exceptional cases",
                      "Conducted monthly audits reviewing random samples of transactions, user accounts, and system logs to identify compliance gaps or technical failures",
                      "Audit findings fed into quarterly compliance reports shared with legal advisors and regulatory authorities when required",
                      "Established relationships with payment providers' compliance teams to coordinate on shared AML obligations and incident reporting"
                    ]
                  },
                  {
                    title: "Handling Ethical Concerns",
                    solutions: [
                      "Implemented responsible gaming policies including self-exclusion tools allowing users to block access for defined periods (24 hours, one week, one month, or permanently)",
                      "Deposit limits could be set daily, weekly, or monthly, with cooling-off periods before increases took effect",
                      "Platform included session time tracking with optional reminders and automatic logout features",
                      "Educational prompts appeared at registration, before first deposits, and periodically during gameplay, explaining odds, house advantages, and risks of excessive play",
                      "Prompts used clear language in both Arabic and French, avoiding technical jargon",
                      "User agreements explicitly outlined entertainment nature of platform, possibility of financial loss, and available support resources",
                      "Partnered with Tunisian mental health organization to provide links to gambling addiction support services",
                      "Trained customer support staff to recognize signs of problem gambling",
                      "Established internal ethics committee reviewing user complaint patterns, spending behaviors, and platform features for potential harm indicators",
                      "Engaged in selective stakeholder communication, meeting with university gaming clubs, youth organizations, and technology associations",
                      "Positioned 7amra Royale as regulated alternative to unregulated international sites, emphasizing user protection features unavailable on foreign platforms"
                    ]
                  },
                  {
                    title: "Overcoming Market Entry Barriers",
                    solutions: [
                      "Adopted gradual market entry approach, launching first to closed beta group of 500 users recruited through university networks and tech communities",
                      "Demonstrated platform stability and gathered testimonials before broader marketing",
                      "Documented all technical performance metrics, security measures, and user satisfaction scores to build credibility with potential partners",
                      "Prepared detailed business proposals for telecom and payment provider partnerships highlighting mutual benefits: increased mobile data usage, transaction fee revenue, and access to growing digital entertainment market",
                      "Offered pilot programs with limited user groups, allowing partners to assess viability with minimal commitment",
                      "Emphasized compliance framework and AML measures when approaching payment providers to address risk concerns",
                      "Leveraged Tunisian origin as differentiation point, emphasizing local customer support, culturally relevant game themes, and understanding of North African user preferences",
                      "Created comparison materials showing how platform addressed pain points users experienced with international competitors (unclear payment processes, foreign currency complications, inaccessible customer service)"
                    ]
                  },
                  {
                    title: "Building Technical Infrastructure",
                    solutions: [
                      "Started with minimum viable product using cloud hosting services offering scalability without large upfront infrastructure investments",
                      "Implemented content delivery networks to improve loading times and reduce latency for users across different North African countries with varying internet speeds",
                      "Adopted industry-standard encryption protocols for data transmission and storage",
                      "Implemented multi-factor authentication options and conducted regular penetration testing using third-party security firms",
                      "Established automated backup systems with geographic redundancy to protect against data loss",
                      "Dedicated time to training initial team members, investing in online courses and certifications in mobile development, cybersecurity, and payment systems integration",
                      "Established relationships with freelance developers in other regions for specialized skills (payment gateway integration, game algorithm development)",
                      "Designed platform architecture with modularity, allowing different components (user management, payment processing, game engines, compliance monitoring) to be updated or replaced independently",
                      "Reduced technical debt and allowed for iterative improvements based on user feedback and performance data"
                    ]
                  },
                  {
                    title: "Solving Payment Integration Challenges",
                    solutions: [
                      "Conducted direct outreach to e-dinar operators and mobile wallet providers, requesting technical documentation and API access",
                      "Connected with other startups in Tunisia's fintech community to learn from their integration experiences and identify helpful contacts within financial institutions",
                      "Developed custom middleware to bridge compatibility gaps between platform and various payment systems, standardizing transaction formats and responses",
                      "Middleware included error handling for common issues (network timeouts, incomplete transactions, currency conversion discrepancies)",
                      "Implemented testing environments simulating various transaction scenarios (successful payments, failed transactions, refunds, edge cases) to identify and fix issues before live deployment",
                      "Established direct communication channels with payment provider technical support teams to expedite problem resolution during beta testing and after launch",
                      "Created fallback system where users could complete transactions through alternative methods if primary payment option failed, reducing transaction abandonment",
                      "Monitored payment success rates by method and provider, using data to prioritize integration improvements and inform partnership discussions"
                    ]
                  }
                ].map((solution, idx) => (
                  <div key={idx} className="bg-black border-2 border-[#D98D30]/30 p-8 hover:border-[#D98D30] transition-all relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#590505]/0 via-[#590505]/20 to-[#590505]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="text-2xl font-bold mb-4 text-[#F2DEA2] relative z-10">{solution.title}</h4>
                    <ul className="space-y-3 relative z-10">
                      {solution.solutions.map((sol, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#D98D30] mt-1 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Thinking & Methods */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#D98D30]">Strategic Thinking & Methods</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Proactive Risk Management",
                    desc: "Conducted structured risk assessments before major decisions, identifying potential legal, technical, financial, and reputational risks. Process occurred during initial business planning, before beta launch, and quarterly thereafter, with prepared response plans for each scenario."
                  },
                  {
                    title: "Stakeholder Engagement",
                    desc: "Maintained ongoing dialogue with regulators, payment providers, telecom partners, and users throughout development and operations. Provided periodic updates positioning founders as cooperative partners while gathering feedback to prioritize feature development."
                  },
                  {
                    title: "Structured Compliance Systems",
                    desc: "Created documented procedures for every regulated activity with assigned compliance officer responsible for framework maintenance, team training, and regulatory communication. Implemented compliance management software to track verifications, monitor transactions, and maintain audit records."
                  },
                  {
                    title: "Ethics-First Design",
                    desc: "Integrated ethical considerations into product design from inception rather than adding later. Evaluated game mechanics for addiction risk, avoided engagement features that encourage excessive play, and prioritized information transparency in user interfaces."
                  },
                  {
                    title: "Adaptive Planning",
                    desc: "Developed 24-month roadmap with defined milestones while maintaining flexibility through three-month planning cycles with scenario analysis. Used realistic, optimistic, and pessimistic outcome scenarios to allow quick pivots based on market feedback and technical challenges."
                  },
                  {
                    title: "Data-Driven Decision Making",
                    desc: "Implemented analytics systems from beta launch tracking user acquisition, session duration, game preferences, deposit patterns, and retention. Established KPIs reviewed weekly, informing decisions about game development, payment prioritization, and marketing spend allocation."
                  }
                ].map((method, idx) => (
                  <div key={idx} className="bg-[#590505]/20 border-l-4 border-[#D98D30] p-6">
                    <h4 className="text-lg font-bold mb-3 text-[#F2DEA2]">{method.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Quote */}
            <div className="bg-gradient-to-r from-[#590505]/40 via-[#BF3111]/40 to-[#590505]/40 border-t-4 border-b-4 border-[#D98D30] p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #F2DEA2 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
              <blockquote className="text-2xl md:text-3xl font-bold text-[#F2DEA2] italic leading-relaxed relative z-10">
                "Every challenge became an opportunity to strengthen our foundation and build something more resilient, ethical, and trusted."
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
