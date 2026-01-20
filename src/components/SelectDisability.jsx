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
    { id: 'visual', label: 'Visual Impairment', icon: Eye },
    { id: 'hearing', label: 'Hearing Impairment', icon: Ear },
    { id: 'mobility', label: 'Mobility', icon: Accessibility },
    { id: 'cognitive', label: 'Cognitive / Learning', icon: Brain },
    { id: 'neurodivergent', label: 'Neurodivergent', icon: Zap },
    { id: 'mental', label: 'Mental Health', icon: Heart },
    { id: 'speech', label: 'Speech', icon: MessageCircle },
  ];

  const handleSelect = (id) => {
  setSelectedDisability(prev => 
    prev.includes(id) 
      ? prev.filter(item => item !== id)  // Remove if already selected
      : [...prev, id]                      // Add if not selected
  );
};

const handleContinue = () => {
  if (selectedDisability.length > 0) {
    console.log('Selected disabilities:', selectedDisability);
    const selected = selectedDisability.map(id => 
      disabilities.find(d => d.id === id)?.label
    ).join(', ');
    alert(`You selected: ${selected}`);
  }
};

  return (
    <div className="app-container">
      <div className="content">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <div className="butterfly-left"></div>
            <div className="butterfly-right"></div>
          </div>
          <span className="logo-text">INCLUSIVEJOBS.COM</span>
        </div>

        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title">Select your disability type</h1>
          <p className="subtitle">This helps us tailor the experience to your accessibility needs.</p>
        </div>

        {/* Disability Options */}
        <div className="options-container">
          {disabilities.map((disability) => {
            const IconComponent = disability.icon;
            const isSelected = selectedDisability.includes(disability.id);
            
            return (
              <button
                key={disability.id}
                className={`option-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(disability.id)}
                aria-pressed={isSelected}
              >
                <div className="option-icon">
                  <IconComponent size={20} strokeWidth={2.5} />
                </div>
                <span className="option-label">{disability.label}</span>
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="footer">
          <a href="#" className="learn-more">Not sure? Learn more</a>
          <button 
            className="continue-button"
            onClick={handleContinue}
            disabled={selectedDisability.length === 0}
          >
            Continue
          </button>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, #e8f4f8 0%, #b8d8e8 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          padding: 20px;
        }

        .content {
          width: 100%;
          max-width: 500px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .butterfly-left,
        .butterfly-right {
          width: 14px;
          height: 18px;
          background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #4a90e2 100%);
          border-radius: 50% 50% 50% 0;
          position: absolute;
        }

        .butterfly-left {
          transform: rotate(-45deg);
          left: 2px;
        }

        .butterfly-right {
          transform: rotate(45deg) scaleX(-1);
          right: 2px;
        }

        .logo-text {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: 0.5px;
        }

        .title-section {
          margin-bottom: 24px;
        }

        .main-title {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 16px;
          color: #4a5568;
          line-height: 1.5;
        }

        .options-container {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 16px;
          padding-right: 4px;
        }

        .options-container::-webkit-scrollbar {
          width: 4px;
        }

        .options-container::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 2px;
        }

        .option-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: white;
          border: 2px solid transparent;
          border-radius: 12px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
        }

        .option-item:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .option-item.selected {
          background: #e6f2ff;
          border-color: #3b82f6;
        }

        .option-icon {
          width: 40px;
          height: 40px;
          background: #f0f4f8;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2d3748;
          flex-shrink: 0;
        }

        .option-item.selected .option-icon {
          background: #3b82f6;
          color: white;
        }

        .option-label {
          flex: 1;
          font-size: 16px;
          font-weight: 500;
          color: #2d3748;
        }

        .radio-button {
          width: 24px;
          height: 24px;
          border: 2px solid #cbd5e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .option-item.selected .radio-button {
          border-color: #3b82f6;
          background: #3b82f6;
        }

        .radio-inner {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .option-item.selected .radio-inner {
          opacity: 1;
        }

        .footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .learn-more {
          text-align: center;
          font-size: 14px;
          color: #3b82f6;
          text-decoration: none;
          padding: 8px;
          font-weight: 500;
        }

        .learn-more:hover {
          text-decoration: underline;
        }

        .continue-button {
          width: 100%;
          padding: 16px;
          background: #1e3a8a;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .continue-button:hover:not(:disabled) {
          background: #1e40af;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(30, 58, 138, 0.3);
        }

        .continue-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .content {
            padding: 24px 20px;
          }

          .main-title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default SelectDisability;