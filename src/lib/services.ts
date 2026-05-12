import paminklai from "@/assets/service-paminklai-card.jpg";
import paminklaiHero from "@/assets/service-paminklai-hero.webp";
import dengimas from "@/assets/service-dengimas-card.jpg";
import dengimasHero from "@/assets/service-dengimas-hero.webp";
import projektavimas from "@/assets/service-projektavimas-card.jpg";
import projektavimasHero from "@/assets/service-projektavimas-hero.webp";
import restauravimas from "@/assets/service-restauravimas-card.jpg";
import restauravimasHero from "@/assets/service-restauravimas-hero.jpg";
import graviravimas from "@/assets/service-graviravimas-original.jpg";
import autoriniai from "@/assets/service-autoriniai-original.jpg";
import didmenine from "@/assets/service-didmenine-original.jpg";

export type Service = {
  slug: string;
  num: string;
  nav: string;          // short name for nav
  title: string;        // card / overview title
  h1: string;           // page H1
  metaTitle: string;
  metaDescription: string;
  short: string;        // 1-line summary for cards
  intro: string;        // page intro paragraph
  accent: string;       // 1-line distinguishing emphasis shown on the page
  scope: { label: string; value: string }[]; // per-service distinguishing facts
  includes: string[];   // what the service includes
  whenRelevant: string[]; // when it makes sense
  process: { step: string; text: string }[];
  img: string;
  heroImg?: string;
  alt: string;
  heroAlt?: string;
};

export const services: Service[] = [
  {
    slug: "paminklu-gamyba",
    num: "01",
    nav: "Paminklų gamyba",
    title: "Paminklų gamyba",
    h1: "Granito paminklų gamyba",
    metaTitle: "Paminklų gamyba iš granito | Akmens Darbai · Elektrėnai",
    metaDescription:
      "Paminklų gamyba Elektrėnuose. Projektuojame, gaminame ir statome granito paminklus.",
    short: "Projektuojame, gaminame ir statome granito paminklus.",
    intro:
      "Projektuojame, gaminame ir statome granito paminklus. Dirbame Elektrėnuose ir kitur Lietuvoje.",
    accent: "Klasikiniai ir individualūs paminklai.",
    scope: [
      { label: "Paslauga", value: "Granito paminklai" },
      { label: "Darbai", value: "Gamyba ir montavimas" },
      { label: "Vieta", value: "Elektrėnai, visa LT" },
    ],
    includes: [
      "Paminklo eskizas",
      "Granito parinkimas",
      "Paminklo gamyba",
      "Raidės, datos, ornamentai ir portretai",
      "Montavimas kapavietėje",
    ],
    whenRelevant: [
      "Reikia naujo paminklo",
      "Norite pakeisti seną paminklą",
      "Reikia individualaus sprendimo",
    ],
    process: [
      { step: "Pokalbis", text: "Aptariame, kokio paminklo reikia." },
      { step: "Eskizas", text: "Parengiame eskizą ir suderiname sprendimą." },
      { step: "Gamyba", text: "Pagaminame paminklą dirbtuvėse." },
      { step: "Montavimas", text: "Atvežame ir sumontuojame kapavietėje." },
    ],
    img: paminklai,
    heroImg: paminklaiHero,
    alt: "Juodo granito paminklo detalė su švelniai išlenkta viršūne",
    heroAlt: "Šviesaus granito dviejų dalių paminklas su širdies formos išpjova ramioje kapinių aplinkoje",
  },
  {
    slug: "kapavieciu-projektavimas",
    num: "02",
    nav: "Kapaviečių projektavimas",
    title: "Kapaviečių projektavimas",
    h1: "Kapaviečių projektavimas",
    metaTitle: "Kapaviečių projektavimas | Akmens Darbai",
    metaDescription:
      "Kapaviečių projektavimas Elektrėnuose. Projektuojame paminklus, dangas ir bendrą kapavietės vaizdą.",
    short: "Projektuojame kapavietes ir paminklus.",
    intro:
      "Projektuojame paminklą, dangą ir bendrą kapavietės vaizdą. Prieš darbus suderiname projektą ir medžiagas.",
    accent: "Projektas prieš gamybą.",
    scope: [
      { label: "Paslauga", value: "Kapavietės projektas" },
      { label: "Apima", value: "Eskizas ir sąmata" },
      { label: "Vieta", value: "Elektrėnai, LT" },
    ],
    includes: [
      "Kapavietės apžiūra ir matavimai",
      "Kapavietės eskizas",
      "Medžiagų parinkimas",
      "Darbų sąmata",
      "Suderinimas su kapinių administracija, jei reikia",
    ],
    whenRelevant: [
      "Tvarkote kapavietę iš naujo",
      "Norite suderinto bendro vaizdo",
      "Norite prieš darbus matyti projektą",
    ],
    process: [
      { step: "Apžiūra", text: "Įvertiname kapavietę vietoje arba pagal nuotraukas." },
      { step: "Projektas", text: "Parengiame projektą ir suderiname jį su jumis." },
      { step: "Suderinimas", text: "Aptariame medžiagas ir darbus." },
      { step: "Įgyvendinimas", text: "Pagaminame ir sumontuojame pagal projektą." },
    ],
    img: projektavimas,
    heroImg: projektavimasHero,
    alt: "Juodo ir pilko granito paminklo detalė su reljefine šakele ir kryžiumi",
    heroAlt: "Sutvarkyta kapavietė su juodo granito paminklu, juoda skalda ir lotoso formos akmens akcentu",
  },
  {
    slug: "kapavietes-irengimo-darbai",
    num: "03",
    nav: "Kapaviečių įrengimas",
    title: "Kapaviečių įrengimas",
    h1: "Kapavietės įrengimo darbai",
    metaTitle: "Kapavietės įrengimo darbai | Akmens Darbai",
    metaDescription:
      "Kapavietės įrengimo darbai Elektrėnuose. Paruošiame pagrindą, montuojame paminklą, bortelius, plokštes ir kitus akmens elementus.",
    short: "Įrengiame kapavietes nuo pagrindo paruošimo iki galutinio montavimo.",
    intro:
      "Įrengiame kapavietes nuo sprendimo suderinimo iki galutinio montavimo: paruošiame pagrindą, montuojame paminklus, granito bortelius, plokštes ir kitus akmens elementus.",
    accent: "Kapavietės sutvarkymas iki galutinio rezultato.",
    scope: [
      { label: "Paslauga", value: "Kapavietės įrengimo darbai" },
      { label: "Apima", value: "Pagrindas, montavimas, akmens elementai" },
      { label: "Vieta", value: "Elektrėnai, LT" },
    ],
    includes: [
      "Kapavietės projekto ir medžiagų suderinimas",
      "Pagrindo paruošimas ir montavimo darbai",
      "Granito plokščių, bortelių ir paminklo montavimas",
      "Skaldos, akmens apdailos ir kitų detalių pritaikymas",
      "Kapavietės sutvarkymas po darbų",
    ],
    whenRelevant: [
      "Norite įrengti naują kapavietę",
      "Tvarkote kapavietę iki galutinio rezultato",
      "Reikia vienoje vietoje suderinti paminklą, dangą ir montavimo darbus",
    ],
    process: [
      { step: "Suderinimas", text: "Aptariame kapavietės sprendimą, medžiagas ir darbus." },
      { step: "Paruošimas", text: "Paruošiame pagrindą ir montavimo vietą." },
      { step: "Montavimas", text: "Sumontuojame paminklą, bortelius, plokštes ir kitus akmens elementus." },
      { step: "Užbaigimas", text: "Sutvarkome kapavietę ir perduodame užbaigtą rezultatą." },
    ],
    img: dengimas,
    heroImg: dengimasHero,
    alt: "Tvarkinga kapavietė su granito danga, borteliais ir paminklu",
    heroAlt: "Pilnai įrengta kapavietė su juodo granito plokštėmis, paminklu ir gėlių vazonais",
  },
  {
    slug: "kapu-dengimas-plokstemis",
    num: "04",
    nav: "Kapų dengimas plokštėmis",
    title: "Kapų dengimas plokštėmis",
    h1: "Kapų dengimas granito plokštėmis",
    metaTitle: "Kapų dengimas granito plokštėmis | Akmens Darbai · Elektrėnai",
    metaDescription:
      "Kapų dengimas granito plokštėmis Elektrėnuose. Toks sprendimas palengvina kapavietės priežiūrą.",
    short: "Dengiame kapus granito plokštėmis.",
    intro:
      "Kapų dengimas plokštėmis palengvina kapavietės priežiūrą ir suteikia kapavietei tvarkingą vaizdą.",
    accent: "Lengvesnė kapavietės priežiūra.",
    scope: [
      { label: "Paslauga", value: "Kapų dengimas plokštėmis" },
      { label: "Pamatas", value: "Drenažas + pasluoksnis" },
      { label: "Vieta", value: "Elektrėnai, LT" },
    ],
    includes: [
      "Kapavietės matavimai",
      "Pagrindo paruošimas",
      "Granito plokščių gamyba",
      "Plokščių montavimas",
      "Bordiūrai ir kiti akmens elementai",
    ],
    whenRelevant: [
      "Norite mažiau priežiūros",
      "Tvarkote kapavietę iš naujo",
      "Norite granito dangos vietoje skaldos ar žolės",
    ],
    process: [
      { step: "Matavimai", text: "Išmatuojame kapavietę." },
      { step: "Paruošimas", text: "Paruošiame pagrindą ir pagrindo sluoksnius." },
      { step: "Plokštės", text: "Paruošiame plokštes pagal kapavietės dydį." },
      { step: "Montavimas", text: "Sumontuojame plokštes kapavietėje." },
    ],
    img: dengimas,
    heroImg: dengimasHero,
    alt: "Kapavietės danga su tamsaus granito plokštėmis ir šviesia skalda",
    heroAlt: "Poliruota juodo granito kapavietės danga su paminklais ir gėlių vazonais",
  },
  {
    slug: "kapavieciu-restauravimas",
    num: "05",
    nav: "Kapaviečių restauravimas",
    title: "Kapaviečių restauravimas",
    h1: "Kapaviečių ir paminklų restauravimas",
    metaTitle: "Paminklų ir kapaviečių restauravimas | Akmens Darbai",
    metaDescription:
      "Paminklų ir kapaviečių restauravimas Elektrėnuose. Tvarkome susidėvėjusius paminklus, užrašus ir kapavietes.",
    short: "Restauruojame paminklus ir kapavietes.",
    intro:
      "Restauruojame paminklus, skulptūras ir kapavietes. Tvarkome užrašus, paviršius ir konstrukcijas.",
    accent: "Tvarkome susidėvėjusius paminklus ir kapavietes.",
    scope: [
      { label: "Apžiūra", value: "Vietoje" },
      { label: "Atliekama", value: "Studijoje + kapinėse" },
      { label: "Tinka", value: "Akmuo, betonas, skulptūra" },
    ],
    includes: [
      "Akmens valymas",
      "Įrašų atnaujinimas ir naujų datų graviravimas",
      "Trūkstamų dalių atstatymas",
      "Skulptūrų restauravimas",
      "Pakreipusio paminklo ištiesinimas",
    ],
    whenRelevant: [
      "Paminklas pasviro ar susidėvėjo",
      "Įrašai išbluko ar tapo sunkiai įskaitomi",
      "Norite sutvarkyti seną kapavietę",
    ],
    process: [
      { step: "Apžiūra", text: "Įvertiname paminklo ar kapavietės būklę." },
      { step: "Planavimas", text: "Aptariame, kokių darbų reikia." },
      { step: "Darbai", text: "Atliekame restauravimo darbus vietoje arba dirbtuvėse." },
      { step: "Užbaigimas", text: "Sutvarkome ir perduodame užbaigtą darbą." },
    ],
    img: restauravimas,
    heroImg: restauravimasHero,
    alt: "Atnaujinta kapavietė su restauruotu paminklu ir kryžiumi",
    heroAlt: "Atnaujinta kapavietė su juodo granito danga ir restauruotu šeimos paminklu",
  },
  {
    slug: "paminklu-graviravimas",
    num: "06",
    nav: "Paminklų graviravimas",
    title: "Paminklų graviravimas",
    h1: "Paminklų graviravimas",
    metaTitle: "Paminklų graviravimas: raidės, datos, portretai | Akmens Darbai",
    metaDescription:
      "Graviruojame raides, datas, ornamentus ir portretus ant esamų paminklų. Elektrėnai ir visa Lietuva.",
    short: "Atliekame paminklų graviravimo darbus.",
    intro:
      "Atliekame paminklų graviravimo darbus ant įvairių dydžių ir formų paminklų.",
    accent: "Raidės, datos, ornamentai ir portretai.",
    scope: [
      { label: "Paslauga", value: "Raidės, datos, portretai" },
      { label: "Vieta", value: "Studija arba kapavietė" },
      { label: "Apdaila", value: "Auksavimas, dažymas" },
    ],
    includes: [
      "Vardai, pavardės, datos",
      "Ornamentai: kryžiai, gėlės, medžiai, žvakės",
      "Portretai pagal nuotrauką",
      "Auksavimas ir dažymas",
      "Graviravimas vietoje, kai paminklas jau stovi",
    ],
    whenRelevant: [
      "Reikia įrašyti naują datą šeimos paminkle",
      "Norite pridėti ornamentą ar portretą",
      "Reikia atnaujinti seną įrašą",
    ],
    process: [
      { step: "Tekstas", text: "Sutariame dėl teksto ar piešinio." },
      { step: "Maketas", text: "Suderiname išdėstymą." },
      { step: "Graviravimas", text: "Atliekame graviravimo darbus." },
      { step: "Apdaila", text: "Jei reikia, dažome arba auksuojame." },
    ],
    img: graviravimas,
    alt: "Meistro rankos prie graviravimo darbo akmens dirbtuvėse",
  },
  {
    slug: "autoriniai-paminklai",
    num: "07",
    nav: "Autoriniai paminklai",
    title: "Autoriniai paminklai",
    h1: "Autoriniai paminklai",
    metaTitle: "Autoriniai, individualūs paminklai | Akmens Darbai",
    metaDescription:
      "Autoriniai ir individualūs paminklai Elektrėnuose. Projektuojame ir gaminame nestandartinius paminklus.",
    short: "Projektuojame ir gaminame individualius paminklus.",
    intro:
      "Projektuojame ir gaminame individualius paminklus, kai reikia nestandartinio sprendimo.",
    accent: "Paminklai pagal individualų sumanymą.",
    scope: [
      { label: "Paslauga", value: "Individualus paminklas" },
      { label: "Eskizai", value: "Projektas pagal idėją" },
      { label: "Medžiagos", value: "Granitas, bronza, metalas" },
    ],
    includes: [
      "Individualus eskizas ir maketas",
      "Skulptūrinis pjaustymas ir formavimas",
      "Mišrūs paviršiai: poliruotas, šlifuotas, natūralus",
      "Bronzos ar metalo elementų integracija",
      "Pilna gamyba ir montavimas",
    ],
    whenRelevant: [
      "Norite nestandartinio paminklo",
      "Turite savo idėją",
      "Ieškote individualaus sprendimo",
    ],
    process: [
      { step: "Idėja", text: "Aptariame jūsų norimą sprendimą." },
      { step: "Projektas", text: "Parengiame projektą ir suderiname jį." },
      { step: "Gamyba", text: "Pagaminame paminklą." },
      { step: "Montavimas", text: "Sumontuojame kapavietėje." },
    ],
    img: autoriniai,
    alt: "Autorinio paminklo skulptūrinė detalė iš tamsaus granito",
  },
  {
    slug: "didmenine-prekyba-paminklais",
    num: "08",
    nav: "Didmeninė prekyba",
    title: "Didmeninė prekyba paminklais",
    h1: "Didmeninė prekyba paminklais",
    metaTitle: "Didmeninė prekyba paminklais | Akmens Darbai",
    metaDescription:
      "Paminklų gamyba ir pardavimas partneriams Lietuvoje. Tiekiame paminklus ir granito ruošinius.",
    short: "Paminklų gamyba ir pardavimas partneriams.",
    intro:
      "Dirbame su kapaviečių tvarkymo įmonėmis ir akmens dirbtuvėmis. Tiekiame paminklus, ruošinius ir plokštes pagal užsakymą.",
    accent: "Paminklų gamyba ir pardavimas partneriams Lietuvoje.",
    scope: [
      { label: "Forma", value: "B2B sutartis" },
      { label: "Tiekimas", value: "Visa Lietuva" },
      { label: "Asortimentas", value: "Paminklai, ruošiniai, plokštės" },
    ],
    includes: [
      "Paminklų gamyba partneriams",
      "Granito ruošiniai pagal jūsų brėžinius",
      "Plokštės dangoms",
      "Pakrovimas ir pristatymas",
    ],
    whenRelevant: [
      "Esate kapaviečių tvarkymo įmonė",
      "Reikia paminklų ar ruošinių",
      "Ieškote gamybos partnerio",
    ],
    process: [
      { step: "Užklausa", text: "Aptariame, kokių gaminių reikia." },
      { step: "Suderinimas", text: "Suderiname užsakymą." },
      { step: "Gamyba", text: "Pagaminame gaminius." },
      { step: "Tiekimas", text: "Pristatome arba paruošiame atsiimti." },
    ],
    img: didmenine,
    alt: "Sutvarkytų kapaviečių ekspozicija su skirtingais paminklais ir dangomis",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
