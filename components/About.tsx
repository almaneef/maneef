'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { useLanguage } from '@/lib/hooks/useLanguage';

export const About = () => {
  const { t, resources } = useTranslation();
  const { language } = useLanguage();
  const aboutUs = resources.aboutUs;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="about-background" />
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="about-header"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="header-badge"
          >
            <span>{t('about.subtitle')}</span>
          </motion.div>
          <h2>{aboutUs.title}</h2>
          <div className="header-line" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="about-sections"
        >
          {aboutUs.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="about-section"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="section-content">
                <div className="section-text-box">
                  <h3>{section.heading}</h3>
                  <p>{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
          padding: var(--spacing-4xl) var(--spacing-xl);
          background: var(--color-background);
          overflow: hidden;
        }
        .about-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(26, 54, 93, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(231, 57, 70, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .about-container {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          z-index: 1;
        }
        .about-header {
          text-align: center;
          margin-bottom: var(--spacing-4xl);
        }
        .header-badge {
          display: inline-block;
          padding: var(--spacing-sm) var(--spacing-lg);
          background: linear-gradient(135deg, rgba(26, 54, 93, 0.1) 0%, rgba(45, 74, 107, 0.1) 100%);
          border: 1px solid rgba(26, 54, 93, 0.2);
          border-radius: var(--border-radius-full);
          margin-bottom: var(--spacing-lg);
        }
        .header-badge span {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .about-header h2 {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--spacing-lg);
          font-family: var(--font-heading);
          line-height: 1.2;
        }
        .header-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
          margin: 0 auto;
          border-radius: var(--border-radius-full);
        }
        .about-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-4xl);
          margin-bottom: var(--spacing-4xl);
        }
        .about-section {
          position: relative;
          padding: var(--spacing-2xl);
          background: var(--color-background);
          border-radius: var(--border-radius-xl);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(26, 54, 93, 0.1);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
          cursor: pointer;
          margin: var(--spacing-lg);
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(26, 54, 93, 0.02) 0%, rgba(45, 74, 107, 0.02) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .about-section:hover::before {
          opacity: 1;
        }
        .about-section:hover {
          box-shadow: 0 12px 40px rgba(26, 54, 93, 0.15);
          border-color: rgba(26, 54, 93, 0.2);
        }
        .section-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .section-text-box {
          background: var(--color-background-alt);
          padding: var(--spacing-xl);
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(26, 54, 93, 0.08);
          transition: all 0.3s ease;
        }
        .about-section:hover .section-text-box {
          background: rgba(248, 249, 250, 0.9);
          border-color: rgba(26, 54, 93, 0.12);
        }
        .section-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
          font-family: var(--font-heading);
          line-height: 1.3;
          text-align: center;
        }
        .section-content p {
          color: var(--color-text);
          line-height: 1.8;
          font-size: 1rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .about {
            padding: var(--spacing-2xl) var(--spacing-md);
          }
          .about-header h2 {
            font-size: 2.25rem;
          }
          .header-badge {
            padding: var(--spacing-xs) var(--spacing-md);
          }
          .header-badge span {
            font-size: 0.75rem;
          }
          .about-sections {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
            margin-bottom: var(--spacing-3xl);
          }
          .about-section {
            padding: var(--spacing-xl);
          }
          .section-content h3 {
            font-size: 1.5rem;
          }
          .section-content p {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </section>
  );
};

