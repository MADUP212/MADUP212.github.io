---
layout: home
title: La Ronde 
---

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Ronde - Mes Projets</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <style>
        /* --- STYLES GÉNÉRAUX ET MISE EN PAGE --- */
        :root {
            --sidebar-width: 260px;
            --sidebar-bg: #f8f9fa;
            --accent-blue: #0d6efd;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #ffffff;
            color: #212529;
            margin: 0;
            overflow-x: hidden;
        }

        .menu-toggle {
            position: fixed;
            top: 15px;
            left: 15px;
            z-index: 1001;
            background: none;
            border: none;
            font-size: 1.5em;
            cursor: pointer;
            color: #343a40;
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: var(--sidebar-width);
            background-color: var(--sidebar-bg);
            border-right: 1px solid #dee2e6;
            z-index: 1000;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
        }

        .sidebar.open {
            transform: translateX(0);
        }

        .sidebar-header {
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid #dee2e6;
        }

        .sidebar-header h3 {
            margin: 0;
            color: #343a40;
        }

        .nav-list {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }

        .nav-list a {
            display: block;
            padding: 15px 20px;
            color: #343a40;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.2s, color 0.2s;
        }

        .nav-list a:hover {
            background-color: var(--accent-blue);
            color: white;
        }

        .main-content {
            padding: 20px;
            margin-left: 0;
            transition: margin-left 0.3s ease-in-out;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
        }

        .overlay.open {
            opacity: 1;
            visibility: visible;
        }
        
        /* --- STYLES SPÉCIFIQUES AUX CARTES DE PROJETS --- */
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
            border: 1px solid #dee2e6;
            border-left: 4px solid var(--accent-blue);
            margin-bottom: 15px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
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
            color: var(--accent-blue);
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
            color: #6c757d;
            font-size: 0.95em;
        }

        .project-date {
            font-size: 0.8em;
            color: #adb5bd;
            display: block;
            margin-top: 5px;
        }

        .project-link {
            background-color: var(--accent-blue);
            color: white;
            padding: 10px 18px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 500;
            white-space: nowrap;
            transition: background-color 0.2s ease;
        }

        .project-link:hover {
            background-color: #0b5ed7;
        }
    </style>
</head>
<body>

    <button class="menu-toggle" id="menuToggle" aria-label="Ouvrir le menu">
        <i class="fas fa-bars"></i>
    </button>

    <nav class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <h3>M.A.S. Dupuis</h3>
        </div>
        <ul class="nav-list">
            <li><a href="index.html">Présentation</a></li>
            <li><a href="parcours.html">Parcours académique</a></li>
            <li><a href="experience.html">Expérience Professionnelle</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="projets.html">La Ronde (Projets)</a></li>
        </ul>
    </nav>

    <main class="main-content" id="mainContent">
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
    </main>
    
    <div class="overlay" id="overlay"></div>

    <script>
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        function toggleMenu() {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        }

        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    </script>

</body>
</html>
