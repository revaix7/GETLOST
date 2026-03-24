import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <p className="hero-tagline">Two friends. One country. No maps. No rules.</p>
          <h1 className="hero-title">TIPROUTE</h1>
          <p className="hero-subtitle">
            The trip planner for people who want adventure over comfort.
            Pick your mode, your budget, your challenge — then figure out the rest yourself.
          </p>
          <Link to="/planner" className="cta-button">
            Plan Your Tip to Tip
          </Link>
        </div>
        <div className="hero-features">
          <div className="feature-card">
            <span className="feature-icon">{'\u{1F30D}'}</span>
            <h3>Tip-to-Tip Mode</h3>
            <p>Pick a country. We auto-select the two most extreme points. You just survive the middle.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">{'\u{1F3CD}\uFE0F'}</span>
            <h3>Choose Your Ride</h3>
            <p>Motorbike, bicycle, public transport, or your own two feet. Each changes everything.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">{'\u{1F4B0}'}</span>
            <h3>Budget Reality Check</h3>
            <p>Set your daily budget. We'll tell you if your dream trip is realistic or delusional.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">{'\u{1F4C7}'}</span>
            <h3>Trip Card</h3>
            <p>Get a shareable challenge card. Show your friends what you're about to attempt.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
