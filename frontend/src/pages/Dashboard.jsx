import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
  LineChart, Line, ResponsiveContainer
} from 'recharts'
import { BookOpen, Briefcase, Trophy, Target, ArrowRight, Clock } from 'lucide-react'

const SCORE_COLOR = (s) => s >= 75 ? '#16A34A' : s >= 50 ? '#D97706' : '#DC2626'

function ScoreRing({ score, size = 120, label }) {
  const r = (size - 16) / 2
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ
  const color = SCORE_COLOR(score)
  return (
    <div className="score-ring-container" style={{ width:size, height:size }}>
      <svg width={size} height={size} style={{ transform:'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(37,99,235,0.10)" strokeWidth={10} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          style={{ transition:'stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </svg>
      <div className="score-ring-text">
        <div style={{ fontSize:'1.5rem', fontWeight:800, color }}>{score.toFixed(0)}%</div>
        {label && <div style={{ fontSize:'0.65rem', color:'var(--text-muted)', marginTop:2, lineHeight:1.2 }}>{label}</div>}
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [academicData, setAcademicData] = useState(null)
  const [careerData, setCareerData] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    Promise.all([
      axios.get('/api/academic/report').catch(() => ({ data: null })),
      axios.get('/api/career/report').catch(() => ({ data: null }))
    ]).then(([ac, ca]) => {
      setAcademicData(ac.data)
      setCareerData(ca.data)
      setLoad(false)
    })
  }, [])

  if (load) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'70vh', flexDirection:'column', gap:'1rem' }}>
      <div className="spinner-lg spinner" />
      <p style={{ color:'var(--text-muted)' }}>Loading your dashboard...</p>
    </div>
  )

  const academicSessions = academicData?.total_sessions || 0
  const careerSessions = careerData?.total_sessions || 0
  const hasAcademic = academicSessions > 0
  const hasCareer = careerSessions > 0

  const acChartData = hasAcademic
    ? (academicData?.report || []).flatMap(s => s.topics.map(t => ({ name: `${s.subject}:${t.topic}`, score: t.avg_score, status: t.status })))
    : []

  const lastCareer = hasCareer ? careerData?.report?.[0] : null
  const skillChartData = lastCareer
    ? Object.entries(lastCareer.skill_scores || {}).map(([skill, score]) => ({ skill, score }))
    : []

  const recentAcademic = academicData?.recent_sessions || []
  const trendData = recentAcademic.slice().reverse().map((s) => ({
    name: `${s.subject}`,
    score: s.score
  }))

  return (
    <div className="page-container animate-fadeIn">
      <div style={{ marginBottom:'2rem' }}>
        <h1 style={{ fontSize:'1.75rem', fontWeight:800, marginBottom:'0.25rem' }}>
          Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'},{' '}
          <span style={{ color:'var(--primary)' }}>{user?.username}</span>
        </h1>
        <p style={{ color:'var(--text-secondary)' }}>Your unified academic analytics and career readiness dashboard</p>
      </div>

      <div className="editorial-hero card">
        <div>
          <span className="badge badge-purple" style={{ marginBottom:'1rem' }}>Editorial Learning Workspace</span>
          <h2 style={{ maxWidth:720, marginBottom:'0.75rem' }}>A calm, curated command center for academic growth and career readiness.</h2>
          <p>Track quiz performance, skill gaps, and study momentum in a Pinterest-inspired bento layout designed for focus.</p>
        </div>
        <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'1.5rem' }}>
          <button onClick={() => navigate('/academic')} className="btn btn-primary" style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <BookOpen size={16} /> Start Academic Quiz
          </button>
          <button onClick={() => navigate('/career')} className="btn btn-cyan" style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <Target size={16} /> Explore Career Path
          </button>
        </div>
      </div>

      <div className="dashboard-bento" style={{ marginBottom:'1.25rem' }}>
        {[
          { icon: BookOpen, label:'Academic Sessions', value: academicSessions, color:'var(--primary)' },
          { icon: Briefcase, label:'Career Assessments', value: careerSessions, color:'var(--secondary)' },
          { icon: Trophy, label:'Avg Academic Score', value: hasAcademic ? `${(recentAcademic.reduce((a,s)=>a+s.score,0)/recentAcademic.length).toFixed(0)}%` : '--', color:'var(--warning)' },
          { icon: Target, label:'Career Readiness', value: lastCareer ? `${lastCareer.overall_readiness.toFixed(0)}%` : '--', color:'var(--success)' },
        ].map(({ icon: Icon, label, value, color }, i) => (
          <div key={label} className={`stat-card animate-fadeInUp stagger-${i+1}`}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.75rem' }}>
              <div style={{ width:42, height:42, borderRadius:'14px', background: color === 'var(--primary)' ? 'var(--primary-soft)' : color === 'var(--secondary)' ? 'var(--blue-soft)' : color === 'var(--warning)' ? 'var(--warning-soft)' : 'var(--success-soft)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Icon size={20} style={{ color }} />
              </div>
            </div>
            <div className="stat-value" style={{ color }}>{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid-2 editorial-split" style={{ marginBottom:'2rem' }}>
        <div className="card">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.25rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.625rem' }}>
              <div style={{ width:36, height:36, borderRadius:'10px', background:'var(--primary-soft)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <BookOpen size={18} style={{ color:'var(--primary)' }} />
              </div>
              <div>
                <h3 style={{ fontSize:'1rem', fontWeight:700 }}>Academic Analytics</h3>
                <p style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>{academicSessions} session{academicSessions !== 1 ? 's' : ''}</p>
              </div>
            </div>
            <button onClick={() => navigate('/academic')} className="btn btn-secondary btn-sm" style={{ display:'flex', alignItems:'center', gap:'0.25rem' }}>
              Start Quiz <ArrowRight size={14} />
            </button>
          </div>

          {!hasAcademic ? (
            <div style={{ textAlign:'center', padding:'2rem 1rem' }}>
              <div style={{ width:48, height:48, borderRadius:'12px', background:'var(--primary-soft)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 0.75rem' }}>
                <BookOpen size={24} style={{ color:'var(--primary)' }} />
              </div>
              <p style={{ color:'var(--text-muted)', fontSize:'0.875rem', marginBottom:'1rem' }}>No academic sessions yet. Start your first quiz.</p>
              <button onClick={() => navigate('/academic')} className="btn btn-primary btn-sm">Generate Quiz</button>
            </div>
          ) : (
            <>
              {acChartData.slice(0, 5).map(d => (
                <div key={d.name} className="skill-bar-row">
                  <span className="skill-bar-label" style={{ fontSize:'0.78rem' }}>{d.name.split(':').pop()}</span>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width:`${d.score}%`, background: d.score >= 75 ? 'linear-gradient(90deg,#16A34A,#059669)' : d.score >= 50 ? 'linear-gradient(90deg,#D97706,#B45309)' : 'linear-gradient(90deg,#DC2626,#B91C1C)' }} />
                  </div>
                  <span className="skill-bar-pct" style={{ color: SCORE_COLOR(d.score) }}>{d.score}%</span>
                </div>
              ))}
              {trendData.length > 1 && (
                <div style={{ marginTop:'1rem' }}>
                  <p style={{ fontSize:'0.75rem', color:'var(--text-muted)', marginBottom:'0.5rem' }}>Score Trend (recent)</p>
                  <ResponsiveContainer width="100%" height={80}>
                    <LineChart data={trendData}>
                      <Line type="monotone" dataKey="score" stroke="#223A5E" strokeWidth={2} dot={false} />
                      <YAxis domain={[0,100]} hide />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
              {recentAcademic[0]?.weak_areas?.length > 0 && (
                <div style={{ marginTop:'1rem', padding:'0.75rem', background:'var(--danger-soft)', borderRadius:'var(--radius-md)', border:'1px solid rgba(220,38,38,0.15)' }}>
                  <p style={{ fontSize:'0.75rem', color:'var(--danger)', fontWeight:600, marginBottom:'0.375rem' }}>Recent Weak Areas</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'0.375rem' }}>
                    {recentAcademic[0].weak_areas.slice(0, 4).map(w => (
                      <span key={w} className="badge badge-weak" style={{ fontSize:'0.7rem' }}>{w}</span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="card">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.25rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.625rem' }}>
              <div style={{ width:36, height:36, borderRadius:'10px', background:'var(--secondary-soft)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Briefcase size={18} style={{ color:'var(--secondary)' }} />
              </div>
              <div>
                <h3 style={{ fontSize:'1rem', fontWeight:700 }}>Career Analytics</h3>
                <p style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>{lastCareer?.career_goal || 'No goal set'}</p>
              </div>
            </div>
            <button onClick={() => navigate('/career')} className="btn btn-cyan btn-sm" style={{ display:'flex', alignItems:'center', gap:'0.25rem' }}>
              Assess <ArrowRight size={14} />
            </button>
          </div>

          {!hasCareer ? (
            <div style={{ textAlign:'center', padding:'2rem 1rem' }}>
              <div style={{ width:48, height:48, borderRadius:'12px', background:'var(--secondary-soft)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 0.75rem' }}>
                <Briefcase size={24} style={{ color:'var(--secondary)' }} />
              </div>
              <p style={{ color:'var(--text-muted)', fontSize:'0.875rem', marginBottom:'1rem' }}>Enter your target role and get a personalized skill gap analysis.</p>
              <button onClick={() => navigate('/career')} className="btn btn-cyan btn-sm">Analyze Career</button>
            </div>
          ) : (
            <>
              <div style={{ display:'flex', alignItems:'center', gap:'1.5rem', marginBottom:'1.25rem' }}>
                <ScoreRing score={lastCareer.overall_readiness} size={100} label="Readiness" />
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', gap:'0.5rem', flexDirection:'column' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.8rem' }}>
                      <span style={{ color:'var(--text-muted)' }}>Theory Score</span>
                      <span style={{ color:'var(--primary)', fontWeight:600 }}>{lastCareer.theory_score?.toFixed(0)}%</span>
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.8rem' }}>
                      <span style={{ color:'var(--text-muted)' }}>Coding Score</span>
                      <span style={{ color:'var(--secondary)', fontWeight:600 }}>{lastCareer.coding_score?.toFixed(0)}%</span>
                    </div>
                  </div>
                  <div style={{ marginTop:'0.75rem', display:'flex', gap:'0.375rem', flexWrap:'wrap' }}>
                    {lastCareer.strong_skills?.slice(0,2).map(s => <span key={s} className="badge badge-strong" style={{ fontSize:'0.7rem' }}>{s}</span>)}
                    {lastCareer.weak_skills?.slice(0,2).map(s => <span key={s} className="badge badge-weak" style={{ fontSize:'0.7rem' }}>{s}</span>)}
                  </div>
                </div>
              </div>

              {skillChartData.length > 0 && (
                <ResponsiveContainer width="100%" height={130}>
                  <BarChart data={skillChartData} margin={{ top:0, right:0, bottom:20, left:-20 }}>
                    <XAxis dataKey="skill" tick={{ fontSize:10, fill:'#64748B' }} angle={-25} textAnchor="end" />
                    <YAxis domain={[0,100]} hide />
                    <Tooltip
                      formatter={(v) => [`${v}%`, 'Score']}
                      contentStyle={{ background:'rgba(255,253,249,0.96)', border:'1px solid var(--border)', borderRadius:'8px', fontSize:'0.8rem' }}
                    />
                    <Bar dataKey="score" radius={[4,4,0,0]}>
                      {skillChartData.map((d, i) => (
                        <Cell key={i} fill={SCORE_COLOR(d.score)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
            </>
          )}
        </div>
      </div>

      <div className="card quick-actions-card" style={{ background:'var(--grad-card)' }}>
        <h3 style={{ marginBottom:'1rem', fontSize:'1rem' }}>Quick Actions</h3>
        <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
          <button onClick={() => navigate('/academic')} className="btn btn-primary" style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <BookOpen size={16} /> New Academic Quiz
          </button>
          <button onClick={() => navigate('/career')} className="btn btn-cyan" style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <Target size={16} /> Career Assessment
          </button>
          {hasAcademic && (
            <button onClick={() => navigate('/academic', { state: { tab: 'history' } })} className="btn btn-ghost" style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
              <Clock size={16} /> View Academic History
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
