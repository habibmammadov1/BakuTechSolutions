const INSTAGRAM = "https://www.instagram.com/bakutechsolutions";

const services = [
  "ERP və CRM həlləri",
  "Mobil və veb applər",
  "Müasir veb saytlar",
  "Süni intellekt həlləri",
  "Reklam kampaniyaları",
  "Rəqəmsal strategiya",
  "IT dəstəyi",
];

export default function Home() {
  return (
    <div className="page">
      {/* decorative white waves */}
      <svg className="wave wave-top" viewBox="0 0 600 300" aria-hidden="true">
        <path d="M-20 60 C 80 -20, 160 140, 260 70 S 420 -10, 620 40" />
      </svg>
      <svg className="wave wave-bottom" viewBox="0 0 600 300" aria-hidden="true">
        <path d="M-20 250 C 120 160, 220 300, 340 220 S 520 130, 620 200" />
      </svg>

      <header className="topbar">
        <a className="brand" href="/" aria-label="Bakı Texnoloji Həlləri">
          <img src="/logo.svg" alt="" width={44} height={33} />
          <span>
            Bakı Texnoloji
            <br />
            Həlləri
          </span>
        </a>
        <a className="pill" href={INSTAGRAM} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" className="dot" />
          </svg>
          @bakutechsolutions
        </a>
      </header>

      <main className="hero">
        <div className="copy">
          <p className="eyebrow">
            <span className="live" /> Yeni saytımız hazırlanır
          </p>
          <h1>
            <span className="big">Tezliklə</span>
            <span className="script">xidmətinizdəyik</span>
          </h1>
          <p className="lead">
            Biz təxmin etmirik — strategiya qurur, analiz edir və nəticə yaradırıq. Veb saytlardan süni
            intellekt həllərinə qədər biznesiniz üçün <strong>ağıllı texnologiyalar</strong> hazırlayırıq.
          </p>
          <div className="actions">
            <a className="btn primary" href={INSTAGRAM} target="_blank" rel="noopener">
              Bizi izləyin
            </a>
            <a className="btn ghost-btn" href="#xidmetler">
              Nə edirik?
            </a>
          </div>
        </div>

        <div className="visual" aria-hidden="true">
          <div className="disc" />
          <img className="mark" src="/logo.svg" alt="" />
          <div className="tag t1">
            Play smart.
            <br />
            <b>Grow fast.</b>
          </div>
          <div className="tag t2">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            strategy meets
            <br />
            technology.
          </div>
        </div>
      </main>

      <section className="services" id="xidmetler" aria-label="Xidmətlər">
        <ul>
          {services.map((s, i) => (
            <li key={s}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {s}
            </li>
          ))}
        </ul>
      </section>

      <footer className="foot">
        <span>© {new Date().getFullYear()} Bakı Texnoloji Həlləri</span>
        <span>bakutechs.com</span>
      </footer>
    </div>
  );
}
