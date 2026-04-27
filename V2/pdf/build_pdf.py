from pathlib import Path
from shutil import copyfile
from textwrap import wrap

from reportlab.lib.colors import Color, HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "pdf" / "portfolio-gaspard-levchin-v2.pdf"
WEB_OUT = ROOT / "web" / "assets" / "portfolio-gaspard-levchin-v2.pdf"
BG_IMAGE = ROOT / "web" / "assets" / "levchin-background.jpg"

W, H = A4

INK = HexColor("#050505")
MUTED = Color(5 / 255, 5 / 255, 5 / 255, alpha=0.66)
FAINT = Color(5 / 255, 5 / 255, 5 / 255, alpha=0.14)
WARM = HexColor("#050505")
BG = HexColor("#f4efe7")
PANEL = HexColor("#efe8dc")


def set_alpha(c, value):
    try:
        c.setFillAlpha(value)
        c.setStrokeAlpha(value)
    except AttributeError:
        pass


def reset_alpha(c):
    set_alpha(c, 1)


def page_base(c):
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    set_alpha(c, 0.18)
    c.setFillColor(HexColor("#6f6255"))
    c.rect(42, 96, 2.2, H - 192, fill=1, stroke=0)
    set_alpha(c, 0.08)
    c.rect(W - 86, 84, 14, H - 168, fill=1, stroke=0)
    reset_alpha(c)


def cover_image(c):
    if not BG_IMAGE.exists():
        return
    img = ImageReader(str(BG_IMAGE))
    iw, ih = img.getSize()
    scale = max(W / iw, H / ih)
    dw, dh = iw * scale, ih * scale
    set_alpha(c, 0.12)
    c.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh, mask="auto")
    reset_alpha(c)
    set_alpha(c, 0.78)
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    reset_alpha(c)


def tracking_text(c, text, x, y, font="Helvetica", size=9, tracking=1.6):
    c.setFont(font, size)
    cursor = x
    for char in text:
        c.drawString(cursor, y, char)
        cursor += c.stringWidth(char, font, size) + tracking


def line(c, x1, y1, x2, y2, color=FAINT, width=0.6):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def paragraph(c, text, x, y, width, size=10.5, leading=17, color=MUTED, font="Helvetica"):
    c.setFillColor(color)
    c.setFont(font, size)
    words = text.split()
    rows = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if c.stringWidth(trial, font, size) <= width:
            current = trial
        else:
            if current:
                rows.append(current)
            current = word
    if current:
        rows.append(current)

    for row in rows:
        c.drawString(x, y, row)
        y -= leading
    return y


def heading(c, text, x, y, size=34, max_chars=18):
    c.setFillColor(INK)
    c.setFont("Helvetica", size)
    for row in wrap(text, width=max_chars):
        c.drawString(x, y, row)
        y -= size * 1.06
    return y


def kicker(c, index, label, x, y):
    c.setFillColor(WARM)
    tracking_text(c, index, x, y, "Helvetica-Bold", 7.5, 1.3)
    c.setFillColor(MUTED)
    tracking_text(c, label.upper(), x, y - 18, "Helvetica-Bold", 7.5, 1.3)


def cover(c):
    page_base(c)
    x = 62
    line(c, x, 620, x, 718, Color(5 / 255, 5 / 255, 5 / 255, alpha=0.36), 0.8)
    c.setFillColor(INK)
    tracking_text(c, "PORTFOLIO CREATIF / PARIS", x + 22, 704, "Helvetica-Bold", 8, 1.8)

    c.setFillColor(INK)
    c.setFont("Helvetica", 62)
    c.drawString(x + 20, 610, "GASPARD")
    c.drawString(x + 20, 548, "LEVCHIN")

    lead = (
        "Direction artistique, image et design & mode. Un regard précis pour "
        "construire des expériences visuelles haut de gamme, entre matière, "
        "intention et exigence."
    )
    paragraph(c, lead, x + 24, 495, 360, 11.5, 18, Color(5 / 255, 5 / 255, 5 / 255, alpha=0.78))

    c.setFillColor(PANEL)
    c.rect(x + 24, 260, 360, 86, fill=1, stroke=0)
    c.setFillColor(INK)
    tracking_text(c, "DIRECTION ARTISTIQUE  /  IMAGE  /  DESIGN & MODE", x + 44, 309, "Helvetica-Bold", 6.6, 1.1)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 9.2)
    c.drawString(x + 44, 285, "Version portfolio - V2 écru")

    line(c, x + 24, 160, W - 62, 160, Color(5 / 255, 5 / 255, 5 / 255, alpha=0.18))
    c.setFillColor(MUTED)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x + 24, 132, "GASPARDLEVCHIN.PRO@GMAIL.COM")
    c.drawString(x + 24, 112, "+33 7 67 08 10 20")
    c.drawString(x + 24, 92, "LINKEDIN.COM/IN/GASPARD-LEVCHIN")


def signature_page(c):
    page_base(c)
    kicker(c, "01", "Signature", 54, H - 92)
    y = heading(c, "Regard, matière et expérience client.", 190, H - 92, 33, 19)
    text = (
        "Doué d'un sens affûté du détail et de l'esthétique, j'allie rigueur "
        "et créativité au service d'une expérience client haut de gamme. Mon "
        "parcours relie l'image, le retail, la conception visuelle et la "
        "construction progressive d'une maison de design et de mode."
    )
    y = paragraph(c, text, 190, y - 16, 330, 10.5, 17)

    territories = [
        ("Direction artistique", "Moodboard, esquisse, conception visuelle."),
        ("Image", "Photographie argentique et numérique, caméra Sony, Blackmagic, RED."),
        ("Design & mode", "Lignes affirmées, matières brutes, culture mode et objet."),
        ("Retail haut de gamme", "Relation client, visual merchandising, gestion des stocks."),
    ]
    left = 54
    top = 388
    cell_w = (W - 108 - 14) / 2
    cell_h = 116
    for i, (title, copy) in enumerate(territories):
        col = i % 2
        row = i // 2
        x = left + col * (cell_w + 14)
        y0 = top - row * (cell_h + 14)
        c.setFillColor(PANEL)
        c.rect(x, y0 - cell_h, cell_w, cell_h, fill=1, stroke=0)
        line(c, x, y0, x + cell_w, y0, Color(5 / 255, 5 / 255, 5 / 255, alpha=0.28), 0.8)
        c.setFillColor(WARM)
        tracking_text(c, title.upper(), x + 18, y0 - 28, "Helvetica-Bold", 7, 1.2)
        paragraph(c, copy, x + 18, y0 - 56, cell_w - 36, 10.2, 15, INK)

    c.showPage()


def projects_page(c):
    page_base(c)
    kicker(c, "02", "Sélection", 54, H - 92)
    heading(c, "Projets et expériences sélectionnés.", 190, H - 92, 32, 20)

    projects = [
        ("01", "LEVCHIN, maison de design & mode", "Création d'entreprise / Paris 5e", "Construction d'un univers de marque guidé par l'équilibre entre forme, matière et intention.", "Avril 2024 - aujourd'hui"),
        ("02", "TVINTED DVRK", "Exposition photo / STAY ARTY", "Exposition photographique, agence STAY ARTY, Paris 20e.", "Mars / Avril 2024"),
        ("03", "L'Arche et le Château", "Théâtre / Compagnie Les Larrons", "Création d'images pour un projet théâtre à Bezons et Paris 17e.", "Février 2024"),
        ("04", "Des Fermes, Un Quartier", "Packshot commercial", "Photographie commerciale et packshot, Paris 20e.", "Mars 2024"),
        ("05", "Dîner du RCF", "Événementiel", "Captation photographique événementielle à l'Aéroclub de France.", "Octobre 2023"),
        ("06", "The Sausages", "Concert / Lyon", "Photographie de concert au Transbordeur.", "Juillet 2022"),
    ]

    y = 618
    for num, title, role, copy, date in projects:
        line(c, 54, y + 20, W - 54, y + 20, Color(5 / 255, 5 / 255, 5 / 255, alpha=0.14))
        c.setFillColor(WARM)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(54, y, num)
        c.setFillColor(MUTED)
        tracking_text(c, role.upper(), 104, y + 2, "Helvetica-Bold", 6.5, 1.0)
        c.setFillColor(INK)
        c.setFont("Helvetica", 18)
        c.drawString(104, y - 25, title)
        paragraph(c, copy, 104, y - 47, 300, 9.4, 14, MUTED)
        c.setFillColor(Color(5 / 255, 5 / 255, 5 / 255, alpha=0.52))
        c.setFont("Helvetica-Bold", 7.4)
        c.drawRightString(W - 54, y - 24, date.upper())
        y -= 86

    c.showPage()


def pathway_page(c):
    page_base(c)
    kicker(c, "03", "Parcours", 54, H - 92)
    heading(c, "Formation, outils et culture visuelle.", 190, H - 92, 32, 19)

    timeline = [
        ("Avril 2024 - aujourd'hui", "Création d'entreprise - design et mode", "Développement de la maison LEVCHIN, Paris 5e."),
        ("Octobre 2022 - 2024", "Vendeur polyvalent - Ideco Store", "Visual merchandising, relation client, gestion des stocks, Paris 10e."),
        ("Septembre 2023", "Commercial - Quycup & Blogo", "Maison & Objet, Villepinte."),
        ("2020 - 2022", "BTS audiovisuel, spécialité image", "EFCAM, Riom."),
        ("2017 - 2020", "Baccalauréat général littéraire anglais", "Lycée Kerraoul, Paimpol."),
    ]

    y = 594
    for date, title, copy in timeline:
        line(c, 54, y + 18, W - 54, y + 18, Color(5 / 255, 5 / 255, 5 / 255, alpha=0.13))
        c.setFillColor(WARM)
        tracking_text(c, date.upper(), 54, y, "Helvetica-Bold", 6.5, 1.0)
        c.setFillColor(INK)
        c.setFont("Helvetica", 15)
        c.drawString(228, y, title)
        paragraph(c, copy, 228, y - 20, 280, 9.2, 13, MUTED)
        y -= 64

    c.setFillColor(INK)
    c.setFont("Helvetica", 22)
    c.drawString(54, 238, "Outils")
    tools = ["Suite Adobe", "Blender", "DaVinci Resolve", "Instagram / TikTok", "Wix", "Anglais C1"]
    x = 54
    y = 204
    for tool in tools:
        c.setFillColor(PANEL)
        c.rect(x, y - 22, 150, 34, fill=1, stroke=0)
        c.setFillColor(MUTED)
        c.setFont("Helvetica-Bold", 7.2)
        c.drawString(x + 12, y - 2, tool.upper())
        x += 166
        if x > W - 190:
            x = 54
            y -= 48

    c.setFillColor(INK)
    c.setFont("Helvetica", 22)
    c.drawString(54, 92, "Contact")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 10)
    c.drawString(54, 68, "gaspardlevchin.pro@gmail.com   /   +33 7 67 08 10 20   /   Paris 5e")


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("Portfolio - Gaspard Levchin")
    cover(c)
    c.showPage()
    signature_page(c)
    projects_page(c)
    pathway_page(c)
    c.save()
    copyfile(OUT, WEB_OUT)
    print(OUT)


if __name__ == "__main__":
    build()
