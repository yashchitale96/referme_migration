import './App.css'

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="banner">📢 Important Update</div>

        <h1 className="title">ReferMe Has Moved! 🚀</h1>

        <p className="intro">
          We're excited to announce that{' '}
          <strong>ReferMe has been migrated to a new domain</strong>.
        </p>

        <div className="new-site-box">
          <span className="box-label">🌐 New Website</span>
          <a
            href="https://referme.pixenstudio.in"
            className="new-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            referme.pixenstudio.in
          </a>
        </div>

        <div className="warning-box">
          <p>
            <span className="warning-icon">⚠️</span>{' '}
            <strong>Please note:</strong> The old website{' '}
            <span className="old-link">referme.tech</span> has been{' '}
            <strong>discontinued</strong> and is no longer available.
          </p>
        </div>

        <p className="cta">
          Kindly update your bookmarks and use the new website from now on.
        </p>

        <a
          href="https://referme.pixenstudio.in"
          className="visit-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit New Website →
        </a>

        <p className="thanks">Thank you for your continued support! 💙</p>
        <p className="team">— Team PixenStudio</p>
      </div>
    </div>
  )
}
