import type { JSX } from 'react'
import { motion } from 'framer-motion'
import './ServicesOverview.css'

type Service = {
  title: string
  description: string
  Icon: () => JSX.Element
}

const BrandingIcon = () => (
  <svg viewBox="0 0 48 48" className="servicesOverview__svg">
    <defs>
      <linearGradient id="brandingGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff9f43" />
        <stop offset="1" stopColor="#ff6b6b" />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="12"
      width="28"
      height="22"
      rx="6"
      fill="url(#brandingGrad)"
    />
    <circle cx="18" cy="23" r="4.2" fill="#fff" />
    <path
      d="M22 27c1.2-1.8 2.8-3 5-3 3.5 0 5.4 2.6 6 6"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

const ContentIcon = () => (
  <svg viewBox="0 0 48 48" className="servicesOverview__svg">
    <defs>
      <linearGradient id="contentGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#33d1ff" />
        <stop offset="1" stopColor="#0093c7" />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="10"
      width="28"
      height="28"
      rx="4"
      fill="url(#contentGrad)"
    />
    <rect x="16" y="16" width="16" height="3" rx="1.5" fill="#e6f7ff" />
    <rect x="16" y="22" width="10" height="3" rx="1.5" fill="#e6f7ff" />
    <rect x="16" y="28" width="12" height="3" rx="1.5" fill="#e6f7ff" />
  </svg>
)

const WebAppIcon = () => (
  <svg viewBox="0 0 48 48" className="servicesOverview__svg">
    <defs>
      <linearGradient id="webGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7dffb2" />
        <stop offset="1" stopColor="#00c48c" />
      </linearGradient>
    </defs>
    <rect
      x="8"
      y="12"
      width="32"
      height="22"
      rx="4"
      fill="url(#webGrad)"
    />
    <rect x="12" y="16" width="24" height="3" rx="1.5" fill="#e9fff5" />
    <rect x="12" y="21" width="12" height="8" rx="2" fill="#e9fff5" />
    <circle cx="30" cy="25" r="4" fill="#e9fff5" />
  </svg>
)

const CampaignIcon = () => (
  <svg viewBox="0 0 48 48" className="servicesOverview__svg">
    <defs>
      <linearGradient id="campaignGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd45b" />
        <stop offset="1" stopColor="#ff9f43" />
      </linearGradient>
    </defs>
    <path
      d="M12 18h24l-5 7 5 7H12z"
      fill="url(#campaignGrad)"
    />
    <circle cx="20" cy="25" r="3" fill="#fff" />
    <path
      d="M15 14V9"
      stroke="#ff9f43"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M24 13l2-5"
      stroke="#ff9f43"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M33 14l3-4"
      stroke="#ff9f43"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
)

const services: Service[] = [
  {
    title: 'تصميم الهويات البصرية',
    description: 'شعار، ألوان، وأنظمة بصرية تبني هوية علامتك من الصفر.',
    Icon: BrandingIcon,
  },
  {
    title: 'تصميم وتجهيز المحتوى',
    description: 'نصوص إبداعية، موشن، وفيديو يروي قصة مشروعك باحتراف.',
    Icon: ContentIcon,
  },
  {
    title: 'تصميم مواقع وتطبيقات',
    description: 'واجهات عصرية وتجربة مستخدم سلسة لمواقعك وتطبيقاتك.',
    Icon: WebAppIcon,
  },
  {
    title: 'إدارة الحملات التسويقية',
    description: 'استراتيجيات إعلانات مدروسة لزيادة الوصول والتحويل.',
    Icon: CampaignIcon,
  },
]

export function ServicesOverview() {
  return (
    <section className="section section--light servicesOverviewSection">
      <h2 className="section__title">ماذا نقدم لك في مزود؟</h2>
      <p className="section__subtitle">
        مجموعة متكاملة من الخدمات الإبداعية لبناء حضور رقمي قوي ومؤثر، من أول فكرة إلى إطلاق مشروعك.
      </p>

      <div className="servicesOverview">
        {services.map(({ title, description, Icon }, index) => (
          <motion.button
            key={title}
            type="button"
            className="servicesOverview__card"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="servicesOverview__iconWrap">
              <span className="servicesOverview__iconCircle">
                <Icon />
              </span>
            </span>
            <span className="servicesOverview__text">
              <h3>{title}</h3>
              <p>{description}</p>
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  )
}

