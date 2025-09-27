---
layout: home
title: La Ronde 
---

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mes Projets</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <style>
        /* --- NOUVEAUX STYLES AJUSTÉS --- */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #ffffff; /* Fond blanc uni */
            color: #212529; /* Noir doux pour le texte */
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 700px;
            margin: 0 auto;
        }

        h2 {
            text-align: center;
            color: #343a40;
            margin-top: 30px;
            margin-bottom: 40px;
            font-weight: 500;
        }
        
        .project-list {
            list-style: none;
            padding: 0;
        }

        .project-card {
            background-color: #ffffff;
            border: 1px solid #dee2e6; /* Bordure grise légère */
            border-left: 4px solid #0d6efd; /* Accent bleu correspondant à votre site */
            margin-bottom: 15px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05); /* Ombre très subtile */
            display: flex;
            align-items: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .project-icon {
            font-size: 1.8em;
            color: #0d6efd; /* Accent bleu */
            margin-right: 20px;
            width: 40px;
            text-align: center;
        }

        .project-details {
            flex-grow: 1;
        }

        .project-details h3 {
            margin: 0 0 5px 0;
            color: #343a40;
            font-weight: 600;
        }

        .project-details p {
            margin: 0;
            color: #6c757d; /* Gris pour la description */
            font-size: 0.95em;
        }

        .project-date {
            font-size: 0.8em;
            color: #adb5bd;
            display: block;
            margin-top: 5px;
        }

        .project-link {
            background-color: #0d6efd; /* Accent bleu */
            color: white;
            padding: 10px 18px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 500;
            white-space: nowrap;
            transition: background-color 0.2s ease;
        }

        .project-link:hover {
            background-color: #0b5ed7; /* Bleu un peu plus foncé au survol */
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>Mes Projets</h2>

        <ul class="project-list">
        
            <li class="project-card">
                <div class="project-icon"><i class="fas fa-hashtag"></i></div>
                <div class="project-details">
                    <h3>Tic-Tac-Toe</h3>
                    <p>Un jeu de Morpion contre l'ordinateur.</p>
                    <span class="project-date">27 septembre 2025</span>
                </div>
                <a href="https://madup212.github.io/tictactoe.html" class="project-link">Jouer</a>
            </li>

            <li class="project-card">
                <div class="project-icon"><i class="fas fa-kiwi-bird"></i></div>
                <div class="project-details">
                    <h3>Flappy Bird</h3>
                    <p>Un clone du célèbre jeu Flappy Bird.</p>
                    <span class="project-date">27 septembre 2025</span>
                </div>
                <a href="https://madup212.github.io/flappy.html" class="project-link">Jouer</a>
            </li>
            
            <li class="project-card">
                <div class="project-icon"><i class="fas fa-clock"></i></div>
                <div class="project-details">
                    <h3>Calculateur de Salaire</h3>
                    <p>Voir son salaire s'accumuler en temps réel.</p>
                    <span class="project-date">27 septembre 2025</span>
                </div>
                <a href="https://madup212.github.io/boring.html" class="project-link">Calculer</a>
            </li>

            <li class="project-card">
                <div class="project-icon"><i class="fas fa-calendar-alt"></i></div>
                <div class="project-details">
                    <h3>Planificateur Agile</h3>
                    <p>Un calendrier de 4 mois pour une synthèse (par Gemini Pro).</p>
                    <span class="project-date">26 septembre 2026</span>
                </div>
                <a href="Calendrier_Agile.html" class="project-link">Voir</a>
            </li>

        </ul>
    </div>

</body>
</html>
