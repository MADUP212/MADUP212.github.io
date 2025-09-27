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
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #e9ecef; /* Un gris clair pour le fond */
            color: #333;
            margin: 0;
            padding: 20px;
        }

        /* Conteneur principal pour centrer le contenu */
        .container {
            max-width: 700px;
            margin: 0 auto;
        }

        h2 {
            text-align: center;
            color: #343a40;
            margin-bottom: 30px;
        }
        
        /* Style général de la liste de projets */
        .project-list {
            list-style: none;
            padding: 0;
        }

        /* Style de chaque carte de projet */
        .project-card {
            background-color: #ffffff; /* Fond blanc pour les cartes */
            border-left: 5px solid #007bff; /* Bordure bleue distinctive */
            margin-bottom: 15px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }

        /* Style de l'icône */
        .project-icon {
            font-size: 2em;
            color: #007bff;
            margin-right: 20px;
            width: 40px; /* Largeur fixe pour l'alignement */
            text-align: center;
        }

        /* Conteneur pour le titre et la description */
        .project-details {
            flex-grow: 1; /* Prend l'espace disponible */
        }

        .project-details h3 {
            margin: 0 0 5px 0;
            color: #343a40;
        }

        .project-details p {
            margin: 0;
            color: #6c757d;
            font-size: 0.9em;
        }

        .project-date {
            font-size: 0.8em;
            color: #adb5bd;
            display: block;
            margin-top: 5px;
        }

        /* Style du bouton/lien pour jouer/voir */
        .project-link {
            background-color: #007bff;
            color: white;
            padding: 10px 18px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            white-space: nowrap; /* Empêche le texte de se casser */
            transition: background-color 0.2s ease;
        }

        .project-link:hover {
            background-color: #0056b3;
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
