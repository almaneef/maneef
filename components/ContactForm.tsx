'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { useLanguage } from '@/lib/hooks/useLanguage';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your API
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.form
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input
                id="name"
                type="text"
                {...register('name', {
                  required: t('contact.validation.nameRequired'),
                })}
                placeholder={t('contact.form.namePlaceholder')}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: t('contact.validation.emailRequired'),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('contact.validation.emailInvalid'),
                  },
                })}
                placeholder={t('contact.form.emailPlaceholder')}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t('contact.form.phone')}</label>
              <div className="phone-input-wrapper">
                <select className="country-code" defaultValue="+966">
                  <option value="+966">+966</option>
                  <option value="+971">+971</option>
                  <option value="+965">+965</option>
                  <option value="+974">+974</option>
                  <option value="+973">+973</option>
                  <option value="+961">+961</option>
                  <option value="+20">+20</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: t('contact.validation.phoneRequired'),
                    pattern: {
                      value: /^[0-9]{8,15}$/,
                      message: t('contact.validation.phoneInvalid'),
                    },
                  })}
                  placeholder={t('contact.form.phonePlaceholder')}
                  className={errors.phone ? 'error' : ''}
                />
              </div>
              {errors.phone && (
                <span className="error-message">{errors.phone.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea
                id="message"
                rows={6}
                {...register('message', {
                  required: t('contact.validation.messageRequired'),
                  minLength: {
                    value: 10,
                    message: t('contact.validation.messageMinLength'),
                  },
                })}
                placeholder={t('contact.form.messagePlaceholder')}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="success-message"
                >
                  {t('contact.form.success')}
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="error-message-form"
                >
                  {t('contact.form.error')}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
            </button>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: var(--spacing-4xl) var(--spacing-xl);
          background: var(--color-background);
        }
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }
        .contact-header h2 {
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }
        .contact-header p {
          font-size: 1.25rem;
          color: var(--color-text-light);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .form-group label {
          font-weight: 600;
          color: var(--color-text);
        }
        .form-group input,
        .form-group textarea {
          padding: var(--spacing-md);
          border: 2px solid var(--color-border);
          border-radius: var(--border-radius-md);
          font-size: 1rem;
          font-family: inherit;
          transition: all var(--transition-fast);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(26, 54, 93, 0.1);
        }
        .form-group input.error,
        .form-group textarea.error {
          border-color: var(--color-error);
        }
        .phone-input-wrapper {
          display: flex;
          gap: var(--spacing-sm);
        }
        .country-code {
          padding: var(--spacing-md);
          border: 2px solid var(--color-border);
          border-radius: var(--border-radius-md);
          font-size: 1rem;
          font-family: inherit;
          background: var(--color-background);
          cursor: pointer;
          min-width: 100px;
        }
        .phone-input-wrapper input {
          flex: 1;
        }
        .error-message {
          color: var(--color-error);
          font-size: 0.875rem;
        }
        .success-message {
          padding: var(--spacing-md);
          background: var(--color-success);
          color: white;
          border-radius: var(--border-radius-md);
          text-align: center;
        }
        .error-message-form {
          padding: var(--spacing-md);
          background: var(--color-error);
          color: white;
          border-radius: var(--border-radius-md);
          text-align: center;
        }
        .submit-button {
          padding: var(--spacing-md) var(--spacing-xl);
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
          margin-top: var(--spacing-md);
        }
        .submit-button:hover:not(:disabled) {
          background: var(--color-primary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .contact {
            padding: var(--spacing-2xl) var(--spacing-md);
          }
          .contact-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

