import { useNavigate } from 'react-router-dom'
import {
  Brain,
  Target,
  TrendingUp,
  Briefcase,
  Code2,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Mail,
  BarChart3,
  Award,
  Lightbulb
} from 'lucide-react'

const LogoIcon = () => (
  <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 4H6C4.895 4 4 4.895 4 6v2.5c3.314 0 6 2.239 6 5s-2.686 5-6 5H6c-1.105 0-2 .895-2 2v2.5c0 1.105.895 2 2 2h12c3.314 0 6-2.239 6-5v-2.5c-3.314 0-6-2.239-6-5s2.686-5 6-5h-2c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v8h2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2z" fill="#6E8F5A"/>
  </svg>
)

const features = [
  {
    icon: Brain,
    title: 'AI Academic Analysis',
    desc: 'Take adaptive quizzes and receive AI-powered insights to identify strengths and improvement areas.'
  },
  {
    icon: Award,
    title: 'Career Skill Assessment',
    desc: 'Evaluate career readiness and discover personalized learning roadmaps tailored to your goals.'
  },
  {
    icon: Lightbulb,
    title: 'Personalized Learning',
    desc: 'Receive intelligent recommendations based on your unique learning behavior and pace.'
  },
  {
    icon: BarChart3,
    title: 'Interactive Dashboard',
    desc: 'Track academic progress using clean analytics with real-time performance insights.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Authentication',
    desc: 'JWT authentication with protected routes and encrypted passwords for complete security.'
  },
  {
    icon: Code2,
    title: 'Coding Practice',
    desc: 'Integrated coding environment with real-time execution to build practical skills.'
  }
]

const steps = [
  { num: '1', title: 'Create an Account', desc: 'Sign up in seconds' },
  { num: '2', title: 'Complete Assessments', desc: 'Take adaptive quizzes' },
  { num: '3', title: 'AI Analysis', desc: 'Get smart insights' },
  { num: '4', title: 'Personalized Roadmap', desc: 'Receive your plan' },
  { num: '5', title: 'Track Your Growth', desc: 'Monitor progress daily' }
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <div className="landing-bg-orb landing-bg-orb-1" />
      <div className="landing-bg-orb landing-bg-orb-2" />
      <div className="landing-bg-orb landing-bg-orb-3" />

      {/* Navigation */}
      <nav className="landing-nav">
        <div className="landing-nav-inner">
          <div className="landing-logo" onClick={() => navigate('/')}>
            <LogoIcon />
            <span className="landing-logo-text">StudyTrack</span>
          </div>
          <div className="landing-nav-actions">
            <a href="#features" className="landing-nav-link">Features</a>
            <a href="#how-it-works" className="landing-nav-link">How It Works</a>
            <a href="#about" className="landing-nav-link">About</a>
            <a href="#contact" className="landing-nav-link">Contact</a>
            <button onClick={() => navigate('/login')} className="landing-nav-link">Login</button>
            <button onClick={() => navigate('/register')} className="landing-btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="landing-main">
        {/* Hero Section */}
        <section className="landing-hero">
          <div className="landing-hero-left animate-fadeInUp">
            <div className="landing-badge">
              AI-Powered Adaptive Learning Platform
            </div>
            <h1 className="landing-heading">
              Understand Your <span className="landing-heading-accent">Progress.</span>
            </h1>
            <h1 className="landing-heading">
              Unlock Your <span className="landing-heading-accent">Potential.</span>
            </h1>
            <h1 className="landing-heading">
              Shape Your <span className="landing-heading-accent">Future.</span>
            </h1>
            <p className="landing-description">
              StudyTrack is an AI-powered adaptive learning platform that helps students understand
              their academic progress, identify skill gaps, receive personalized learning
              recommendations, and prepare for successful careers through intelligent assessments.
            </p>

            <div className="landing-features">
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <Brain size={16} />
                </div>
                <span>AI Academic Analysis</span>
              </div>
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <Target size={16} />
                </div>
                <span>Skill Gap Detection</span>
              </div>
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <Lightbulb size={16} />
                </div>
                <span>Personalized Learning</span>
              </div>
              <div className="landing-feature">
                <div className="landing-feature-icon">
                  <Briefcase size={16} />
                </div>
                <span>Career Readiness</span>
              </div>
            </div>

            <div className="landing-cta">
              <button onClick={() => navigate('/register')} className="landing-btn-hero">
                Get Started <ArrowRight size={18} />
              </button>
              <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="landing-btn-hero-ghost">
                Explore Features
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="landing-features-section">
          <div className="landing-features-header">
            <div className="landing-features-label">Features</div>
            <h2 className="landing-features-title">Everything you need to succeed</h2>
            <p className="landing-features-subtitle">
              Powerful tools designed to help you learn smarter, not harder.
            </p>
          </div>
          <div className="landing-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="landing-feature-card">
                <div className="landing-feature-card-icon">
                  <feature.icon size={24} />
                </div>
                <h3 className="landing-feature-card-title">{feature.title}</h3>
                <p className="landing-feature-card-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="landing-how-section">
          <div className="landing-how-header">
            <div className="landing-how-label">How It Works</div>
            <h2 className="landing-how-title">Your journey to success</h2>
            <p className="landing-how-subtitle">
              Five simple steps to transform your learning experience.
            </p>
          </div>
          <div className="landing-how-steps">
            {steps.map((step, index) => (
              <div key={index} className="landing-how-step">
                <div className="landing-how-step-number">{step.num}</div>
                <div className="landing-how-step-title">{step.title}</div>
                <div className="landing-how-step-desc">{step.desc}</div>
                {index < steps.length - 1 && (
                  <div className="landing-how-connector">
                    <ChevronDown size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="landing-about-section">
          <div className="landing-about-inner">
            <div className="landing-about-label">About</div>
            <h2 className="landing-about-title">About StudyTrack</h2>
            <p className="landing-about-text">
              StudyTrack is an AI-powered adaptive learning platform that combines intelligent
              assessments with personalized recommendations to help students improve academic
              performance and prepare for future careers.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="landing-contact-section">
          <div className="landing-contact-inner">
            <div className="landing-contact-label">Contact Us</div>
            <h2 className="landing-contact-title">Have questions or feedback?</h2>
            <p className="landing-contact-subtitle">
              We would love to hear from you. Reach out anytime.
            </p>
            <a href="mailto:rrpriya007@gmail.com" className="landing-contact-email">
              <Mail size={18} />
              rrpriya007@gmail.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <div className="landing-footer-brand">
            <LogoIcon />
            <span className="landing-footer-logo-text">StudyTrack</span>
          </div>
          <p className="landing-footer-tagline">
            AI-Powered Adaptive Learning & Career Intelligence Platform
          </p>
        </div>
        <div className="landing-footer-bottom">
          <p className="landing-footer-copy">
            &copy; 2026 StudyTrack. All Rights Reserved.
          </p>
          <p className="landing-footer-author">
            Designed &amp; Developed by RR Priyadharshini
          </p>
          <div className="landing-footer-links">
            <a href="mailto:rrpriya007@gmail.com" className="landing-footer-link">
              <Mail size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
