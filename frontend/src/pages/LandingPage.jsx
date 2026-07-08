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
            <button onClick={() => navigate('/login')} className="landing-nav-link">Login</button>
            <button onClick={() => navigate('/register')} className="landing-btn-primary">Sign In</button>
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
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className={`landing-particle landing-particle-${i + 1}`} />
                  ))}
                </div>

                <div className="landing-illust-portal">
                  <div className="portal-ring portal-ring-1" />
                  <div className="portal-ring portal-ring-2" />
                  <div className="portal-ring portal-ring-3" />
                  <div className="portal-core" />
                </div>

                <div className="landing-illust-staircase">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={`stair-step stair-step-${i + 1}`} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                      <div className="stair-surface" />
                      <div className="stair-glow" />
                    </div>
                  ))}
                  <div className="stair-rail stair-rail-left" />
                  <div className="stair-rail stair-rail-right" />
                </div>

                <div className="landing-illust-float-cards">
                  <div className="float-card float-card-1">
                    <div className="float-card-header">
                      <span className="float-card-title">Academic Progress</span>
                      <span className="float-card-badge">85%</span>
                    </div>
                    <div className="float-card-chart">
                      <svg viewBox="0 0 120 40" fill="none" className="float-chart-svg">
                        <path d="M0 35 Q15 30 25 25 T50 18 T75 12 T100 8 T120 5" stroke="#FF4FA3" strokeWidth="2" fill="none" />
                        <path d="M0 35 Q15 30 25 25 T50 18 T75 12 T100 8 T120 5 V40 H0 Z" fill="url(#chartGrad1)" opacity="0.3" />
                        <defs>
                          <linearGradient id="chartGrad1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF4FA3" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#FF4FA3" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="float-card-footer">Improving ↑</span>
                  </div>

                  <div className="float-card float-card-2">
                    <div className="float-card-header">
                      <span className="float-card-title">Career Readiness</span>
                      <span className="float-card-badge">78%</span>
                    </div>
                    <div className="float-card-donut">
                      <svg viewBox="0 0 60 60" className="float-donut-svg">
                        <circle cx="30" cy="30" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                        <circle cx="30" cy="30" r="22" fill="none" stroke="#D946EF" strokeWidth="6" strokeDasharray="87.96 138.23" strokeLinecap="round" transform="rotate(-90 30 30)" />
                        <circle cx="30" cy="30" r="16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                        <circle cx="30" cy="30" r="16" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="50.27 100.53" strokeLinecap="round" transform="rotate(-90 30 30)" />
                      </svg>
                    </div>
                    <span className="float-card-footer">On Track ↑</span>
                  </div>

                  <div className="float-card float-card-3">
                    <div className="float-card-header">
                      <span className="float-card-title">AI Insights</span>
                    </div>
                    <div className="float-card-ai">
                      <div className="ai-orb">
                        <div className="ai-orb-inner" />
                        <div className="ai-ring ai-ring-1" />
                        <div className="ai-ring ai-ring-2" />
                        <div className="ai-ring ai-ring-3" />
                      </div>
                      <div className="ai-lines">
                        <div className="ai-line" />
                        <div className="ai-line ai-line-short" />
                      </div>
                    </div>
                  </div>

                  <div className="float-card float-card-4">
                    <div className="float-card-header">
                      <span className="float-card-title">Skill Gap Analysis</span>
                    </div>
                    <div className="float-card-skills">
                      {['DSA', 'SQL', 'System Design'].map((skill, i) => (
                        <div key={skill} className="skill-row">
                          <span className="skill-name">{skill}</span>
                          <div className="skill-track">
                            <div className="skill-fill" style={{ width: `${[72, 58, 85][i]}%`, animationDelay: `${i * 0.3}s` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <svg className="landing-illust-girl" viewBox="0 0 140 220" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <stop offset="0%" stopColor="#4A1942" />
                      <stop offset="100%" stopColor="#2D0A2E" />
                    </linearGradient>
                    <linearGradient id="pantsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1D3557" />
                      <stop offset="100%" stopColor="#0D1B2A" />
                    </linearGradient>
                    <linearGradient id="backpackGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF4FA3" />
                      <stop offset="100%" stopColor="#D946EF" />
                    </linearGradient>
                    <linearGradient id="shoeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3D2518" />
                      <stop offset="100%" stopColor="#2C1A10" />
                    </linearGradient>
                    <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF4FA3" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
                    </linearGradient>
                    <filter id="softGlow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <ellipse cx="70" cy="212" rx="42" ry="6" fill="url(#glowGrad)" opacity="0.5" />

                  <ellipse cx="70" cy="204" rx="20" ry="7" fill="url(#shoeGrad)" />
                  <ellipse cx="70" cy="202" rx="20" ry="5" fill="#4A2C1A" opacity="0.5" />

                  <path d="M46 148 L42 204 L98 204 L94 148 Z" fill="url(#pantsGrad)" />
                  <path d="M48 148 L44 198 L66 198 L66 148 Z" fill="#1A2F45" opacity="0.4" />

                  <path d="M42 112 Q38 132 44 148 L96 148 Q102 132 98 112 Z" fill="url(#outfitGrad)" />
                  <rect x="44" y="116" width="52" height="3" rx="1.5" fill="#2D0A2E" opacity="0.5" />
                  <rect x="44" y="124" width="52" height="2" rx="1" fill="#2D0A2E" opacity="0.3" />

                  <path d="M34 114 Q30 90 34 72 Q40 56 70 54 Q100 56 106 72 Q110 90 106 114" fill="url(#outfitGrad)" />

                  <rect x="82" y="118" width="22" height="32" rx="10" fill="url(#backpackGrad)" filter="url(#softGlow)" />
                  <rect x="86" y="124" width="14" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
                  <rect x="86" y="130" width="10" height="2" rx="1" fill="#FFFFFF" opacity="0.4" />
                  <rect x="86" y="136" width="12" height="2" rx="1" fill="#FFFFFF" opacity="0.4" />

                  <circle cx="70" cy="66" r="24" fill="url(#skinGrad)" />
                  <ellipse cx="70" cy="46" rx="26" ry="22" fill="url(#hairGrad)" />
                  <path d="M44 52 Q46 76 52 86 Q62 82 70 80 Q78 82 88 86 Q94 76 96 52 Q92 38 70 36 Q48 38 44 52 Z" fill="url(#hairGrad)" />

                  <circle cx="62" cy="64" r="2.5" fill="#3D2518" />
                  <circle cx="78" cy="64" r="2.5" fill="#3D2518" />
                  <ellipse cx="62" cy="62" rx="0.8" ry="1.2" fill="#FFFFFF" opacity="0.7" />
                  <ellipse cx="78" cy="62" rx="0.8" ry="1.2" fill="#FFFFFF" opacity="0.7" />

                  <path d="M66 74 Q70 78 74 74" stroke="#C17A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                  <ellipse cx="56" cy="56" rx="5" ry="3" fill="#E8A882" opacity="0.5" />
                  <ellipse cx="84" cy="56" rx="5" ry="3" fill="#E8A882" opacity="0.5" />

                  <circle cx="70" cy="88" r="2" fill="#A8D5BA" opacity="0.6" />

                  <path d="M28 114 Q22 100 26 90 Q32 84 36 92" fill="url(#hairGrad)" opacity="0.9" />
                  <path d="M112 114 Q118 100 114 90 Q108 84 104 92" fill="url(#hairGrad)" opacity="0.9" />

                  <path d="M30 116 Q20 108 18 120 Q20 132 34 126" fill="url(#outfitGrad)" opacity="0.85" />
                  <path d="M110 116 Q120 108 122 120 Q120 132 106 126" fill="url(#outfitGrad)" opacity="0.85" />

                  <rect x="56" y="118" width="7" height="16" rx="3.5" fill="url(#skinGrad)" />
                  <rect x="79" y="118" width="7" height="16" rx="3.5" fill="url(#skinGrad)" />
                  <ellipse cx="59.5" cy="134" rx="4.5" ry="3" fill="url(#skinGrad)" />
                  <ellipse cx="82.5" cy="134" rx="4.5" ry="3" fill="url(#skinGrad)" />
                </svg>
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
