# Sources du CV

Les PDF publiés (`assets/cv_fr_2026.pdf` et `assets/cv_en_2026.pdf`) sont
générés à partir de ces sources LaTeX.

| Fichier | Rôle |
| --- | --- |
| `cvstyle.sty` | Mise en page commune (Palatino, colonne de dates, filets de section) |
| `cv_fr.tex` | Contenu de la version française |
| `cv_en.tex` | Contenu de la version anglaise |
| `build.sh` | Compile les deux CV et les copie dans `assets/` |

## Compiler

```bash
./cv/build.sh
```

Dépendances : `xelatex` (paquet `texlive-xetex`) et la police **TeX Gyre
Pagella** (`texlive-fonts-recommended` ou `fonts-texgyre`).

Le script met aussi à jour le numéro de version des liens du CV dans
`index.html` et `fr/index.html` (`?v=AAAAMMJJ`). Sans ce numéro, les téléphones
peuvent continuer d'afficher un ancien PDF gardé en cache sous la même adresse.

Toute modification du CV doit passer par ces `.tex` — les PDF de `assets/` ne
sont qu'un produit de compilation.
