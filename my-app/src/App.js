import './App.css';
import React, { useState, useEffect } from 'react';
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "./icons/email.svg";
import profilePic from './icons/profile.jpg';
import LuxuryCursor from './components/cursor';
import ServiceItem from "./components/ServiceItem";

function App() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => prev + 1);
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <LuxuryCursor />
      <nav className={`navbar ${animationStep >= 4 ? 'visible' : 'hidden'}`}>
        <ul>
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#about" className="nav-item">About</a></li>
          <li><a href="#services" className="nav-item">Services</a></li>
          <li><a href="#contact" className="nav-item">Contact</a></li>
        </ul>
      </nav>
      <section className="section hero">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src={require("./videos/hero-bg.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1 className={`hero-line ${animationStep >= 1 ? "active" : ""}`}>Hello,</h1>
          <h1 className={`hero-line ${animationStep >= 2 ? "active" : ""}`}>
            My name is <span className="highlight">Lucius Kee</span>
          </h1>
          <h1 className={`hero-line ${animationStep >= 3 ? "active" : ""}`}>
            Empowering you to live well today — and retire even better.
          </h1>
          <a href="#home" className={`hero-line nice-button ${animationStep >= 4 ? "active" : ""}`}>
            Nice to meet you
            <span className="shimmer"></span>
          </a>
        </div>
      </section>
      <div className="profile-container">
        <div className="profile-content">
          <section id="home" className="section home">
            <h2>The Plan: A Foundation for the Future</h2>
            <p>
              In today’s fast-paced Singapore, where ambitions run high and change is constant, financial planning is no longer a luxury — it is a necessity. Much like a timepiece that quietly anchors one’s day, a well-structured financial strategy brings clarity, confidence, and control.
            </p>
            <p>
              Rooted in trust and tailored insight, I help clients chart their course through every life stage — from securing their first home to planning a dignified retirement. With evolving CPF schemes, rising healthcare needs, and intergenerational aspirations, I believe financial guidance should grow with you — not simply react to milestones.
            </p>
            <p>
              In a city that never slows down, true wealth lies not just in accumulation, but in peace of mind. My role is to help you protect what matters, pursue what inspires, and prepare for what’s next — with elegance, intention, and foresight.
            </p>
          </section>

          <section id="about" className="section about">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>
                  <span className="about-name">Wen Xuan (Lucius) Kee</span>
                </h3>
                <p>
                  With over two years of experience in financial planning, I’ve had the privilege of helping individuals and families navigate important decisions around investments, insurance, and retirement. My approach is grounded in clarity, care, and long-term partnership — because financial confidence begins with understanding and trust.
                </p>
              </div>
              <img src={profilePic} alt="Advisor" className="profile-pic" />
            </div>
          </section>

          <section id="services" className="section services">
            <h2>Services</h2>
            <div className="services-list">
              <ServiceItem
                icon="🌱"
                title="Wealth Planning & Investments"
                description="Understand where your money is going, and where it could grow.
I help you map out a simple but strategic plan to build wealth steadily — through tailored investment portfolios, dollar-cost averaging strategies, and risk-adjusted growth. No jargon. No guesswork. Just smart, transparent guidance."
              />
              <ServiceItem
                icon="🛡"
                title="Insurance & Risk Management"
                description="Protect what truly matters — your health, your income, and your peace of mind.
Together, we’ll uncover blind spots in your coverage and secure the right protection — from hospitalisation and critical illness plans to income protection and personal accident coverage. It’s not about overselling. It’s about making sure life’s curveballs don’t derail your goals."
              />
              <ServiceItem
                icon="🧓🏼"
                title="Retirement & Legacy Planning"
                description="Your future self deserves freedom, not stress.
We’ll structure a retirement roadmap that ensures you're not just surviving — but thriving. Think CPF strategies, annuity planning, and passive income options. For those thinking long-term, we’ll also cover legacy planning, so your values live on beyond you."
              />
              <ServiceItem
                icon="📊"
                title="Cashflow & Budget Optimisation"
                description="Master your monthly money flow without the overwhelm.
I’ll work with you to track spending, plan savings, and stretch every dollar with intention. Great for young professionals, newlyweds, or anyone trying to regain control of their finances. We’ll even look at tools and systems to automate good habits."
              />
            </div>
            <p className="service-note">
              “I believe financial planning shouldn’t feel intimidating — it should feel like you're finally getting your life in order.”
            </p>
          </section>

          <section id="contact" className="section contact">
            <footer className="site-footer">
              <div className="container">
                <h2>Contact</h2>
                <p>
                  Have a question or want to work together? <br />
                  Feel free to contact me <br />
                </p>
                <div className="site-footer-social">
                  <a
                    href="mailto: cankneeong@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <EmailIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/luciuskee/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://github.com/cannotknee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
              <span className="site-footer-owner">
                <a
                  href="https://odysseyadvisory.com.sg/lucius-kee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kee Wen Xuan
                </a>{" "}
                © 2025 All rights reserved.
              </span>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;