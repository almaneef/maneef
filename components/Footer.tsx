'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { useLanguage } from '@/lib/hooks/useLanguage';

export const Footer = () => {
  const { t, resources } = useTranslation();
  const { language } = useLanguage();
  const companyInfo = resources.companyInfo;
  const socialLinks = resources.socialLinks;

  const managementAddress = language === 'ar' 
    ? companyInfo.contact.managementAddress.ar 
    : companyInfo.contact.managementAddress.en;
  const factoryAddress = language === 'ar' 
    ? companyInfo.contact.factoryAddress.ar 
    : companyInfo.contact.factoryAddress.en;
  const workingHours = language === 'ar' ? companyInfo.contact.workingHours.ar : companyInfo.contact.workingHours.en;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons = [
    { name: 'Facebook', url: socialLinks.facebook, icon: '📘' },
    { name: 'Twitter', url: socialLinks.twitter, icon: '🐦' },
    { name: 'Instagram', url: socialLinks.instagram, icon: '📷' },
    { name: 'LinkedIn', url: socialLinks.linkedin, icon: '💼' },
    { name: 'YouTube', url: socialLinks.youtube, icon: '📺' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-section"
          >
            <h3>AL-MANEEF CO.</h3>
            <p>{t('footer.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-section"
          >
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h4>{t('footer.contactInfo')}</h4>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${companyInfo.contact.email}`}>
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${companyInfo.contact.phoneInternational}`}>
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li>
                <strong>{t('footer.managementAddress')}:</strong>
                <div>
                  {managementAddress}
                </div>
              </li>
              <li>
                <strong>{t('footer.factoryAddress')}:</strong>
                <div>
                  {factoryAddress}
                </div>
              </li>
              <li>
                <strong>Hours:</strong> {workingHours}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-section"
          >
            <h4>{t('footer.followUs')}</h4>
            <div className="social-links">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="social-link"
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="footer-bottom"
        >
          <p>
            &copy; {new Date().getFullYear()} AL-MANEEF CO. {t('footer.rights')}
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--color-primary-dark);
          color: white;
          padding: var(--spacing-4xl) var(--spacing-xl) var(--spacing-xl);
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
        }
        .footer-section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--spacing-md);
        }
        .footer-section h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: var(--spacing-md);
        }
        .footer-section p {
          line-height: 1.8;
          opacity: 0.9;
        }
        .footer-section ul {
          list-style: none;
        }
        .footer-section ul li {
          margin-bottom: var(--spacing-sm);
          line-height: 1.8;
        }
        .footer-section ul li a {
          color: white;
          text-decoration: none;
          opacity: 0.9;
          transition: opacity var(--transition-fast);
        }
        .footer-section ul li a:hover {
          opacity: 1;
          text-decoration: underline;
        }
        .footer-section ul li strong {
          display: block;
          margin-bottom: var(--spacing-xs);
        }
        .social-links {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius-full);
          transition: all var(--transition-fast);
        }
        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .social-icon {
          font-size: 1.25rem;
        }
        .footer-bottom {
          text-align: center;
          padding-top: var(--spacing-xl);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .footer {
            padding: var(--spacing-2xl) var(--spacing-md) var(--spacing-lg);
          }
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }
      `}</style>
    </footer>
  );
};

