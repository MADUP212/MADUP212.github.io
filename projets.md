---
title: La Ronde
layout: default
---

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bric-à-brac</title>
    <!-- Ce code utilise des styles simples qui devraient bien s'intégrer à votre site. -->
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #fdfdfd;
            margin: 0;
            padding: 2rem;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
            margin-bottom: 1rem; /* Espace réduit pour le sous-titre */
            font-size: 2.5rem;
        }
        .subtitle {
            text-align: center;
            margin-top: 0;
            margin-bottom: 2.5rem;
            color: #777;
            font-size: 0.9rem;
        }
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
        .project-card {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 1.5rem;
            background-color: #ffffff;
            transition: transform 0.2s, box-shadow 0.2s;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
        }
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .project-card h2 {
            margin-top: 0;
            font-size: 1.25rem;
        }
        .project-card p {
            flex-grow: 1;
            color: #666;
            margin-bottom: 1.5rem;
        }
        .project-card .link {
            display: inline-block;
            background-color: #333;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            text-decoration: none;
            text-align: center;
            font-weight: bold;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 2rem;
            color: #555;
            text-decoration: none;
        }
    </style>
</head>
<body>

    <div class="container">
        <a href="index.html" class="back-link">&larr; Retour à l'accueil</a>
        
        <h1>Bric-à-brac</h1>
        <p class="subtitle">Quelques projets codés avec l'aide de Gemini Pro.</p>

        <div class="projects-grid">
            <!-- Projet Calendrier Agile -->
            <a href="dashboard_sauvegarde.html" class="project-card">
                <h2>🗓️&nbsp; Calendrier de Rédaction Agile</h2>
                <p>Un tableau de bord interactif pour planifier et suivre la rédaction d'un projet académique avec la méthode AGILE.</p>
                <span class="link">Consulter</span>
            </a>
            
            <!-- Projet Tic-Tac-Toe -->
            <a href="tictactoe.html" class="project-card">
                <h2>#️⃣&nbsp; Jeu de Tic-Tac-Toe</h2>
                <p>Le jeu classique du morpion, simple et amusant, jouable directement dans le navigateur.</p>
                <span class="link">Jouer</span>
            </a>

            <!-- Projet Flappy -->
            <a href="flappy.html" class="project-card">
                <h2>🐦&nbsp; Jeu Flappy</h2>
                <p>Un clone du célèbre et addictif jeu mobile. Testez vos réflexes !</p>
                <span class="link">Jouer</span>
            </a>

            <!-- Projet Calculateur -->
            <a href="boring.html" class="project-card">
                <h2>🧮&nbsp; Calculateur Simple</h2>
                <p>Un outil pratique pour réaliser rapidement les opérations mathématiques de base.</p>
                <span class="link">Utiliser</span>
            </a>
        </div>
    </div>

</body>
</html>


