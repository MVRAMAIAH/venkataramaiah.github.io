import fitz  # PyMuPDF
import os

pdf_dir = "certificates"
output_dir = "certificates/thumbnails"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, filename)
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)  # load first page
        pix = page.get_pixmap(matrix=fitz.Matrix(0.5, 0.5)) # scale down slightly for thumbnail
        img_name = filename[:-4] + ".jpg"
        pix.save(os.path.join(output_dir, img_name))
        print(f"Saved {img_name}")
