import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Star, ChevronDown, MapPin, Users, TrendingUp, Calendar, Building } from 'lucide-react';
import './App.css';

/* ─── THEME (Updated with colors from images) ─── */
const vars = {
  cream: '#f5f0eb',
  creamDark: '#ebe4db',
  navy: '#1e293b',        // Darker navy from images
  teal: '#0ea5e9',        // Blue from images
  tealLight: '#e0f2fe',   // Light blue
  coral: '#f97316',       // Orange accent
  coralLight: '#ffedd5',
  gold: '#f0c24b',
  white: '#ffffff',
  lightGray: '#f8fafc',   // Very light background
  text: '#1e293b',        // Dark text
  textMuted: '#64748b',   // Muted gray text
};

/* ─── SCROLL REVEAL HOOK ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── SECTION LABEL ─── */
function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <div style={{ width: 28, height: 2, background: vars.teal, borderRadius: 1 }} />
      <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: vars.teal }}>{children}</span>
    </div>
  );
}

/* ─── NAV ─── */
function Nav() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'How It Works', href: '#how' },
    { label: 'Stories', href: '#stories' },
    { label: 'About', href: '#about' },
  ];
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(30,41,59,0.08)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 28px' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 44, height: 44, background: vars.navy, borderRadius: 12,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', width: 16, height: 21, borderRadius: '50% 50% 50% 0', background: vars.teal, top: 10, left: 5, transform: 'rotate(-40deg)' }} />
            <div style={{ position: 'absolute', width: 16, height: 21, borderRadius: '50% 50% 50% 0', background: vars.coral, top: 10, right: 5, transform: 'rotate(40deg) scaleX(-1)' }} />
          </div>
          <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: vars.navy }}>InclusiveJobs</span>
        </a>

        <div style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: 14, fontWeight: 500, color: vars.textMuted,
              textDecoration: 'none', transition: 'color 0.25s',
            }}
              onMouseEnter={e => e.target.style.color = vars.navy}
              onMouseLeave={e => e.target.style.color = vars.textMuted}
            >{l.label}</a>
          ))}
        </div>

        <a href="#" style={{
          fontSize: 14, fontWeight: 600, color: vars.white, textDecoration: 'none',
          background: vars.teal, padding: '8px 18px', borderRadius: 8,
        }}>Sign In</a>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '140px 28px 100px', position: 'relative', overflow: 'hidden', background: vars.white,
    }}>
      <div style={{ position: 'absolute', width: 480, height: 480, background: vars.teal, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15, top: -120, right: -140, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 360, height: 360, background: vars.coral, borderRadius: '50%', filter: 'blur(90px)', opacity: 0.12, bottom: -80, left: -100, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: vars.tealLight, color: vars.teal,
          fontSize: 13, fontWeight: 600, padding: '6px 16px', borderRadius: 20, marginBottom: 28,
        }}>
          <Star size={20} fill={vars.teal} /> Trusted by 12,000+ individuals &amp; employers
        </div>

        <h1 style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 'clamp(42px, 7vw, 70px)', fontWeight: 700,
          color: vars.navy, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 20,
        }}>
          Inclusive careers,<br />
          <em style={{ fontStyle: 'italic', color: vars.teal }}>built for everyone</em>
        </h1>

        <p style={{ fontSize: 18, color: vars.textMuted, maxWidth: 540, margin: '0 auto 38px', lineHeight: 1.7 }}>
          InclusiveJobs bridges the gap between talented individuals with disabilities and employers who value diversity — celebrating every ability.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#jobs" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: vars.navy, color: vars.white,
            padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600,
            textDecoration: 'none', boxShadow: '0 4px 18px rgba(30,41,59,0.28)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(30,41,59,0.38)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(30,41,59,0.28)'; }}
          >
            For Employers <ArrowRight size={18} />
          </a>
          <a href="#jobs" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', color: vars.navy,
            padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600,
            textDecoration: 'none', border: `1.5px solid ${vars.navy}`,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(30,41,59,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            For Candidates <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <a href="#services" style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: vars.textMuted, textDecoration: 'none' }}>
        <ChevronDown size={32} style={{ animation: 'bounce 2s infinite' }} />
      </a>
    </section>
  );
}

/* ─── SERVICES WRAPPER ─── */
function Services() {
  const [selectedDisabilities, setSelectedDisabilities] = useState([]);
  const scrollContainerRef = useRef(null);

  const disabilities = [
    { id: 'visual', label: 'Visual Impairment', icon: '👁️', color: '#0ea5e9', bg: '#e0f2fe', desc: 'Screen-reader optimised listings & audio descriptions.' },
    { id: 'hearing', label: 'Hearing Impairment', icon: '👂', color: '#f97316', bg: '#ffedd5', desc: 'Sign-language support & captioning options.' },
    { id: 'mobility', label: 'Mobility', icon: '♿', color: '#d4a017', bg: '#fef7dc', desc: 'Accessibility ratings & remote-friendly filters.' },
    { id: 'cognitive', label: 'Cognitive / Learning', icon: '🧠', color: '#6366f1', bg: '#eef2ff', desc: 'Simplified flows & step-by-step onboarding.' },
    { id: 'neurodivergent', label: 'Neurodivergent', icon: '⚡', color: '#ec4899', bg: '#fdf2f8', desc: 'Sensory-friendly workplace filters.' },
    { id: 'mental', label: 'Mental Health', icon: '❤️', color: '#f97316', bg: '#fff7ed', desc: 'Flexible scheduling & wellness resources.' },
    { id: 'speech', label: 'Speech', icon: '💬', color: '#22c55e', bg: '#f0fdf4', desc: 'Text-based interviews & AAC-compatible tools.' },
  ];

  const handleSelect = (id) => {
    setSelectedDisabilities(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Width of one card plus gap
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatWeDo = [
    {
      title: 'Curate Talent',
      desc: 'We source and vet candidates based on their professional expertise and potential.',
      icon: '🎯',
    },
    {
      title: 'Facilitate Access',
      desc: 'We ensure the recruitment process is fully accessible from the first click to the final interview.',
      icon: '🔓',
    },
    {
      title: 'Consult & Educate',
      desc: 'We help companies transition from "wanting to be inclusive" to "being inclusive" through practical strategies and support.',
      icon: '📚',
    },
  ];

  return (
    <section id="services" style={{ background: vars.white, padding: '100px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section heading */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionLabel><span style={{ margin: '0 auto' }}>Services</span></SectionLabel>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: 700,
              color: vars.navy, lineHeight: 1.2, letterSpacing: '-0.8px', margin: '0 auto 12px',
            }}>
              Built around <em style={{ fontStyle: 'italic', color: vars.teal }}>every</em> ability
            </h2>
            <p style={{ fontSize: 16, color: vars.textMuted, margin: '0 auto', lineHeight: 1.7, maxWidth: 600 }}>
              Explore the disability categories we support. Click the arrows to browse and select those relevant to you.
            </p>
          </div>
        </Reveal>

        {/* Horizontal Scroll Disability Cards with Navigation */}
        <Reveal delay={0.1}>
          <div style={{ position: 'relative', marginBottom: 60 }}>
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              style={{
                position: 'absolute',
                left: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: vars.white,
                border: `2px solid ${vars.teal}`,
                color: vars.teal,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(30,41,59,0.15)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = vars.teal;
                e.currentTarget.style.color = vars.white;
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = vars.white;
                e.currentTarget.style.color = vars.teal;
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16L6 10L12 4" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              style={{
                position: 'absolute',
                right: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: vars.white,
                border: `2px solid ${vars.teal}`,
                color: vars.teal,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(30,41,59,0.15)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = vars.teal;
                e.currentTarget.style.color = vars.white;
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = vars.white;
                e.currentTarget.style.color = vars.teal;
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4L14 10L8 16" />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              style={{ 
                overflowX: 'auto',
                overflowY: 'hidden',
                paddingBottom: 20,
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div style={{ 
                display: 'flex',
                gap: 16,
                minWidth: 'min-content',
                padding: '4px 40px',
              }}>
                {disabilities.map((disability, index) => {
                  const isSelected = selectedDisabilities.includes(disability.id);
                  
                  return (
                    <div
                      key={disability.id}
                      onClick={() => handleSelect(disability.id)}
                      style={{
                        minWidth: 280,
                        maxWidth: 280,
                        padding: '24px 20px',
                        background: isSelected ? disability.bg : vars.white,
                        border: `2px solid ${isSelected ? disability.color : 'rgba(30,41,59,0.08)'}`,
                        borderRadius: 16,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: isSelected ? `0 4px 20px ${disability.color}33` : '0 2px 8px rgba(30,41,59,0.06)',
                        position: 'relative',
                        animation: `slideIn 0.5s ease ${index * 0.1}s both`,
                      }}
                      onMouseEnter={e => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,41,59,0.12)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(30,41,59,0.06)';
                        }
                      }}
                    >
                      {/* Icon */}
                      <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: isSelected ? disability.color : disability.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 28,
                        marginBottom: 16,
                        transition: 'all 0.3s',
                      }}>
                        {disability.icon}
                      </div>

                      {/* Label */}
                      <h4 style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: vars.navy,
                        marginBottom: 8,
                        lineHeight: 1.3,
                      }}>
                        {disability.label}
                      </h4>

                      {/* Description */}
                      <p style={{
                        fontSize: 13,
                        color: vars.textMuted,
                        lineHeight: 1.6,
                        marginBottom: 16,
                      }}>
                        {disability.desc}
                      </p>

                      {/* Check indicator */}
                      <div style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        border: `2px solid ${isSelected ? disability.color : '#cbd5e0'}`,
                        background: isSelected ? disability.color : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                      }}>
                        {isSelected && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 6L5 9L10 3" />
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Continue Button */}
        {selectedDisabilities.length > 0 && (
          <Reveal delay={0.2}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: vars.teal,
                  color: vars.white,
                  padding: '14px 32px',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(14,165,233,0.25)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,165,233,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.25)';
                }}
              >
                Continue with {selectedDisabilities.length} selected
                <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        )}

        {/* What We Do Section */}
        <Reveal delay={0.15}>
          <div style={{ 
            textAlign: 'center',
            marginBottom: 48,
            paddingTop: 40,
            borderTop: `1px solid rgba(30,41,59,0.08)`,
          }}>
            <h3 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 700,
              color: vars.navy,
              marginBottom: 12,
            }}>
              What We Do
            </h3>
            <p style={{
              fontSize: 16,
              color: vars.textMuted,
              maxWidth: 680,
              margin: '0 auto 48px',
              lineHeight: 1.7,
            }}>
              We serve as the bridge between two worlds: a community of highly capable job seekers and an evolving corporate landscape.
            </p>
          </div>
        </Reveal>

        {/* What We Do Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {whatWeDo.map((item, i) => (
            <Reveal key={item.title} delay={0.2 + (i * 0.1)}>
              <div style={{
                background: vars.lightGray,
                borderRadius: 16,
                padding: '32px 28px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: '1px solid rgba(30,41,59,0.06)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,41,59,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: vars.white,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 12px rgba(30,41,59,0.06)',
                }}>
                  {item.icon}
                </div>
                <h4 style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: vars.navy,
                  marginBottom: 12,
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: 14,
                  color: vars.textMuted,
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Hide scrollbar */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

/* ─── JOBS SECTION ─── */
function Jobs() {
  const jobs = [
    {
      title: 'Property Services Manager',
      location: 'Polokwane',
      deadline: '30 Jan 2026',
      status: 'Receiving Applications (Open)',
      progress: 0,
      experience: 'Year Exp',
      level: 'Professionals',
      description: 'Manage property services and facilities for commercial and residential properties. Oversee maintenance teams and ensure quality service delivery.',
    },
    {
      title: 'Investment Administrator',
      location: 'Pretoria',
      deadline: '30 Jan 2026',
      status: 'Receiving Applications (Open)',
      progress: 0,
      experience: 'Year Exp',
      level: 'Professionals',
      description: 'Support investment operations including portfolio administration, client reporting, and transaction processing for investment accounts.',
    },
    {
      title: 'Manager Cafeteria',
      location: 'Durban',
      deadline: '28 Feb 2026',
      status: 'Receiving Applications (Open)',
      progress: 0,
      experience: '5 Year Exp',
      level: 'Middle Level',
      description: 'Oversee all cafeteria operations including staff management, food quality, inventory control, and customer service excellence.',
    },
    {
      title: 'Claims Non-Motor Specialist',
      location: 'N/A',
      deadline: '30 Jan 2026',
      status: 'Receiving Applications (Open)',
      progress: 0,
      experience: '3years Year Exp',
      level: 'Professionals',
      description: 'Process and manage non-motor insurance claims, assess liability, and provide excellent customer service to policyholders.',
    },
    {
      title: 'Quality Assurance Pharmacist',
      location: 'Johannesburg',
      deadline: '27 Feb 2026',
      status: 'Receiving Applications (Open)',
      progress: 0,
      experience: '2 Year Exp',
      level: 'Professionals',
      description: 'Ensure pharmaceutical products meet quality standards, conduct audits, and maintain compliance with regulatory requirements.',
    },
    {
      title: 'Accounting Graduate Trainees',
      location: 'Cape Town',
      deadline: '28 Jan 2026',
      status: 'Receiving Applications (Open)',
      progress: 0,
      experience: '1 Year Exp',
      level: 'Graduate Trainee',
      description: 'Join our graduate training program to develop accounting skills, support financial operations, and work towards professional qualifications.',
    },
  ];

  return (
    <section id="jobs" style={{ background: vars.lightGray, padding: '100px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700,
              color: vars.navy, lineHeight: 1.2, marginBottom: 16,
            }}>
              Jobs available apply to Editorial Specialist, Account Manager, Human Resources Specialist and more!
            </h2>
            <p style={{ fontSize: 14, color: vars.textMuted, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
              FEATURED JOBS
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginTop: 48 }}>
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.08}>
              <div style={{
                background: vars.white,
                borderRadius: 16,
                padding: '28px',
                border: '1px solid rgba(30,41,59,0.08)',
                boxShadow: '0 2px 12px rgba(30,41,59,0.04)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                position: 'relative',
              }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = 'translateY(-4px)'; 
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,41,59,0.08)'; 
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(30,41,59,0.04)'; 
                }}
              >
                {/* Apply Now button */}
                <div style={{ 
                  position: 'absolute', 
                  top: 20, 
                  right: 20,
                  fontSize: 13,
                  fontWeight: 600,
                  color: vars.teal,
                  cursor: 'pointer',
                }}>
                  Apply Now
                </div>

                {/* Job Title */}
                <h3 style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: vars.navy,
                  marginBottom: 8,
                  paddingRight: 80,
                }}>
                  {job.title}
                </h3>

                {/* Location */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 6, 
                  marginBottom: 20,
                  color: vars.textMuted,
                  fontSize: 14,
                }}>
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: 14,
                  color: vars.textMuted,
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}>
                  {job.description}
                </p>

                {/* Deadline and Status */}
                <div style={{ 
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: '1px solid rgba(30,41,59,0.08)',
                }}>
                  <div style={{ fontSize: 13, color: vars.textMuted, marginBottom: 4 }}>
                    Deadline: {job.deadline}
                  </div>
                  <div style={{ fontSize: 13, color: vars.teal, fontWeight: 500 }}>
                    Status: {job.status}
                  </div>
                </div>

                {/* Progress Circle */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginBottom: 16,
                }}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 600,
                    color: vars.textMuted,
                  }}>
                    {job.progress}%
                  </div>
                </div>

                {/* Experience and Level */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 24,
                  fontSize: 14,
                  color: vars.textMuted,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <TrendingUp size={16} />
                    <span>{job.experience}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Users size={16} />
                    <span>{job.level}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View More Button */}
        <Reveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: vars.teal,
              color: vars.white,
              padding: '14px 32px',
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(14,165,233,0.25)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = 'translateY(-2px)'; 
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,165,233,0.35)'; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.25)'; 
              }}
            >
              View All Jobs <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  const items = [
    { num: '12K+', label: 'Candidates Placed' },
    { num: '3,400', label: 'Inclusive Employers' },
    { num: '94%', label: 'Satisfaction Rate' },
    { num: '7', label: 'Disability Categories' },
  ];
  return (
    <section style={{ background: vars.navy, padding: '68px 28px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div style={{ flex: '1 1 170px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 46, fontWeight: 700, color: vars.teal, letterSpacing: '-1px' }}>{s.num}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    { n: 1, title: 'Create Your Profile', desc: 'Tell us your skills, experience, and accessibility needs. Our system builds a profile that speaks for itself.' },
    { n: 2, title: 'Get Matched', desc: 'Our AI matches you with roles and employers who genuinely prioritise inclusion and the right accommodations.' },
    { n: 3, title: 'Interview & Thrive', desc: 'We support you through accessible interviews and provide ongoing resources as you settle into your new role.' },
  ];
  return (
    <section id="how" style={{ background: vars.white, padding: '100px 28px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <Reveal>
          <SectionLabel>How It Works</SectionLabel>
          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: 700,
            color: vars.navy, lineHeight: 1.2, letterSpacing: '-0.8px', maxWidth: 480, marginBottom: 12,
          }}>
            Three simple steps to your next role
          </h2>
          <p style={{ fontSize: 16, color: vars.textMuted, maxWidth: 480, lineHeight: 1.7 }}>
            We've streamlined the process so you can focus on finding the right fit.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40, marginTop: 56 }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.13}>
              <div style={{ display: 'flex', gap: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: vars.tealLight, color: vars.teal,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700,
                }}>{s.n}</div>
                <div>
                  <h4 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 600, color: vars.navy, marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ fontSize: 14, color: vars.textMuted, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STORIES ─── */
function Stories() {
  const cards = [
    { initials: 'TM', bg: vars.teal, name: 'Tariro M.', role: 'Software Developer · Harare', text: 'InclusiveJobs helped me find a role that actually accommodates my visual impairment. I never thought a company would be this supportive from day one.' },
    { initials: 'SN', bg: vars.coral, name: 'Sarah N.', role: 'HR Director · Cape Town', text: 'As an employer, this platform made it effortless for us to build a truly diverse team. The candidate pool is exceptional and the tools are intuitive.' },
    { initials: 'KL', bg: vars.gold, name: 'Kenzo L.', role: 'Data Analyst · Johannesburg', text: 'The structured interview process gave me so much confidence. They understood my needs without me having to explain everything from scratch.' },
  ];
  return (
    <section id="stories" style={{ background: vars.lightGray, padding: '100px 28px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <Reveal>
          <SectionLabel>Stories</SectionLabel>
          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: 700,
            color: vars.navy, lineHeight: 1.2, letterSpacing: '-0.8px', maxWidth: 480, marginBottom: 12,
          }}>
            Real people, <em style={{ fontStyle: 'italic', color: vars.teal }}>real impact</em>
          </h2>
          <p style={{ fontSize: 16, color: vars.textMuted, maxWidth: 480, lineHeight: 1.7 }}>
            Hear from candidates and employers whose lives changed through InclusiveJobs.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 52 }}>
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div style={{ background: vars.white, borderRadius: 16, padding: 28, position: 'relative' }}>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 60, color: vars.teal, opacity: 0.2, position: 'absolute', top: 8, left: 18, lineHeight: 1 }}>"</div>
                <p style={{ fontSize: 14, color: vars.text, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>{c.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', background: c.bg,
                    color: c.bg === vars.gold ? vars.navy : vars.white,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 600,
                  }}>{c.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: vars.navy }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: vars.textMuted }}>{c.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="about" style={{ background: vars.white, padding: '100px 28px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        {/* Main About Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 100 }}>
          {/* visual */}
          <Reveal>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%', aspectRatio: '4/3', borderRadius: 24,
                background: 'linear-gradient(135deg, #e0f2fe 0%, #ffedd5 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72,
              }}>🌍</div>
              <div style={{
                position: 'absolute', bottom: -22, right: -22,
                background: vars.white, borderRadius: 16, padding: '16px 20px',
                boxShadow: '0 8px 32px rgba(30,41,59,0.1)',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 28, fontWeight: 700, color: vars.teal }}>94%</div>
                <span style={{ fontSize: 13, color: vars.textMuted, maxWidth: 100, lineHeight: 1.4 }}>of candidates feel valued at work</span>
              </div>
            </div>
          </Reveal>

          {/* text */}
          <Reveal delay={0.15}>
            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2 style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 'clamp(30px, 4.5vw, 44px)', fontWeight: 700,
                color: vars.navy, lineHeight: 1.2, letterSpacing: '-0.8px', marginBottom: 14,
              }}>
                Empowering Ability, <em style={{ fontStyle: 'italic', color: vars.teal }}>Redefining Inclusion</em>
              </h2>
              <p style={{ fontSize: 16, color: vars.textMuted, lineHeight: 1.8, marginBottom: 20 }}>
                At Inclusive Jobs, we believe that talent has no boundaries. We are a specialized recruitment agency dedicated to connecting skilled professionals with disabilities—including visual, hearing, mobility, and speech impairments—to employers who value diversity and equity.
              </p>
              <p style={{ fontSize: 16, color: vars.textMuted, lineHeight: 1.8, marginBottom: 20 }}>
                Our mission is to dismantle the barriers to employment. We don't just see a "candidate with a disability"; we see a professional with unique perspectives, resilience, and the specific skills your business needs to thrive.
              </p>
              <p style={{ fontSize: 16, color: vars.text, lineHeight: 1.8, fontWeight: 500 }}>
                We're not just filling seats; we're opening doors to a more representative workforce.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Why Our Database Matters Section */}
        <Reveal delay={0.2}>
          <div style={{
            background: vars.lightGray,
            borderRadius: 24,
            padding: '60px 48px',
            marginTop: 40,
          }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h3 style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 'clamp(28px, 4vw, 38px)',
                fontWeight: 700,
                color: vars.navy,
                marginBottom: 16,
              }}>
                Why Our Database Matters
              </h3>
              <p style={{
                fontSize: 17,
                color: vars.textMuted,
                maxWidth: 720,
                margin: '0 auto',
                lineHeight: 1.7,
              }}>
                Our specialized database is the heart of Inclusive Jobs. It is more than just a list of names; it is a dynamic ecosystem designed for mutual success.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: 40,
            }}>
              {/* For Employers */}
              <Reveal delay={0.25}>
                <div style={{
                  background: vars.white,
                  borderRadius: 20,
                  padding: '36px 32px',
                  boxShadow: '0 4px 20px rgba(30,41,59,0.06)',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 24,
                  }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: vars.tealLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                    }}>
                      🏢
                    </div>
                    <h4 style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 24,
                      fontWeight: 600,
                      color: vars.navy,
                    }}>
                      For Employers
                    </h4>
                  </div>
                  <p style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: vars.navy,
                    marginBottom: 16,
                  }}>
                    Strengthening Your Workforce
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { title: 'Diverse Perspectives', desc: 'Teams with employees with disabilities are often more innovative and better at problem-solving.' },
                      { title: 'Simplified Search', desc: 'Stop wondering where to find diverse talent. Our database puts specialized skill sets at your fingertips.' },
                      { title: 'Compliance & ESG', desc: 'Effortlessly meet your diversity hiring goals and boost your Environmental, Social, and Governance (ESG) ratings.' },
                      { title: 'Retention', desc: 'Studies show that employees with disabilities often have higher-than-average retention rates, saving you long-term turnover costs.' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: vars.teal,
                          marginTop: 6,
                          flexShrink: 0,
                        }} />
                        <div>
                          <span style={{ fontSize: 14, fontWeight: 600, color: vars.navy }}>{item.title}: </span>
                          <span style={{ fontSize: 14, color: vars.textMuted, lineHeight: 1.6 }}>{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* For Employees */}
              <Reveal delay={0.3}>
                <div style={{
                  background: vars.white,
                  borderRadius: 20,
                  padding: '36px 32px',
                  boxShadow: '0 4px 20px rgba(30,41,59,0.06)',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 24,
                  }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: vars.coralLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                    }}>
                      🎯
                    </div>
                    <h4 style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 24,
                      fontWeight: 600,
                      color: vars.navy,
                    }}>
                      For Employees
                    </h4>
                  </div>
                  <p style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: vars.navy,
                    marginBottom: 16,
                  }}>
                    Accelerating Your Career
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { title: 'Barriers Removed', desc: 'Every employer in our database is actively seeking to hire inclusively. No more "explaining" your disability—focus on your skills.' },
                      { title: 'Tailored Opportunities', desc: 'Find roles that respect and accommodate your specific needs, whether you require screen-reader-friendly environments or mobility-accessible offices.' },
                      { title: 'Confidentiality & Respect', desc: 'Your data is handled with the highest level of privacy and used only to connect you with supportive, growth-oriented workplaces.' },
                      { title: 'A Supportive Community', desc: 'Gain access to resources that help you navigate the corporate world with confidence.' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: vars.coral,
                          marginTop: 6,
                          flexShrink: 0,
                        }} />
                        <div>
                          <span style={{ fontSize: 14, fontWeight: 600, color: vars.navy }}>{item.title}: </span>
                          <span style={{ fontSize: 14, color: vars.textMuted, lineHeight: 1.6 }}>{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="#jobs" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: vars.navy, color: vars.white,
                padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 600,
                textDecoration: 'none', boxShadow: '0 4px 16px rgba(30,41,59,0.25)',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >Explore Our Database <ArrowRight size={18} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CtaBanner() {
  return (
    <section style={{ padding: '0 28px 100px', background: vars.lightGray }}>
      <Reveal>
        <div style={{
          maxWidth: 1140, margin: '0 auto', background: vars.navy,
          borderRadius: 28, padding: '72px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', width: 380, height: 380, background: vars.teal, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.12, top: -100, right: -100, pointerEvents: 'none' }} />
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: vars.white, marginBottom: 14, position: 'relative', zIndex: 1, letterSpacing: '-0.5px' }}>
            Ready to make a difference?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 460, margin: '0 auto 30px', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
            Whether you're hiring or job-seeking, InclusiveJobs is your first step toward a more inclusive future.
          </p>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1,
            background: vars.teal, color: vars.white,
            padding: '14px 30px', borderRadius: 12, fontSize: 15, fontWeight: 600,
            textDecoration: 'none', boxShadow: '0 4px 16px rgba(14,165,233,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,165,233,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.35)'; }}
          >
            Get Started Free <ArrowRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const cols = [
    { title: 'Platform', links: ['For Candidates', 'For Employers', 'Pricing', 'Resources'] },
    { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press'] },
    { title: 'Support', links: ['Help Centre', 'Contact Us', 'Privacy Policy', 'Terms'] },
  ];
  return (
    <footer style={{ background: vars.navy, color: 'rgba(255,255,255,0.45)', padding: '60px 28px 28px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 700, color: vars.white, marginBottom: 12 }}>InclusiveJobs</div>
          <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>Bridging the gap between talented individuals and employers who value every ability. Built with care, designed for everyone.</p>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <h5 style={{ fontSize: 12, fontWeight: 600, color: vars.white, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 18 }}>{c.title}</h5>
            {c.links.map(l => (
              <div key={l} style={{ marginBottom: 10 }}>
                <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = vars.teal}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                >{l}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1140, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
        <span>© 2026 InclusiveJobs. All rights reserved.</span>
        <span> Making careers inclusive</span>
      </div>
    </footer>
  );
}

/* ─── APP ROOT ─── */
function App() {
  return (
    <div style={{ fontFamily: "'Inter Flex', system-ui, sans-serif", color: vars.text, background: vars.white, overflowX: 'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Jobs />
      <HowItWorks />
      <Stories />
      <About />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;