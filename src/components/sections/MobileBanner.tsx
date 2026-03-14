import { motion } from 'framer-motion'
import './MobileBanner.css'

export function MobileBanner() {
  return (
    <section className="mobileBanner section">
      <motion.div
        className="mobileBanner__inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mobileBanner__content">
          <h2>تصميم تطبيقات الجوال</h2>
          <p>
            نحول أفكارك إلى تطبيقات مميزة وسهلة الاستخدام على iOS و Android
            بتصاميم عصرية وأداء عالي.
          </p>
          <button className="btn btn--primary">احجز استشارة مجانية</button>
        </div>
        <div className="mobileBanner__mockup">
          <div className="mobileBanner__phone" />
        </div>
      </motion.div>
    </section>
  )
}

