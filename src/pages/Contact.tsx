export function Contact() {
  return (
    <main className="page-content section section--light">
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2 className="section__title">اتصل بنا</h2>
        <p className="section__subtitle">
          يسعدنا تواصلك معنا لبدء مشروعك أو للاستفسار عن أي تفاصيل، فقط اترك لنا بياناتك وسنعود إليك سريعاً.
        </p>
        <form className="contactForm">
          <div className="contactForm__row">
            <input placeholder="الاسم الكامل" />
            <input placeholder="البريد الإلكتروني" />
          </div>
          <div className="contactForm__row">
            <input placeholder="رقم الجوال" />
            <input placeholder="نوع الخدمة المطلوبة" />
          </div>
          <textarea
            className="contactForm__message"
            rows={4}
            placeholder="اكتب رسالتك هنا..."
          />
          <button type="submit" className="btn btn--primary">
            إرسال الرسالة
          </button>
        </form>
      </div>
    </main>
  )
}

