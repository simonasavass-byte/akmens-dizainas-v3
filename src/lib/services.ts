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
    metaTitle: "Paminklų gamyba iš granito | Akmens Darbai · Vilnius, Elektrėnai",
    metaDescription:
      "Paminklų gamyba Vilniuje ir Elektrėnuose. Projektuojame, gaminame ir statome granito paminklus.",
    short: "Klasikiniai ir šiuolaikiški granito paminklai pagal jūsų pageidavimus.",
    intro:
      "Gaminame granito paminklus nuo eskizo iki sumontavimo kapavietėje. Dirbame Vilniuje ir Elektrėnuose, montuojame visoje Lietuvoje.",
    accent: "Klasikinė ir moderni forma. Vienam, dvigubam ar šeimos kapui.",
    scope: [
      { label: "Paslauga", value: "Granito paminklai" },
      { label: "Darbai", value: "Gamyba ir montavimas" },
      { label: "Vieta", value: "Vilnius, Elektrėnai, visa LT" },
    ],
    includes: [
      "Paminklo eskizas",
      "Granito parinkimas iš patikrintų tiekėjų",
      "Pjaustymas, šlifavimas ir poliravimas studijoje",
      "Užrašai, datos, ornamentai ir portretai",
      "Pristatymas ir montavimas vietoje",
    ],
    whenRelevant: [
      "Statomas naujas paminklas vienam ar šeimos kapui",
      "Norima keisti seną betoninį paminklą į granitinį",
      "Reikia individualios formos, kurios nerasite kataloge",
    ],
    process: [
      { step: "Pokalbis", text: "Aptariame idėją, kapavietės dydį ir biudžetą." },
      { step: "Eskizas ir kaina", text: "Parodome vizualizaciją ir pateikiame aiškią sąmatą." },
      { step: "Gamyba", text: "Pjauname, poliruojame, graviruojame studijoje. Etapus rodome." },
      { step: "Montavimas", text: "Atvežame ir įrengiame kapavietėje. Po darbų sutvarkome aplinką." },
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
      "Projektuojame kapavietes Vilniuje, Elektrėnuose ir visoje Lietuvoje. Vizualizacija, medžiagos, proporcijos — viename projekte.",
    short: "Vientisas kapavietės sprendimas — nuo proporcijų iki medžiagų.",
    intro:
      "Projektuojame kapavietę kaip visumą: paminklą, dangą, bordiūrą ir aplinką. Pamatote, kaip viskas atrodys, dar prieš pradedant darbus.",
    accent: "Pirmiausia projektas, tada gamyba.",
    scope: [
      { label: "Paslauga", value: "Kapavietės projektas" },
      { label: "Apima", value: "Eskizas ir sąmata" },
      { label: "Vieta", value: "Vilnius, Elektrėnai, LT" },
    ],
    includes: [
      "Kapavietės matavimai ir įvertinimas vietoje",
      "Kapavietės eskizas",
      "Medžiagų ir spalvų parinkimas",
      "Tiksli darbų ir medžiagų sąmata",
      "Suderinimas su kapinių administracija, jei reikia",
    ],
    whenRelevant: [
      "Tvarkote senesnę kapavietę iš naujo",
      "Norite vientiso sprendimo dvigubam ar šeimos kapui",
      "Sunku įsivaizduoti, kaip viskas derės tarpusavyje",
    ],
    process: [
      { step: "Apžiūra", text: "Atvykstame į kapavietę arba dirbame pagal jūsų matmenis ir nuotraukas." },
      { step: "Projektas", text: "Parengiame kapavietės projektą ir aptariame, ką keisti." },
      { step: "Galutinis projektas", text: "Patvirtinus — fiksuojame medžiagas, kainą ir terminus." },
      { step: "Įgyvendinimas", text: "Pagaminame ir sumontuojame pagal projektą." },
    ],
    img: projektavimas,
    heroImg: projektavimasHero,
    alt: "Juodo ir pilko granito paminklo detalė su reljefine šakele ir kryžiumi",
    heroAlt: "Sutvarkyta kapavietė su juodo granito paminklu, juoda skalda ir lotoso formos akmens akcentu",
  },
  {
    slug: "kapu-dengimas-plokstemis",
    num: "03",
    nav: "Kapų dengimas plokštėmis",
    title: "Kapų dengimas plokštėmis",
    h1: "Kapų dengimas granito plokštėmis",
    metaTitle: "Kapų dengimas granito plokštėmis | Akmens Darbai · Vilnius",
    metaDescription:
      "Dengiame kapavietes granito plokštėmis. Tinkamas pasluoksnis, drenažas, ilgaamžis ir lengvai prižiūrimas paviršius.",
    short: "Granito danga su tinkamu pasluoksniu ir drenažu.",
    intro:
      "Padengiame kapavietę granito plokštėmis taip, kad paviršius nesusės ir nesutrūkinės. Skiriame laiko pamatui — tai svarbiausia ilgaamžiškumui.",
    accent: "Mažiau priežiūros. Be žolės, be smėlio, be pelijančios dangos.",
    scope: [
      { label: "Paslauga", value: "Kapų dengimas plokštėmis" },
      { label: "Pamatas", value: "Drenažas + pasluoksnis" },
      { label: "Vieta", value: "Vilnius, Elektrėnai, LT" },
    ],
    includes: [
      "Senos dangos demontavimas",
      "Pasluoksnio paruošimas ir drenažas",
      "Granito plokščių pjaustymas pagal kapavietės formą",
      "Bordiūro ir vazų montavimas",
      "Siūlių užtaisymas ir paviršiaus apdaila",
    ],
    whenRelevant: [
      "Norite mažiau priežiūros — be žolės, be smėlio",
      "Sena danga įdubo arba įtrūko",
      "Tvarkote kapavietę visam laikui",
    ],
    process: [
      { step: "Matavimai", text: "Užmatuojame kapavietę ir aptariame plokščių schemą." },
      { step: "Pamatas", text: "Paruošiame pasluoksnį, įrengiame drenažą." },
      { step: "Plokštės", text: "Pjauname ir poliruojame plokštes pagal jūsų kapavietę." },
      { step: "Montavimas", text: "Sumontuojame, užtaisome siūles, sutvarkome aplinką." },
    ],
    img: dengimas,
    heroImg: dengimasHero,
    alt: "Kapavietės danga su tamsaus granito plokštėmis ir šviesia skalda",
    heroAlt: "Poliruota juodo granito kapavietės danga su paminklais ir gėlių vazonais",
  },
  {
    slug: "kapavieciu-restauravimas",
    num: "04",
    nav: "Kapaviečių restauravimas",
    title: "Kapaviečių restauravimas",
    h1: "Kapaviečių ir paminklų restauravimas",
    metaTitle: "Paminklų ir kapaviečių restauravimas | Akmens Darbai",
    metaDescription:
      "Restauruojame senus paminklus, skulptūras ir kapavietes. Atnaujiname įrašus, valome akmenį, atstatome trūkstamas dalis.",
    short: "Atidus senų paminklų ir skulptūrų atstatymas.",
    intro:
      "Atstatome senus paminklus, skulptūras ir kapavietes — pagarbiai originaliai medžiagai. Pirmiausia išsaugome tai, kas yra; tik tada keičiame, ko nebegalima išgelbėti.",
    accent: "Pirmenybė — originalui. Keičiame tik tai, ko išgelbėti nebegalima.",
    scope: [
      { label: "Apžiūra", value: "Vietoje" },
      { label: "Atliekama", value: "Studijoje + kapinėse" },
      { label: "Tinka", value: "Akmuo, betonas, skulptūra" },
    ],
    includes: [
      "Akmens valymas (be agresyvios chemijos)",
      "Įrašų atnaujinimas ir naujų datų graviravimas",
      "Trūkstamų dalių atstatymas",
      "Skulptūrų restauravimas",
      "Pakreipusio paminklo ištiesinimas ir pamato sutvirtinimas",
    ],
    whenRelevant: [
      "Paminklas pasviro arba atsivėrė siūlės",
      "Įrašai išbluko ar nebematomi",
      "Senas šeimos paminklas, kurį norite išsaugoti",
    ],
    process: [
      { step: "Apžiūra", text: "Įvertiname būklę vietoje ir aptariame, ką galima atstatyti." },
      { step: "Planas", text: "Pateikiame restauravimo planą ir kainą." },
      { step: "Darbai", text: "Dalį darbų atliekame vietoje, dalį — studijoje." },
      { step: "Užbaigimas", text: "Grąžiname į vietą, sutvarkome aplinką." },
    ],
    img: restauravimas,
    heroImg: restauravimasHero,
    alt: "Atnaujinta kapavietė su restauruotu paminklu ir kryžiumi",
    heroAlt: "Atnaujinta kapavietė su juodo granito danga ir restauruotu šeimos paminklu",
  },
  {
    slug: "paminklu-graviravimas",
    num: "05",
    nav: "Paminklų graviravimas",
    title: "Paminklų graviravimas",
    h1: "Paminklų graviravimas",
    metaTitle: "Paminklų graviravimas: raidės, datos, portretai | Akmens Darbai",
    metaDescription:
      "Graviruojame raides, datas, ornamentus ir portretus ant esamų paminklų. Vilnius, Elektrėnai, visa Lietuva.",
    short: "Tikslus raidžių, datų, ornamentų ir portretų graviravimas.",
    intro:
      "Graviruojame ant naujų ir jau pastatytų paminklų. Dirbame ir studijoje, ir vietoje kapinėse — kai paminklo nuimti negalima.",
    accent: "Datos, portretai, ornamentai — taip pat ir ant jau pastatyto paminklo.",
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
      "Senas įrašas išbluko ir jį reikia atnaujinti",
    ],
    process: [
      { step: "Tekstas ir motyvas", text: "Sutariame, kas bus graviruojama ir kokiu šriftu." },
      { step: "Maketas", text: "Suderiname užrašo ar ornamento išdėstymą." },
      { step: "Graviravimas", text: "Atliekame studijoje arba atvykstame į kapavietę." },
      { step: "Apdaila", text: "Auksuojame arba dažome, jei reikia." },
    ],
    img: graviravimas,
    alt: "Meistro rankos prie graviravimo darbo akmens dirbtuvėse",
  },
  {
    slug: "autoriniai-paminklai",
    num: "06",
    nav: "Autoriniai paminklai",
    title: "Autoriniai paminklai",
    h1: "Autoriniai paminklai",
    metaTitle: "Autoriniai, individualūs paminklai | Akmens Darbai",
    metaDescription:
      "Kuriame skulptūrinius, netipinius paminklus. Individualus projektas, derinami akmens paviršiai ir formos.",
    short: "Skulptūrinės formos, kurių nerasite kataloge.",
    intro:
      "Kai standartinis sprendimas netinka — kuriame paminklą iš naujo. Skulptūrinės formos, neįprasti pjūviai, derinami poliruoto ir natūralaus akmens paviršiai.",
    accent: "Vienetinis projektas. Ne katalogo forma, o jūsų istorija akmenyje.",
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
      "Norite kažko unikalaus, asmeniško",
      "Turite konkrečią idėją, bet reikia ją įgyvendinti akmenyje",
      "Ieškote architektūriškai stipraus sprendimo",
    ],
    process: [
      { step: "Idėja", text: "Išklausome, ką norite išreikšti per formą ir medžiagą." },
      { step: "Eskizai", text: "Parengiame projektą ir suderiname detales." },
      { step: "Maketas", text: "Paruošiame sprendinį gamybai." },
      { step: "Gamyba", text: "Realizuojame studijoje ir montuojame vietoje." },
    ],
    img: autoriniai,
    alt: "Autorinio paminklo skulptūrinė detalė iš tamsaus granito",
  },
  {
    slug: "didmenine-prekyba-paminklais",
    num: "07",
    nav: "Didmeninė prekyba",
    title: "Didmeninė prekyba paminklais",
    h1: "Didmeninė prekyba paminklais",
    metaTitle: "Didmeninė prekyba paminklais | Akmens Darbai",
    metaDescription:
      "Paminklų gamyba ir pardavimas partneriams Lietuvoje. Tiekiame paminklus ir granito ruošinius.",
    short: "Tiekiame paminklus ir ruošinius partneriams Lietuvoje.",
    intro:
      "Dirbame su kapaviečių tvarkymo įmonėmis ir akmens dirbtuvėmis. Tiekiame paminklus, ruošinius ir plokštes pagal užsakymą.",
    accent: "Paminklų gamyba ir pardavimas partneriams Lietuvoje.",
    scope: [
      { label: "Forma", value: "B2B sutartis" },
      { label: "Tiekimas", value: "Visa Lietuva" },
      { label: "Asortimentas", value: "Paminklai, ruošiniai, plokštės" },
    ],
    includes: [
      "Standartiniai paminklai pagal katalogą",
      "Granito ruošiniai pagal jūsų brėžinius",
      "Plokštės dangoms",
      "Sutartos kainos ir tiekimo terminai",
      "Pakrovimas ir pristatymas",
    ],
    whenRelevant: [
      "Esate kapaviečių tvarkymo įmonė",
      "Reikia stabilaus tiekėjo Lietuvoje",
      "Ieškote partnerio konkretiems projektams",
    ],
    process: [
      { step: "Susipažinimas", text: "Aptariame jūsų poreikius ir tipinius užsakymus." },
      { step: "Sąlygos", text: "Sutariame kainas, terminus ir tiekimo grafiką." },
      { step: "Užsakymai", text: "Priimame pagal sutartą formą — el. paštu arba telefonu." },
      { step: "Tiekimas", text: "Pagaminame ir pristatome arba paruošiame atsiimti." },
    ],
    img: didmenine,
    alt: "Sutvarkytų kapaviečių ekspozicija su skirtingais paminklais ir dangomis",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
