'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { mockProducts, Product } from '@/lib/utils/products';

export const Products = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const getProductName = (product: Product) => {
    return language === 'ar' ? product.nameAr : product.name;
  };

  const getProductDescription = (product: Product) => {
    return language === 'ar' ? product.descriptionAr : product.description;
  };

  const getProductCategory = (product: Product) => {
    return language === 'ar' ? product.categoryAr : product.category;
  };

  const getProductFeatures = (product: Product) => {
    return language === 'ar' ? product.featuresAr : product.features;
  };

  return (
    <section id="products" className="products">
      <div className="products-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="products-header"
        >
          <h2>{t('products.title')}</h2>
          <p>{t('products.subtitle')}</p>
        </motion.div>

        <div className="products-grid">
          {mockProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="product-card"
            >
              <div className="product-image">
                <img src={product.image} alt={getProductName(product)} />
                <div className="product-category">{getProductCategory(product)}</div>
              </div>
              <div className="product-content">
                <h3>{getProductName(product)}</h3>
                <p>{getProductDescription(product)}</p>
                <ul className="product-features">
                  {getProductFeatures(product).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="product-button">
                  {t('products.viewDetails')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products {
          padding: var(--spacing-4xl) var(--spacing-xl);
          background: var(--color-background-alt);
        }
        .products-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .products-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }
        .products-header h2 {
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }
        .products-header p {
          font-size: 1.25rem;
          color: var(--color-text-light);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--spacing-xl);
        }
        .product-card {
          background: white;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }
        .product-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .product-card:hover .product-image img {
          transform: scale(1.1);
        }
        .product-category {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          background: var(--color-primary);
          color: white;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--border-radius-md);
          font-size: 0.875rem;
          font-weight: 600;
        }
        .product-content {
          padding: var(--spacing-xl);
        }
        .product-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }
        .product-content p {
          color: var(--color-text);
          margin-bottom: var(--spacing-md);
          line-height: 1.6;
        }
        .product-features {
          list-style: none;
          margin-bottom: var(--spacing-lg);
        }
        .product-features li {
          padding: var(--spacing-sm) 0;
          color: var(--color-text);
          position: relative;
          padding-left: var(--spacing-lg);
        }
        .product-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-success);
          font-weight: bold;
        }
        .product-button {
          width: 100%;
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .product-button:hover {
          background: var(--color-primary-dark);
        }
        @media (max-width: 768px) {
          .products {
            padding: var(--spacing-2xl) var(--spacing-md);
          }
          .products-header h2 {
            font-size: 2rem;
          }
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

