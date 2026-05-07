import { Link } from "react-router-dom";
import { services } from "@/lib/services";

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Link to="/" className="font-display text-3xl md:text-4xl text-background">
              Akmens<span className="text-accent">·</span>Darbai
            </Link>
            <p className="mt-4 text-[14px] max-w-sm leading-relaxed">
              Akmens studija memorialinėms erdvėms. Vilnius, Elektrėnai, visa Lietuva.
            </p>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-background/50 mb-4">Paslaugos</p>
            <ul className="space-y-2 text-[14px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="link-underline">{s.nav}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-background/50 mb-4">Susisiekti</p>
            <ul className="space-y-2 text-[14px]">
              <li><a href="tel:+37052752628" className="link-underline">+370 5 275 2628</a></li>
              <li><a href="tel:+37069870380" className="link-underline">+370 698 70380</a></li>
              <li><a href="mailto:info@akmensdarbai.lt" className="link-underline">info@akmensdarbai.lt</a></li>
              <li className="text-background/60 pt-2">Kalvarijų g. 125, Vilnius, LT-08221</li>
              <li className="text-background/60">Rungos g. 18, Elektrėnai</li>
              <li className="text-background/60 pt-2">I–V 8:00–17:00 · VI–VII nedirbame</li>
            </ul>
            <Link
              to="/kontaktai"
              className="mt-6 inline-block text-[12px] uppercase tracking-[0.22em] px-5 py-3 border border-background/40 hover:bg-background hover:text-foreground transition-colors"
            >
              Gauti konsultaciją
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-background/55">
          <p>© {new Date().getFullYear()} Akmens Darbai. Visos teisės saugomos.</p>
          <p className="uppercase tracking-[0.22em]">Vilnius · Elektrėnai · LT</p>
        </div>
      </div>
    </footer>
  );
}
