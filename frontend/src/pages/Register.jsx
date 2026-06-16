import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { BookOpen, GraduationCap, Leaf, Mail, Lock, User, Eye, EyeOff, UserPlus, NotebookPen } from 'lucide-react'

function InputField({ id, label, icon: Icon, type = 'text', placeholder, value, onChange, autoComplete }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div style={{ position:'relative' }}>
        <Icon size={16} style={{ position:'absolute', left:'0.875rem', top:'50%', transform:'translateY(-50%)', color:'var(--text-muted)', pointerEvents:'none' }} />
        <input
          id={id}
          type={type}
          className="form-input"
          style={{ paddingLeft:'2.5rem' }}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          required
          autoComplete={autoComplete}
        />
      </div>
    </div>
  )
}

function getErrorMessage(err) {
  if (err?.response?.data?.error) return err.response.data.error
  if (err?.code === 'ERR_NETWORK' || err?.message?.includes('Network Error')) {
    return 'Unable to reach the backend API. Check VITE_API_URL and try again.'
  }
  return 'Registration failed. Please try again.'
}

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' })
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const updateField = (field, value) => {
    setForm(p => ({ ...p, [field]: value }))
    setError('')
  }

  const handle = async (e) => {
    e.preventDefault()
    setError('')

    const username = form.username.trim()
    const email = form.email.trim()
    const password = form.password
    const confirm = form.confirm

    if (!username) {
      setError('Username is required')
      return
    }
    if (!email) {
      setError('Email is required')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address')
      return
    }
    if (!password) {
      setError('Password is required')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      await register(username, email, password, confirm)
      toast.success('Account created! Welcome to StudyTrack')
      navigate('/dashboard')
    } catch (err) {
      const message = getErrorMessage(err)
      setError(message)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-shell">
      <div className="auth-illustrations" aria-hidden="true">
        <span className="illustration-card"><BookOpen size={24} /></span>
        <span className="illustration-card"><NotebookPen size={24} /></span>
        <span className="illustration-card"><Leaf size={24} /></span>
        <span className="illustration-card"><GraduationCap size={24} /></span>
      </div>

      <div className="animate-fadeInUp" style={{ width:'100%', maxWidth:'460px' }}>
        <div className="auth-brand">
          <h1 className="auth-title">StudyTrack</h1>
          <p className="auth-subtitle">AI-Based Adaptive Learning & Skill Gap Analysis System</p>
        </div>

        <div className="card auth-card">
          <h2 style={{ fontSize:'1.25rem', marginBottom:'0.25rem' }}>Create account</h2>
          <p style={{ color:'var(--text-muted)', fontSize:'0.875rem', marginBottom:'1.25rem' }}>Join a focused academic learning and career readiness platform</p>

          {error && <div className="alert alert-error" style={{ marginBottom:'1rem' }}>{error}</div>}

          <form onSubmit={handle} className="auth-form">
            <InputField id="reg-username" label="Username" icon={User} placeholder="johndoe" value={form.username} onChange={value => updateField('username', value)} autoComplete="username" />
            <InputField id="reg-email" label="Email address" icon={Mail} type="email" placeholder="you@example.com" value={form.email} onChange={value => updateField('email', value)} autoComplete="email" />

            <div className="form-group">
              <label className="form-label">Password</label>
              <div style={{ position:'relative' }}>
                <Lock size={16} style={{ position:'absolute', left:'0.875rem', top:'50%', transform:'translateY(-50%)', color:'var(--text-muted)', pointerEvents:'none' }} />
                <input
                  id="reg-password"
                  type={showPwd ? 'text' : 'password'}
                  className="form-input"
                  style={{ paddingLeft:'2.5rem', paddingRight:'2.5rem' }}
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={e => updateField('password', e.target.value)}
                  required
                  autoComplete="new-password"
                />
                <button type="button" onClick={() => setShowPwd(p => !p)} style={{ position:'absolute', right:'0.875rem', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'var(--text-muted)' }}>
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div style={{ position:'relative' }}>
                <Lock size={16} style={{ position:'absolute', left:'0.875rem', top:'50%', transform:'translateY(-50%)', color:'var(--text-muted)', pointerEvents:'none' }} />
                <input
                  id="reg-confirm"
                  type={showPwd ? 'text' : 'password'}
                  className="form-input"
                  style={{ paddingLeft:'2.5rem' }}
                  placeholder="Repeat password"
                  value={form.confirm}
                  onChange={e => updateField('confirm', e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>

            {form.password && form.confirm && (
              <div style={{ fontSize:'0.75rem', color: form.password === form.confirm ? 'var(--success)' : 'var(--danger)' }}>
                {form.password === form.confirm ? 'Passwords match' : 'Passwords do not match'}
              </div>
            )}

            <button type="submit" id="reg-submit" className="btn btn-primary btn-lg" style={{ marginTop:'0.5rem' }} disabled={loading}>
              {loading ? <><span className="spinner" /> Creating account...</> : <><UserPlus size={18} /> Create Account</>}
            </button>
          </form>

          <div className="divider" />
          <p style={{ textAlign:'center', color:'var(--text-muted)', fontSize:'0.875rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color:'var(--primary)', textDecoration:'none', fontWeight:600 }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
