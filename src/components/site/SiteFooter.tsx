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
              Paminklų gamyba, graviravimas ir kapų dengimas plokštėmis.
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
              <li><a href="tel:+37060238031" className="link-underline">+370 602 38031</a></li>
              <li><a href="mailto:akmensdarbai@inbox.lt" className="link-underline">akmensdarbai@inbox.lt</a></li>
              <li className="text-background/60 pt-2">Rungos g. 8, Elektrėnai, 26109 Elektrėnų sav.</li>
              <li className="text-background/60 pt-2">Pr - Pn: 08:30 - 19:00 val</li>
              <li className="text-background/60">Š: 09:00 - 15:00 val</li>
            </ul>
            <Link
              to="/kontaktai"
              className="mt-6 inline-block text-[12px] uppercase tracking-[0.22em] px-5 py-3 border border-background/40 hover:bg-background hover:text-foreground transition-colors"
            >
              Kontaktai
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
