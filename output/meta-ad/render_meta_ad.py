from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path("/Users/arvydas/Desktop/Websites/akmens-dizainas-v3")
OUTPUT_DIR = ROOT / "output" / "meta-ad"
BG_PATH = ROOT / "src" / "assets" / "service-paminklai.jpg"
OUT_PATH = OUTPUT_DIR / "akmens-darbai-4-klaidos-meta-story.png"

WIDTH = 1080
HEIGHT = 1920

BEIGE = "#C6A676"
BEIGE_DARK = "#B89461"
CHARCOAL = "#52555C"
CHARCOAL_SOFT = "#65686F"
WHITE = "#F7F4EE"
WHITE_SOFT = "#ECE6DC"

GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, max_width: int, text_font: ImageFont.FreeTypeFont) -> list[str]:
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


def draw_badge(draw: ImageDraw.ImageDraw, xy: tuple[int, int, int, int], label: str, fill: str) -> None:
    draw.rounded_rectangle(xy, radius=42, fill=fill)
    badge_font = font(GEORGIA_BOLD, 44)
    bbox = draw.textbbox((0, 0), label, font=badge_font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x1, y1, x2, y2 = xy
    draw.text(
        ((x1 + x2 - tw) / 2, (y1 + y2 - th) / 2 - 7),
        label,
        font=badge_font,
        fill=WHITE,
    )


def draw_card(
    draw: ImageDraw.ImageDraw,
    top: int,
    badge_label: str,
    title: str,
    body: str,
    height: int = 198,
) -> int:
    left = 70
    right = WIDTH - 70
    radius = 44
    draw.rounded_rectangle((left, top, right, top + height), radius=radius, fill=CHARCOAL)

    draw_badge(draw, (left + 26, top + 24, left + 146, top + 110), badge_label, CHARCOAL_SOFT)

    title_font = font(ARIAL_BOLD, 37)
    body_font = font(ARIAL, 28)
    title_x = left + 172
    title_y = top + 28
    draw.text((title_x, title_y), title, font=title_font, fill=WHITE)

    body_lines = wrap_text(draw, body, right - title_x - 34, body_font)
    line_y = top + 83
    for line in body_lines[:3]:
        draw.text((title_x, line_y), line, font=body_font, fill=WHITE_SOFT)
        line_y += 35

    return top + height


def draw_cta(draw: ImageDraw.ImageDraw) -> None:
    panel = (70, 1650, WIDTH - 70, 1845)
    draw.rounded_rectangle(panel, radius=46, fill=BEIGE)
    title_font = font(ARIAL_BOLD, 40)
    body_font = font(ARIAL, 28)
    small_font = font(ARIAL_BOLD, 24)

    draw.text((110, 1688), "Norite ilgaamžio ir tvarkingo sprendimo?", font=title_font, fill=WHITE)
    draw.text((110, 1746), "Kreipkitės į Akmens darbai", font=body_font, fill=WHITE)
    draw.text((110, 1798), "Rungos g. 8, Elektrėnai", font=small_font, fill=WHITE)

    draw.text((662, 1746), "+370 602 38031", font=body_font, fill=WHITE)
    draw.text((662, 1798), "www.akmensdarbai.lt", font=small_font, fill=WHITE)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    bg = Image.open(BG_PATH).convert("RGB")
    crop = bg.crop((236, 0, 844, 1080))
    bg = crop.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    odraw.rectangle((0, 0, WIDTH, HEIGHT), fill=(18, 16, 14, 68))
    odraw.rectangle((0, 0, WIDTH, 520), fill=(16, 14, 11, 88))
    odraw.rectangle((0, 1320, WIDTH, HEIGHT), fill=(13, 12, 12, 120))
    overlay = overlay.filter(ImageFilter.GaussianBlur(0.5))
    base = Image.alpha_composite(bg.convert("RGBA"), overlay)

    draw = ImageDraw.Draw(base)

    # Header
    draw_badge(draw, (70, 82, 206, 178), "(04)", BEIGE_DARK)
    eyebrow_font = font(ARIAL_BOLD, 27)
    title_font = font(GEORGIA_BOLD, 84)
    sub_font = font(ARIAL, 31)

    draw.text((240, 97), "Meta reklama", font=eyebrow_font, fill=WHITE_SOFT)

    title_box = (70, 202, WIDTH - 70, 530)
    draw.rounded_rectangle(title_box, radius=58, fill=BEIGE)
    draw.text((112, 236), "4 klaidos", font=title_font, fill=WHITE)
    draw.text((112, 325), "renkantis", font=title_font, fill=WHITE)
    draw.text((112, 414), "paminklą", font=title_font, fill=WHITE)
    draw.text((116, 485), "Kurios vėliau kainuoja daugiau nei atrodė pradžioje", font=sub_font, fill=WHITE_SOFT)

    # Cards
    card_top = 602
    card_top = draw_card(
        draw,
        card_top,
        "01",
        "Nepasirinkite pigiausio akmens vien dėl kainos",
        "Kiniškas ar indiškas akmuo gali greičiau blukti, sugerti drėgmę ir prasčiau atlaikyti mūsų klimatą.",
        214,
    )
    card_top += 26
    card_top = draw_card(
        draw,
        card_top,
        "02",
        "Venkite tarpininkų be savo dirbtuvių",
        "Be nuosavų dirbtuvių dažnai mokate daugiau ir gaunate mažiau lankstumo paskutinėms korekcijoms.",
        196,
    )
    card_top += 26
    card_top = draw_card(
        draw,
        card_top,
        "03",
        "Netaupykite ant įrengimo darbų",
        "Prastas pagrindas ar nesutvarkytas gruntas vėliau gali lemti sėdimą, pasvirimą ar plyšius.",
        196,
    )
    card_top += 26
    draw_card(
        draw,
        card_top,
        "04",
        "Nepirkite be konsultacijos ir brėžinio",
        "Brėžinys padeda įvertinti proporcijas ir iš anksto suprasti, kaip paminklas atrodys konkrečioje kapavietėje.",
        212,
    )

    draw_cta(draw)

    base.save(OUT_PATH)


if __name__ == "__main__":
    main()
