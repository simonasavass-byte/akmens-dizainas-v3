from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path("/Users/arvydas/Desktop/Websites/akmens-dizainas-v3")
OUTPUT_DIR = ROOT / "output" / "meta-ad" / "sequence"
WIDTH = 1080
HEIGHT = 1920

GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"

BEIGE = "#C9AA79"
BEIGE_DARK = "#B99661"
CHARCOAL = "#575A62"
CHARCOAL_DARK = "#3B3F46"
WHITE = "#F8F3EA"
WHITE_SOFT = "#ECE6DC"
ACCENT = "#F4D7A1"


SLIDES = [
    {
        "name": "01-intro",
        "bg": ROOT / "src" / "assets" / "hero-monument.jpg",
        "mode": "intro",
        "kicker": "Meta reklama",
        "title": ["4 klaidos", "renkantis", "paminklą"],
        "subline": "Kurios vėliau kainuoja daugiau nei atrodė pradžioje",
        "list": [
            "01 Pigiausias akmuo",
            "02 Be savo dirbtuvių",
            "03 Taupymas ant įrengimo",
            "04 Be konsultacijos",
        ],
        "duration": 1500,
    },
    {
        "name": "02-klaida-01",
        "bg": ROOT / "src" / "assets" / "service-paminklai.jpg",
        "mode": "mistake",
        "step": "01 / 04",
        "title": "Gaminti iš pigiausio akmens",
        "lede": "Maža kaina pradžioje dažnai tampa didesnėmis išlaidomis vėliau.",
        "bullets": [
            "greičiau blunka",
            "geria drėgmę",
            "prasčiau atlaiko mūsų klimatą",
        ],
        "result": "Po kelių metų vaizdas ir kokybė gali nuvilti.",
        "duration": 1600,
    },
    {
        "name": "03-klaida-02",
        "bg": ROOT / "src" / "assets" / "service-autoriniai.jpg",
        "mode": "mistake",
        "step": "02 / 04",
        "title": "Rinktis pardavėją be savo dirbtuvių",
        "lede": "Be nuosavos gamybos dažnai gaunate tarpininką, o ne tikrą meistrą.",
        "bullets": [
            "tas pats paminklas kainuoja brangiau",
            "mažiau lankstumo pakeitimams",
            "silpnesnė atsakomybė už rezultatą",
        ],
        "result": "Daugiau sumokate, bet gaunate mažiau kontrolės.",
        "duration": 1600,
    },
    {
        "name": "04-klaida-03",
        "bg": ROOT / "src" / "assets" / "gallery-1.jpg",
        "mode": "mistake",
        "step": "03 / 04",
        "title": "Taupyti ant įrengimo darbų",
        "lede": "Net ir geras paminklas neatsilaikys, jei blogai paruoštas pagrindas.",
        "bullets": [
            "nesutvarkomas gruntas",
            "neparuošiamas tvirtas pagrindas",
            "atsiranda sėdimas ar pasvirimas",
        ],
        "result": "Vėliau gali atsirasti plyšiai ir taisymo išlaidos.",
        "duration": 1600,
    },
    {
        "name": "05-klaida-04",
        "bg": ROOT / "src" / "assets" / "service-graviravimas.jpg",
        "mode": "mistake",
        "step": "04 / 04",
        "title": "Pirkti be konsultacijos ir brėžinio",
        "lede": "Be aiškaus vaizdo lengva pasirinkti neproporcingą sprendimą.",
        "bullets": [
            "netinka kapavietės masteliui",
            "sunku įvertinti galutinį vaizdą",
            "sprendimas priimamas per anksti",
        ],
        "result": "Brėžinys leidžia iš anksto matyti, ar pasirinkimas tikrai tinka.",
        "duration": 1600,
    },
    {
        "name": "06-cta",
        "bg": ROOT / "src" / "assets" / "service-paminklai.jpg",
        "mode": "cta",
        "step": "Akmens darbai",
        "title": "Ieškote kokybiško ir ilgaamžio sprendimo?",
        "lede": "Jeigu norite ramybės ne tik šiandien, bet ir po daugelio metų, kreipkitės į mus.",
        "contact_left": ["Rungos g. 8, Elektrėnai", "www.akmensdarbai.lt"],
        "contact_right": ["+370 602 38031", "Konsultacija ir projektavimas"],
        "duration": 2000,
    },
]


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def draw_text_lines(draw: ImageDraw.ImageDraw, xy: tuple[int, int], lines: list[str], text_font: ImageFont.FreeTypeFont, fill: str, spacing: int) -> int:
    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=text_font, fill=fill)
        bbox = draw.textbbox((x, y), line, font=text_font)
        y = bbox[3] + spacing
    return y


def fit_lines(draw: ImageDraw.ImageDraw, text: str, max_width: int, text_font: ImageFont.FreeTypeFont) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if draw.textbbox((0, 0), candidate, font=text_font)[2] <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def load_bg(path: Path, mode: str) -> Image.Image:
    image = Image.open(path).convert("RGB")
    if image.width < image.height:
        scale = max(WIDTH / image.width, HEIGHT / image.height)
        resized = image.resize((int(image.width * scale), int(image.height * scale)), Image.Resampling.LANCZOS)
        left = max(0, (resized.width - WIDTH) // 2)
        top = max(0, (resized.height - HEIGHT) // 2)
        image = resized.crop((left, top, left + WIDTH, top + HEIGHT))
    else:
        scale = max(WIDTH / image.height, HEIGHT / image.height)
        resized = image.resize((int(image.width * scale), int(image.height * scale)), Image.Resampling.LANCZOS)
        left = max(0, (resized.width - WIDTH) // 3)
        image = resized.crop((left, 0, left + WIDTH, HEIGHT))

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    odraw.rectangle((0, 0, WIDTH, HEIGHT), fill=(20, 18, 16, 98))
    if mode == "intro":
        odraw.rectangle((0, 0, WIDTH, 820), fill=(15, 13, 12, 70))
        odraw.rectangle((0, 1360, WIDTH, HEIGHT), fill=(10, 10, 10, 130))
    elif mode == "cta":
        odraw.rectangle((0, 0, WIDTH, 500), fill=(15, 13, 12, 55))
        odraw.rectangle((0, 1080, WIDTH, HEIGHT), fill=(8, 8, 8, 155))
    else:
        odraw.rectangle((0, 0, WIDTH, 560), fill=(15, 13, 12, 55))
        odraw.rectangle((0, 960, WIDTH, HEIGHT), fill=(8, 8, 8, 135))
    return Image.alpha_composite(image.convert("RGBA"), overlay)


def draw_chip(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, fill: str, text: str, text_font: ImageFont.FreeTypeFont) -> None:
    draw.rounded_rectangle((x, y, x + w, y + h), radius=h // 2, fill=fill)
    bbox = draw.textbbox((0, 0), text, font=text_font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x + (w - tw) / 2, y + (h - th) / 2 - 5), text, font=text_font, fill=WHITE)


def draw_brand_footer(draw: ImageDraw.ImageDraw) -> None:
    draw.text((80, 1840), "AKMENSDARBAI.LT", font=font(ARIAL_BOLD, 28), fill=WHITE_SOFT)


def render_intro(slide: dict) -> Image.Image:
    base = load_bg(slide["bg"], slide["mode"])
    draw = ImageDraw.Draw(base)

    draw_chip(draw, 80, 86, 170, 98, BEIGE_DARK, "4 klaidos", font(ARIAL_BOLD, 28))
    draw.text((278, 104), slide["kicker"], font=font(ARIAL_BOLD, 28), fill=WHITE_SOFT)

    draw.rounded_rectangle((80, 240, 1000, 870), radius=72, fill=BEIGE)
    title_font = font(GEORGIA_BOLD, 104)
    y = 300
    for line in slide["title"]:
        draw.text((120, y), line, font=title_font, fill=WHITE)
        y += 128
    draw.text((124, 760), slide["subline"], font=font(ARIAL, 35), fill=WHITE_SOFT)

    draw.rounded_rectangle((80, 1010, 1000, 1530), radius=62, fill=CHARCOAL)
    draw.text((120, 1075), "Šiame klipe:", font=font(ARIAL_BOLD, 30), fill=ACCENT)
    item_font = font(ARIAL_BOLD, 36)
    positions = [(120, 1145), (120, 1260), (120, 1375), (560, 1260)]
    for item, pos in zip(slide["list"], positions):
        draw.text(pos, item, font=item_font, fill=WHITE)

    draw.rounded_rectangle((80, 1610, 1000, 1770), radius=46, fill=(54, 57, 63, 220))
    draw.text((120, 1658), "Tikslas paprastas: išvengti brangių sprendimų klaidų.", font=font(ARIAL_BOLD, 34), fill=WHITE)

    draw_brand_footer(draw)
    return base.convert("RGB")


def render_mistake(slide: dict) -> Image.Image:
    base = load_bg(slide["bg"], slide["mode"])
    draw = ImageDraw.Draw(base)

    draw_chip(draw, 80, 86, 136, 92, BEIGE_DARK, slide["step"], font(ARIAL_BOLD, 28))
    draw.text((244, 106), "4 klaidos renkantis paminklą", font=font(ARIAL_BOLD, 28), fill=WHITE_SOFT)

    draw.rounded_rectangle((80, 230, 1000, 640), radius=70, fill=BEIGE)
    title_font = font(GEORGIA_BOLD, 70)
    title_lines = fit_lines(draw, slide["title"], 760, title_font)
    y = 300
    for line in title_lines:
        draw.text((120, y), line, font=title_font, fill=WHITE)
        y += 92
    lede_lines = fit_lines(draw, slide["lede"], 760, font(ARIAL, 34))
    draw_text_lines(draw, (124, 520), lede_lines[:3], font(ARIAL, 34), WHITE_SOFT, 10)

    draw.rounded_rectangle((80, 930, 1000, 1540), radius=62, fill=CHARCOAL)
    draw.text((120, 995), "Kodėl tai klaida:", font=font(ARIAL_BOLD, 30), fill=ACCENT)
    bullet_font = font(ARIAL_BOLD, 36)
    bullet_y = 1070
    for bullet in slide["bullets"]:
        draw.text((128, bullet_y), "•", font=font(ARIAL_BOLD, 38), fill=WHITE)
        lines = fit_lines(draw, bullet, 780, bullet_font)
        draw_text_lines(draw, (180, bullet_y), lines, bullet_font, WHITE, 8)
        bullet_y += 110

    draw.rounded_rectangle((80, 1580, 1000, 1760), radius=46, fill=CHARCOAL_DARK)
    draw.text((120, 1628), "Rezultatas:", font=font(ARIAL_BOLD, 30), fill=ACCENT)
    result_lines = fit_lines(draw, slide["result"], 780, font(ARIAL_BOLD, 34))
    draw_text_lines(draw, (300, 1624), result_lines, font(ARIAL_BOLD, 34), WHITE, 8)

    draw_brand_footer(draw)
    return base.convert("RGB")


def render_cta(slide: dict) -> Image.Image:
    base = load_bg(slide["bg"], slide["mode"])
    draw = ImageDraw.Draw(base)

    draw_chip(draw, 80, 86, 230, 92, BEIGE_DARK, slide["step"], font(ARIAL_BOLD, 28))
    draw.text((80, 280), "Jeigu ieškote kokybiško darbo", font=font(ARIAL, 36), fill=WHITE_SOFT)

    draw.rounded_rectangle((80, 360, 1000, 920), radius=72, fill=BEIGE)
    title_lines = fit_lines(draw, slide["title"], 780, font(GEORGIA_BOLD, 72))
    y = 440
    for line in title_lines:
        draw.text((120, y), line, font=font(GEORGIA_BOLD, 72), fill=WHITE)
        y += 92
    lede_lines = fit_lines(draw, slide["lede"], 780, font(ARIAL, 34))
    draw_text_lines(draw, (124, 735), lede_lines[:3], font(ARIAL, 34), WHITE_SOFT, 8)

    draw.rounded_rectangle((80, 1100, 1000, 1580), radius=62, fill=CHARCOAL)
    draw.text((120, 1170), "Susisiekite:", font=font(ARIAL_BOLD, 32), fill=ACCENT)
    left_font = font(ARIAL_BOLD, 38)
    right_font = font(ARIAL, 34)
    ly = 1260
    ry = 1260
    for item in slide["contact_left"]:
        draw.text((120, ly), item, font=left_font if ly == 1260 else right_font, fill=WHITE)
        ly += 110
    for item in slide["contact_right"]:
        draw.text((600, ry), item, font=left_font if ry == 1260 else right_font, fill=WHITE)
        ry += 110

    draw.rounded_rectangle((80, 1630, 1000, 1770), radius=44, fill=CHARCOAL_DARK)
    draw.text((120, 1676), "Paminklas turėtų būti ilgaamžis sprendimas, ne papildomas rūpestis.", font=font(ARIAL_BOLD, 28), fill=WHITE)
    draw_brand_footer(draw)
    return base.convert("RGB")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    rendered: list[Image.Image] = []
    durations: list[int] = []

    for slide in SLIDES:
        if slide["mode"] == "intro":
            image = render_intro(slide)
        elif slide["mode"] == "cta":
            image = render_cta(slide)
        else:
            image = render_mistake(slide)
        out_path = OUTPUT_DIR / f"{slide['name']}.png"
        image.save(out_path)
        rendered.append(image)
        durations.append(slide["duration"])

    rendered[0].save(
        OUTPUT_DIR / "akmens-darbai-4-klaidos-preview.gif",
        save_all=True,
        append_images=rendered[1:],
        duration=durations,
        loop=0,
        optimize=False,
    )


if __name__ == "__main__":
    main()
