'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';

export function HeroShowcase() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    gsap.fromTo(
      '.hero-copy h1',
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 }
    );

    gsap.fromTo(
      '.hero-copy p',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.4 }
    );

    gsap.fromTo(
      '.cta-row',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    const cards = document.querySelectorAll('.flavor-card');
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      });

      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 + index * 0.12 }
      );
    });

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-scene">
      <div className="background-glow" />
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">S</div>
          <span>Soda</span>
        </div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Ingredients</a>
          <a href="#">Taste</a>
          <a href="#">Eco</a>
          <a href="#">Reviews</a>
        </nav>

        <button className="contact-button">Contact Us</button>
      </header>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Zero sugar. Zero compromise.</div>
          <h1>
            Pure
            <br />
            Zero
          </h1>
          <p>
            Unleash the crisp taste of zero sugar.
            <br />
            Refreshment redefined in every bubble —
            <br />
            all in one sleek design.
          </p>

          <div className="cta-row">
            <button className="primary-button">
              Shop Now
              <span>+</span>
            </button>
          </div>

          <div className="award-card">
            <div className="award-icon">✓</div>
            <div>
              <div className="award-label">Design Awards</div>
              <div className="award-meta">Premium Beverage 2025</div>
            </div>
          </div>
        </div>

        <div className="product-stage">
          <div className="can-orbit">
            <div className="can-body">
              <div className="can-top" />
              <div className="can-label">diet soda</div>
            </div>
          </div>
        </div>

        <aside className="flavor-panel">
          <div className="flavor-card active">
            <div className="soda-visual classic" />
            <div className="card-meta">
              <span>Diet Classic</span>
              <strong>$2.99</strong>
            </div>
          </div>

          <div className="flavor-card">
            <div className="soda-visual lime" />
            <div className="card-meta">
              <span>Zero Lime</span>
              <strong>$2.99</strong>
            </div>
          </div>

          <div className="arrow-row">
            <button aria-label="Previous">←</button>
            <button aria-label="Next">→</button>
          </div>

          <h2>
            Refreshingly
            <br />
            Clean
          </h2>
        </aside>
      </div>
    </section>
  );
}
