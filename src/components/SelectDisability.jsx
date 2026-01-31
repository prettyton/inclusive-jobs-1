import React, { useState } from 'react';
import {
  Eye,
  Ear,
  Accessibility,
  Brain,
  Zap,
  Heart,
  MessageCircle
} from 'lucide-react';

const SelectDisability = () => {
  const [selectedDisability, setSelectedDisability] = useState([]);

  const disabilities = [
    { id: 'visual', label: 'Visual Impairment', icon: Eye, color: '#2cc5b0', bg: '#d6f5f0', desc: 'Screen-reader optimised listings & audio descriptions.' },
    { id: 'hearing', label: 'Hearing Impairment', icon: Ear, color: '#ff7c5e', bg: '#fff0ec', desc: 'Sign-language support & captioning options.' },
    { id: 'mobility', label: 'Mobility', icon: Accessibility, color: '#d4a017', bg: '#fef7dc', desc: 'Accessibility ratings & remote-friendly filters.' },
    { id: 'cognitive', label: 'Cognitive / Learning', icon: Brain, color: '#6366f1', bg: '#eef2ff', desc: 'Simplified flows & step-by-step onboarding.' },
    { id: 'neurodivergent', label: 'Neurodivergent', icon: Zap, color: '#ec4899', bg: '#fdf2f8', desc: 'Sensory-friendly workplace filters.' },
    { id: 'mental', label: 'Mental Health', icon: Heart, color: '#f97316', bg: '#fff7ed', desc: 'Flexible scheduling & wellness resources.' },
    { id: 'speech', label: 'Speech', icon: MessageCircle, color: '#22c55e', bg: '#f0fdf4', desc: 'Text-based interviews & AAC-compatible tools.' },
  ];

  const handleSelect = (id) => {
    setSelectedDisability(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedDisability.length > 0) {
      const selected = selectedDisability
        .map(id => disabilities.find(d => d.id === id)?.label)
        .join(', ');
      alert(`You selected: ${selected}`);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 14,
      }}>
        {disabilities.map((disability) => {
          const IconComponent = disability.icon;
          const isSelected = selectedDisability.includes(disability.id);

          return (
            <button
              key={disability.id}
              onClick={() => handleSelect(disability.id)}
              aria-pressed={isSelected}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 20px',
                background: isSelected ? '#eefbf8' : '#f5f0eb',
                border: `2px solid ${isSelected ? '#2cc5b0' : 'transparent'}`,
                borderRadius: 16,
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? '0 4px 16px rgba(44,197,176,0.18)' : 'none',
              }}
              onMouseEnter={e => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                }
              }}
              onMouseLeave={e => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {/* Icon */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 13,
                flexShrink: 0,
                background: isSelected ? disability.color : disability.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isSelected ? '#ffffff' : disability.color,
                transition: 'background 0.25s, color 0.25s',
              }}>
                <IconComponent size={21} strokeWidth={2.2} />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#1a2332', marginBottom: 3 }}>
                  {disability.label}
                </div>
                <div style={{ fontSize: 13, color: '#6b7b8d', lineHeight: 1.5 }}>
                  {disability.desc}
                </div>
              </div>

              {/* Check Circle */}
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                flexShrink: 0,
                border: `2px solid ${isSelected ? '#2cc5b0' : '#cbd5e0'}`,
                background: isSelected ? '#2cc5b0' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s',
              }}>
                {isSelected && (
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6.5L5.5 10L11 3" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Continue Button */}
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <button
          onClick={handleContinue}
          disabled={selectedDisability.length === 0}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: selectedDisability.length > 0 ? '#1a2332' : '#6b7b8d',
            color: '#ffffff',
            padding: '13px 30px',
            borderRadius: 12,
            fontSize: 15,
            fontWeight: 600,
            border: 'none',
            cursor: selectedDisability.length > 0 ? 'pointer' : 'not-allowed',
            boxShadow: selectedDisability.length > 0 ? '0 4px 16px rgba(26,35,50,0.25)' : 'none',
            transition: 'transform 0.2s, box-shadow 0.2s, background 0.25s',
          }}
          onMouseEnter={e => {
            if (selectedDisability.length > 0) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,35,50,0.35)';
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = selectedDisability.length > 0 ? '0 4px 16px rgba(26,35,50,0.25)' : 'none';
          }}
        >
          {selectedDisability.length > 0
            ? `Continue with ${selectedDisability.length} selected`
            : 'Select a category to continue'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SelectDisability;