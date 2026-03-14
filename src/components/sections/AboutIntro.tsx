import { motion } from 'framer-motion'
import './AboutIntro.css'

type Feature = {
  title: string
  subtitle: string
  Icon: () => JSX.Element
}

const LightbulbIcon = () => (
  <svg viewBox="0 0 48 48" className="aboutIntro__svg">
    <defs>
      <linearGradient id="bulbGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff9f43" />
        <stop offset="1" stopColor="#ff6b6b" />
      </linearGradient>
    </defs>
    <path
      d="M24 6c-7 0-12 5.1-12 11.5 0 3.9 2 7.3 5 9.4L17 32h14l-0.9-5.1c3-2.2 4.9-5.6 4.9-9.4C35 11.1 31 6 24 6z"
      fill="url(#bulbGrad)"
    />
    <rect x="19" y="32" width="10" height="3.5" rx="1.5" fill="#fdfdfd" />
    <rect x="20" y="36" width="8" height="3" rx="1.4" fill="#e1e8f0" />
  </svg>
)

const CubeIcon = () => (
  <svg viewBox="0 0 48 48" className="aboutIntro__svg">
    <defs>
      <linearGradient id="cubeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#00e0ff" />
        <stop offset="1" stopColor="#0093c7" />
      </linearGradient>
    </defs>
    <path
      d="M24 6 10 12.5v14.5L24 42l14-15V12.5z"
      fill="url(#cubeGrad)"
    />
    <path
      d="M24 6v13.5L10 27V12.5z"
      fill="rgba(255,255,255,0.15)"
    />
    <path
      d="M38 12.5 24 19.5V6z"
      fill="rgba(0,0,0,0.15)"
    />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 48 48" className="aboutIntro__svg">
    <defs>
      <linearGradient id="clockGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd45b" />
        <stop offset="1" stopColor="#ff9f43" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="14" fill="url(#clockGrad)" />
    <line
      x1="24"
      y1="24"
      x2="24"
      y2="15"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="24"
      y1="24"
      x2="31"
      y2="27"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

const TeamIcon = () => (
  <svg viewBox="0 0 48 48" className="aboutIntro__svg">
    <defs>
      <linearGradient id="teamGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7dffb2" />
        <stop offset="1" stopColor="#00c48c" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="18" r="5" fill="url(#teamGrad)" />
    <circle cx="32" cy="18" r="5" fill="url(#teamGrad)" />
    <circle cx="24" cy="16" r="6" fill="#ffffff" opacity="0.92" />
    <path
      d="M10 33c1.3-4 3.7-7 7-7s5.7 3 7 7"
      fill="none"
      stroke="url(#teamGrad)"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M24 33c1.3-4 3.7-7 7-7s5.7 3 7 7"
      fill="none"
      stroke="url(#teamGrad)"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
)

const features: Feature[] = [
  { title: 'أفكار متعددة', subtitle: 'حلول مبتكرة تناسب مشروعك', Icon: LightbulbIcon },
  { title: 'مزود الإبداعية', subtitle: 'نبني حضورك الرقمي المتكامل', Icon: CubeIcon },
  { title: 'في الموعد', subtitle: 'نلتزم بالتسليم في الوقت', Icon: ClockIcon },
  { title: 'فريق عمل', subtitle: 'خبراء يديرون مشروعك بشغف', Icon: TeamIcon },
]

export function AboutIntro() {
  return (
    <section className="aboutIntro section section--light">
      <div className="aboutIntro__decor aboutIntro__decor--one" />
      <div className="aboutIntro__decor aboutIntro__decor--two" />

      <div className="aboutIntro__inner">
        <motion.div
          className="aboutIntro__grid"
          initial={{ opacity: 0, x: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {features.map(({ title, subtitle, Icon }, index) => (
            <motion.button
              key={title}
              type="button"
              className="aboutIntro__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -6, rotate: -1.5 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="aboutIntro__iconWrap">
                <span className="aboutIntro__iconGlow" />
                <span className="aboutIntro__iconCircle">
                  <Icon />
                </span>
              </span>
              <span className="aboutIntro__cardText">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="aboutIntro__content"
          initial={{ opacity: 0, x: -60, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="aboutIntro__eyebrow">تعرف علينا</p>
          <h2 className="aboutIntro__title">مزود</h2>
          <p className="aboutIntro__body">
            التميز في الحصول على كافة الخدمات الرقمية، ندعمك لتحصل على جميع
            الخدمات الخاصة بتصميم وبرمجة المواقع والتطبيقات وإدارة الأعمال
            والتسويق الإلكتروني وإنتاج الفيديو والموشن جرافيك والمحتوى الإبداعي.
          </p>
          <p className="aboutIntro__highlight">
            لسنا شركة حلول متكاملة فحسب، بل نحن شركاء حقيقيون في مساعدة عملائنا
            والارتقاء بأعمالهم إلى مستوى يتجاوز التوقعات.
          </p>
          <p className="aboutIntro__signature">Muz</p>
        </motion.div>
      </div>
    </section>
  )
}

