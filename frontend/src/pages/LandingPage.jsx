import { useNavigate } from 'react-router-dom'
import { Brain, Target, TrendingUp, Briefcase, ArrowRight, Sparkles } from 'lucide-react'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <div className="landing-bg-orb landing-bg-orb-1" />
      <div className="landing-bg-orb landing-bg-orb-2" />
      <div className="landing-bg-orb landing-bg-orb-3" />

      <nav className="landing-nav">
        <div className="landing-nav-inner">
          <div className="landing-logo">
            <Sparkles size={20} className="landing-logo-icon" />
            <span className="landing-logo-text">StudyTrack</span>
          </div>
          <div className="landing-nav-actions">
            <button onClick={() => navigate('/login')} className="landing-nav-link">Sign In</button>
            <button onClick={() => navigate('/register')} className="landing-btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="landing-main">
        <div className="landing-hero">
          <div className="landing-hero-left animate-fadeInUp">
            <div className="landing-badge">
              <Brain size={14} />
              AI-Powered Learning Platform
            </div>
            <h1 className="landing-heading">
              Learn <span className="landing-heading-accent">Smarter.</span><br />
              Improve <span className="landing-heading-accent">Faster.</span><br />
              Build Your <span className="landing-heading-accent">Career.</span>
            </h1>
            <p className="landing-description">
              StudyTrack uses AI-powered learning analysis and skill gap detection to help students
              understand their progress, improve weak areas, and prepare for their career goals.
            </p>

            <div className="landing-features">
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <Brain size={16} />
                </div>
                <span>AI Learning Analysis</span>
              </div>
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <Target size={16} />
                </div>
                <span>Skill Gap Detection</span>
              </div>
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <TrendingUp size={16} />
                </div>
                <span>Personalized Recommendations</span>
              </div>
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <Briefcase size={16} />
                </div>
                <span>Career Readiness Tracking</span>
              </div>
            </div>

            <div className="landing-cta">
              <button onClick={() => navigate('/register')} className="landing-btn-hero">
                Start Learning <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('/login')} className="landing-btn-hero-ghost">
                I Already Have an Account
              </button>
            </div>
          </div>

          <div className="landing-hero-right animate-fadeIn">
            <div className="landing-illustration">
              <div className="landing-illust-bg" />

              <div className="landing-illust-scene">
                <div className="landing-illust-glow landing-illust-glow-1" />
                <div className="landing-illust-glow landing-illust-glow-2" />
                <div className="landing-illust-glow landing-illust-glow-3" />

                <div className="landing-illust-particles">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className={`landing-particle landing-particle-${i + 1}`} />
                  ))}
                </div>

                <div className="landing-illust-staircase">
                  <div className="stair-step stair-step-1">
                    <div className="stair-surface" />
                    <div className="stair-glow" />
                  </div>
                  <div className="stair-step stair-step-2">
                    <div className="stair-surface" />
                    <div className="stair-glow" />
                  </div>
                  <div className="stair-step stair-step-3">
                    <div className="stair-surface" />
                    <div className="stair-glow" />
                  </div>
                  <div className="stair-step stair-step-4">
                    <div className="stair-surface" />
                    <div className="stair-glow" />
                  </div>
                  <div className="stair-step stair-step-5">
                    <div className="stair-surface" />
                    <div className="stair-glow" />
                  </div>
                  <div className="stair-step stair-step-6">
                    <div className="stair-surface" />
                    <div className="stair-glow" />
                  </div>
                  <div className="stair-step stair-step-7">
                    <div className="stair-surface" />
                    <div className="stair-glow" />
                  </div>

                  <div className="stair-rail stair-rail-left" />
                  <div className="stair-rail stair-rail-right" />

                  <div className="landing-illust-panels">
                    <div className="hud-panel hud-panel-1">
                      <div className="hud-line" />
                      <div className="hud-line hud-line-short" />
                      <div className="hud-bar"><div className="hud-bar-fill" /></div>
                    </div>
                    <div className="hud-panel hud-panel-2">
                      <div className="hud-line" />
                      <div className="hud-line hud-line-short" />
                      <div className="hud-bar"><div className="hud-bar-fill" /></div>
                    </div>
                    <div className="hud-panel hud-panel-3">
                      <div className="hud-line" />
                      <div className="hud-line hud-line-short" />
                      <div className="hud-bar"><div className="hud-bar-fill" /></div>
                    </div>
                    <div className="hud-panel hud-panel-4">
                      <div className="hud-line" />
                      <div className="hud-line hud-line-short" />
                      <div className="hud-bar"><div className="hud-bar-fill" /></div>
                    </div>
                  </div>

                  <svg className="landing-illust-girl" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F5C6A0" />
                        <stop offset="100%" stopColor="#E8A882" />
                      </linearGradient>
                      <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#5C3D2E" />
                        <stop offset="100%" stopColor="#3D2518" />
                      </linearGradient>
                      <linearGradient id="outfitGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2D6A4F" />
                        <stop offset="100%" stopColor="#1B4332" />
                      </linearGradient>
                      <linearGradient id="pantsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1D3557" />
                        <stop offset="100%" stopColor="#0D1B2A" />
                      </linearGradient>
                      <linearGradient id="shoeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3D2518" />
                        <stop offset="100%" stopColor="#2C1A10" />
                      </linearGradient>
                      <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0" />
                      </linearGradient>
                      <filter id="softGlow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <ellipse cx="60" cy="195" rx="38" ry="5" fill="url(#glowGrad)" opacity="0.6" />

                    <ellipse cx="60" cy="188" rx="18" ry="6" fill="url(#shoeGrad)" />
                    <ellipse cx="60" cy="186" rx="18" ry="4" fill="#4A2C1A" opacity="0.5" />

                    <path d="M40 132 L36 186 L84 186 L80 132 Z" fill="url(#pantsGrad)" />
                    <path d="M42 132 L38 180 L58 180 L58 132 Z" fill="#1A2F45" opacity="0.4" />

                    <path d="M36 98 Q32 118 38 132 L82 132 Q88 118 84 98 Z" fill="url(#outfitGrad)" />
                    <rect x="38" y="102" width="44" height="3" rx="1.5" fill="#1B4332" opacity="0.5" />
                    <rect x="38" y="110" width="44" height="2" rx="1" fill="#1B4332" opacity="0.3" />

                    <path d="M30 100 Q26 78 30 62 Q36 48 60 46 Q84 48 90 62 Q94 78 90 100" fill="url(#outfitGrad)" />

                    <circle cx="60" cy="56" r="22" fill="url(#skinGrad)" />
                    <ellipse cx="60" cy="38" rx="24" ry="20" fill="url(#hairGrad)" />
                    <path d="M36 44 Q38 68 44 76 Q54 72 60 70 Q66 72 76 76 Q82 68 84 44 Q80 32 60 30 Q40 32 36 44 Z" fill="url(#hairGrad)" />

                    <circle cx="53" cy="54" r="2.5" fill="#3D2518" />
                    <circle cx="67" cy="54" r="2.5" fill="#3D2518" />
                    <ellipse cx="53" cy="52" rx="0.8" ry="1.2" fill="#FFFFFF" opacity="0.7" />
                    <ellipse cx="67" cy="52" rx="0.8" ry="1.2" fill="#FFFFFF" opacity="0.7" />

                    <path d="M56 62 Q60 66 64 62" stroke="#C17A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                    <ellipse cx="48" cy="48" rx="5" ry="3" fill="#E8A882" opacity="0.5" />
                    <ellipse cx="72" cy="48" rx="5" ry="3" fill="#E8A882" opacity="0.5" />

                    <circle cx="60" cy="75" r="2" fill="#A8D5BA" opacity="0.6" />

                    <path d="M26 100 Q20 88 24 80 Q30 74 34 82" fill="url(#hairGrad)" opacity="0.9" />
                    <path d="M94 100 Q100 88 96 80 Q90 74 86 82" fill="url(#hairGrad)" opacity="0.9" />

                    <path d="M28 102 Q18 96 16 106 Q18 116 30 112" fill="url(#outfitGrad)" opacity="0.85" />
                    <path d="M92 102 Q102 96 104 106 Q102 116 90 112" fill="url(#outfitGrad)" opacity="0.85" />

                    <rect x="46" y="108" width="6" height="14" rx="3" fill="url(#skinGrad)" />
                    <rect x="68" y="108" width="6" height="14" rx="3" fill="url(#skinGrad)" />
                    <ellipse cx="49" cy="122" rx="4" ry="2.5" fill="url(#skinGrad)" />
                    <ellipse cx="71" cy="122" rx="4" ry="2.5" fill="url(#skinGrad)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="landing-features-section animate-fadeInUp">
          <div className="landing-features-grid">
            <div className="landing-feature-card">
              <div className="landing-feature-card-icon">
                <Brain size={24} />
              </div>
              <h3 className="landing-feature-card-title">AI-Based Academic Analysis</h3>
              <p className="landing-feature-card-desc">
                Get intelligent insights into your academic performance with AI-driven topic analysis
                and personalized learning path recommendations.
              </p>
            </div>
            <div className="landing-feature-card">
              <div className="landing-feature-card-icon">
                <TrendingUp size={24} />
              </div>
              <h3 className="landing-feature-card-title">Adaptive Learning Insights</h3>
              <p className="landing-feature-card-desc">
                Receive real-time adaptive recommendations that evolve with your progress,
                helping you focus on the areas that matter most.
              </p>
            </div>
            <div className="landing-feature-card">
              <div className="landing-feature-card-icon">
                <Briefcase size={24} />
              </div>
              <h3 className="landing-feature-card-title">Career Skill Assessment</h3>
              <p className="landing-feature-card-desc">
                Evaluate your career readiness with comprehensive skill gap analysis and
                targeted preparation for your professional goals.
              </p>
            </div>
          </div>
        </section>

        <footer className="landing-footer">
          <p>© 2026 StudyTrack. Built with AI for smarter learning.</p>
        </footer>
      </main>
    </div>
  )
}
