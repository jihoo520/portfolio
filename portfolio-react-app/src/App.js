import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Intro from './components/Intro';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Section from './components/Section';
import DB from './components/DB'
import Project from './components/Project';
import Study from './components/Study';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  
  const sections = [
    { 
      title: "최근수의 포트폴리오", 
      component: <Intro />,
      id: "intro"
    },
    { 
      title: "Study", 
      component: <Study />,
      id: "study"
    },
    { 
      title: "Projects", 
      component: <Project />,
      id: "projects"
    },
    { 
      title: "Front-end", 
      component: <Frontend />,
      id: "frontend"
    },
    { 
      title: "Back-end", 
      component: <Backend />,
      id: "backend"
    },
    { 
      title: "DBMS", 
      component: <DB />,
      id: "dbms"
    }
  ];

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 다음/이전 섹션으로 이동
  const goToNext = () => {
    const nextIndex = (activeSection + 1) % sections.length;
    scrollToSection(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (activeSection - 1 + sections.length) % sections.length;
    scrollToSection(prevIndex);
  };

  // 스크롤 이벤트로 현재 활성 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className="app-container">
      <div className="main-wrapper">
        <div className="content-card">
          <div className="content-inner">
            
            <div ref={el => sectionRefs.current[0] = el} className="section-wrapper" id="intro">
              <Section title="최근수의 포트폴리오">
                <Intro />
              </Section>
            </div>
            
            <hr className="section-divider" />

            <div ref={el => sectionRefs.current[1] = el} className="section-wrapper" id="study">
              <Section title="Study">
                <Study />
              </Section>
            </div>
            
            <div ref={el => sectionRefs.current[2] = el} className="section-wrapper" id="projects">
              <Section title="Projects">
                <Project />
              </Section>
            </div>
            
            <hr className="section-divider" />
            
            <div ref={el => sectionRefs.current[3] = el} className="section-wrapper" id="frontend">
              <Section title="Front-end">
                <Frontend />
              </Section>
            </div>
            
            <hr className="section-divider" />
            
            <div ref={el => sectionRefs.current[4] = el} className="section-wrapper" id="backend">
              <Section title="Back-end">
                <Backend />
              </Section>
            </div>
            
            <hr className="section-divider" />
            
            <div ref={el => sectionRefs.current[5] = el} className="section-wrapper" id="dbms">
              <Section title="DBMS">
                <DB />
              </Section>
            </div>
            
          </div>
        </div>
        
        <footer className="footer">
          &copy; Card UI adapted from&nbsp;
          <a href="https://github.com/simeydotme/pokemon-cards-css" target="_blank" rel="noopener noreferrer">
            pokemon-cards-css
          </a> (GPL-3.0)
        </footer>
      </div>

      {/* 사이드 페이지네이션 네비게이션 */}
      <div className="side-navigation">
        <button 
          className="nav-button up-button" 
          onClick={goToPrev}
          aria-label="이전 섹션"
        >
          <span>↑</span>
        </button>
        
        <div className="pagination-dots vertical">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`dot ${index === activeSection ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
              aria-label={`${section.title} 섹션으로 이동`}
              title={section.title}
            />
          ))}
        </div>
        
        <button 
          className="nav-button down-button" 
          onClick={goToNext}
          aria-label="다음 섹션"
        >
          <span>↓</span>
        </button>
      </div>
      
      {/* 섹션 인디케이터 */}
      <div className="section-indicator">
        {sections[activeSection].title} ({activeSection + 1}/{sections.length})
      </div>
    </div>
  );
}

export default App;