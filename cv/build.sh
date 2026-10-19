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
rm -f ./*.aux ./*.log ./*.out ./cv_fr.pdf ./cv_en.pdf
# Nouvelle adresse à chaque compilation (?v=date) : sinon les téléphones
# ressortent un ancien PDF gardé en cache sous le même nom.
v=$(date +%Y%m%d%H%M)
sed -i.bak -E "s/(cv_(fr|en)_2026\.pdf)(\?v=[0-9]+)?\"/\1?v=${v}\"/g" ../index.html ../fr/index.html
rm -f ../index.html.bak ../fr/index.html.bak
echo "CV FR et EN régénérés dans assets/ (liens : ?v=${v})."
