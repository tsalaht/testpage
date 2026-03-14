import { motion } from 'framer-motion'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero section">
      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="hero__eyebrow">وكالة تصميم وتسويق رقمية</p>
          <h1 className="hero__title">
            لمسة احترافية
            <br />
            كما يجب أن تكون!
          </h1>
          <p className="hero__subtitle">
            نصمم لك هوية متكاملة، موقعاً جذاباً، وتجربة مستخدم مبهرة
            لتصل إلى عملائك بأفضل صورة رقمية.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary">ابدأ مشروعك الآن</button>
            <button className="btn btn--ghost hero__ghost">شاهد أعمالنا</button>
          </div>
        </motion.div>

        <motion.div
          className="hero__illustration"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="hero__monster">
            <img src="https://muzawed.com/wp-content/uploads/2019/08/slider.svg" alt="" />
            <div  />
            <div className="hero__monster-orbit">
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero__wave" />
    </section>
  )
}

