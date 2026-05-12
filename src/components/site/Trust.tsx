import { Link } from "react-router-dom";
import bw from "@/assets/about-history-archive.jpg";
import modern from "@/assets/about-values-tulips.jpg";

const stats = [
  { n: "1991", l: "dirbame nuo" },
  { n: "Elektrėnai", l: "studija ir dirbtuvės" },
];

export default function Trust() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-4 reveal">Apie studiją</p>
            <div className="rule mb-8 reveal" />
            <h2 className="font-display text-[30px] sm:text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.015em] reveal">
              Akmens darbai nuo 1991 metų.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground max-w-md reveal">
              Akmens darbais ir paminklų gamyba užsiimame nuo 1991 m.
              Studija ir dirbtuvės Elektrėnuose.
            </p>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
              {stats.map((s) => (
                <div key={s.l} className="reveal">
                  <dt className="font-display text-3xl md:text-4xl tracking-tight">{s.n}</dt>
                  <dd className="mt-1 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 reveal">
              <Link
                to="/kontaktai"
                className="text-[12px] uppercase tracking-[0.22em] link-underline"
              >
                Susisiekti →
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <figure className="reveal sm:mt-12">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={bw}
                  alt="Archyvinė nuotrauka: ankstyvosios akmens dirbtuvės ir jose dirbantis meistras"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Dirbtuvės · arch.
              </figcaption>
            </figure>
            <figure className="reveal">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={modern}
                  alt="Gėlės ant prižiūrėtos kapavietės šalia tamsaus granito paminklo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Studija · 2024
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
