import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__col--brand">
          <h3 className="footer__title">مزود</h3>
          <p className="footer__text">
            لمسة احترافية في تصميم المواقع، الهوية البصرية، والتسويق الإلكتروني لرفع حضورك الرقمي.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__subtitle">روابط سريعة</h4>
          <ul className="footer__list">
            <li>الرئيسية</li>
            <li>الخدمات</li>
            <li>أعمالنا</li>
            <li>اتصل بنا</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__subtitle">تواصل معنا</h4>
          <p className="footer__text">البريد: info@example.com</p>
          <p className="footer__text">الهاتف: 0000 000 000</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} مزود. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}

