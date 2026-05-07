import { Link } from "react-router-dom";

type Props = {
  title?: string;
  text?: string;
};

export default function CtaBlock({
  title = "Susisiekite",
  text = "Parašykite arba paskambinkite. Aptarsime, kokių darbų reikia jūsų kapavietei.",
}: Props) {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal">Susisiekti</p>
            <div className="rule mb-6 reveal" />
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.015em] reveal">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground reveal">
              {text}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-5 md:justify-end reveal">
            <Link
              to="/kontaktai"
              className="text-[12px] uppercase tracking-[0.22em] px-6 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Susisiekti
            </Link>
            <a href="tel:+37069870380" className="text-[13px] link-underline">
              +370 698 70380
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
