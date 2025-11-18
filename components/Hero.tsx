'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { useLanguage } from '@/lib/hooks/useLanguage';

export const Hero = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, use fallback image
      });
    }
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920"
        >
          <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-logo"
        >
          <h1>{t('hero.companyName')}</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <h2>{t('hero.title')}</h2>
          <p>{t('hero.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button onClick={scrollToProducts} className="hero-cta">
            {t('hero.cta')}
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(26, 54, 93, 0.7),
            rgba(15, 36, 57, 0.8)
          );
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          padding: 2rem;
          max-width: 800px;
        }
        .hero-logo h1 {
          font-size: 6rem;
          font-weight: 800;
          margin-bottom: var(--spacing-3xl);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .hero-text {
          margin-bottom: var(--spacing-3xl);
        }
        .hero-text h2 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .hero-text p {
          font-size: 2rem;
          margin-bottom: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        .hero-cta {
          padding: 1.25rem 3.5rem;
          font-size: 1.5rem;
          font-weight: 600;
          background: var(--color-accent);
          color: white;
          border: none;
          border-radius: var(--border-radius-lg);
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-lg);
          margin-top: var(--spacing-3xl);
        }
        .hero-cta:hover {
          background: #e67000;
          transform: translateY(-2px);
          box-shadow: var(--shadow-xl);
        }
        .hero-cta:active {
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .hero-logo h1 {
            font-size: 3.5rem;
          }
          .hero-text h2 {
            font-size: 2.5rem;
          }
          .hero-text p {
            font-size: 1.5rem;
          }
          .hero-cta {
            padding: 1rem 2.5rem;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

