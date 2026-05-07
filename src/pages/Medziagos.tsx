import SEO from "@/components/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBlock from "@/components/site/CtaBlock";
import materialsImg from "@/assets/materials-editorial-granite.webp";

const stones = [
  { name: "Juodas granitas", origin: "Absolute Black · IND", note: "Dažnas pasirinkimas paminklams." },
  { name: "Šiltas pilkas", origin: "Bohus · SWE", note: "Tinka paminklams ir kapaviečių apdailai." },
  { name: "Tamsiai raudonas", origin: "Vanga · UKR", note: "Ryškesnio tono granitas." },
  { name: "Šviesus pilkas", origin: "Kashmir White · IND", note: "Tinka dangoms ir šviesesniems sprendimams." },
];

export default function Medziagos() {
  return (
    <>
      <SEO
        title="Granitas paminklams ir dangoms | Akmens Darbai"
        description="Granitas paminklams ir dangoms. Pavyzdžius galite pamatyti studijoje Vilniuje arba Elektrėnuose."
      />
      <PageHero
        eyebrow="Medžiagos"
        h1="Granitas paminklams ir dangoms."
        intro="Dirbame su keliomis granito rūšimis. Dažniausiai naudojamus akmens pavyzdžius galite pamatyti studijoje."
        crumbs={[{ label: "Pradžia", to: "/" }, { label: "Medžiagos" }]}
      />

      <section className="pb-20 md:pb-28">
        <div className="container-editorial">
          <figure className="reveal mb-16 md:mb-20">
            <div className="aspect-[16/8] overflow-hidden bg-muted">
              <img
                src={materialsImg}
                alt="Granito pavyzdžiai: juodas, pilkas, šviesus ir tamsiai raudonas akmuo"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          <ul className="divide-y divide-border border-y border-border">
            {stones.map((s, i) => (
              <li
                key={s.name}
                className="py-8 grid grid-cols-12 gap-6 items-baseline reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="col-span-12 md:col-span-5">
                  <p className="font-display text-2xl md:text-3xl">{s.name}</p>
                </div>
                <div className="col-span-6 md:col-span-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {s.origin}
                  </p>
                </div>
                <p className="col-span-12 md:col-span-4 text-[14px] text-muted-foreground leading-relaxed">
                  {s.note}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl text-[14px] text-muted-foreground reveal">
            Asortimentas platesnis nei šis sąrašas. Jei norite, pavyzdžius galite apžiūrėti
            studijoje Vilniuje arba Elektrėnuose.
          </p>
        </div>
      </section>

      <CtaBlock title="Norite pamatyti pavyzdžius?" text="Susisiekite ir suderinsime laiką studijoje." />
    </>
  );
}
