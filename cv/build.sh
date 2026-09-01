#!/usr/bin/env bash
# Compile les CV (FR et EN) et les copie dans assets/.
# Requiert xelatex (texlive-xetex) et la police TeX Gyre Pagella.
set -euo pipefail
cd "$(dirname "$0")"
for lang in fr en; do
  xelatex -interaction=nonstopmode "cv_${lang}.tex" >/dev/null
  xelatex -interaction=nonstopmode "cv_${lang}.tex" >/dev/null
  cp "cv_${lang}.pdf" "../assets/cv_${lang}_2026.pdf"
done
rm -f ./*.aux ./*.log ./*.out
echo "CV FR et EN régénérés dans assets/."
