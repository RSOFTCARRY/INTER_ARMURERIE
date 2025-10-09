# ![Logo](public/logo.png) Inter Armureries

[![Laravel](https://img.shields.io/badge/Laravel-10-orange?logo=laravel)](https://laravel.com/)
[![PHP](https://img.shields.io/badge/PHP-8.2-blue?logo=php)](https://www.php.net/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-teal?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](#)

**Inter Armureries** est une plateforme web sécurisée pour gérer et consulter les articles d’armureries, développée avec Laravel, Blade et Tailwind CSS.

---

## 📑 Table des matières

- [Aperçu](#📸-apercu)  
- [Fonctionnalités](#🚀-fonctionnalités)  
- [Stack technique](#🛠-stack-technique)  
- [Installation](#⚙-installation)  
- [Structure du projet](#🗂-structure-du-projet)  
- [Sécurité](#🔐-sécurité)  
- [Contribution](#🤝-contribution)  
- [Contact](#📞-contact)  
- [Démo](#💻-démo)

---

## 📸 Aperçu

![Page d'accueil](public/screenshots/home.png)  
*Page d'accueil avec articles et accès aux favoris*

![Dashboard utilisateur](public/screenshots/dashboard.png)  
*Dashboard pour gestion des articles et favoris*


![Favoris](public/screenshots/favoris.gif)

🚀 Fonctionnalités

Authentification sécurisée via Laravel Breeze

Gestion des articles : création, modification, suppression

Consultation et recherche d’articles

Ajout et gestion des favoris

Vérification SIRET (14 chiffres) et SIA

Sécurité : CSRF, protection contre les injections SQL, middleware auth

Architecture MVC maintenable

🛠 Stack technique
Composant	Technologie
Backend	Laravel 10 (PHP 8.2)
Frontend	Blade + Tailwind CSS
Base de données	SQLite (local) / MySQL
Authentification	Laravel Breeze
Architecture	MVC
⚙ Installation

Cloner le projet

git clone https://github.com/votre-utilisateur/inter-armureries.git
cd inter-armureries


Installer les dépendances

composer install
npm install
npm run dev


Configurer l’environnement

cp .env.example .env
php artisan key:generate


Configurer la base SQLite ou MySQL dans .env.

Lancer les migrations et seeders

php artisan migrate --seed


Démarrer le serveur

php artisan serve


Accéder au site : http://127.0.0.1:8000

🗂 Structure du projet
app/
├── Http/
│   ├── Controllers/
│   └── Middleware/
├── Models/
resources/
├── views/
│   ├── layouts/
│   ├── auth/
│   └── user/
database/
├── migrations/
├── seeders/
public/
├── css/
├── screenshots/

🔐 Sécurité

Middleware auth pour accès restreint

CSRF via @csrf dans tous les formulaires

Validation SIRET et SIA

Protection contre l’injection SQL via Eloquent et Query Builder

🤝 Contribution

Forker le projet

Créer une branche : git checkout -b feature/ma-fonctionnalité

Commit : git commit -m "Ajouter fonctionnalité X"

Push : git push origin feature/ma-fonctionnalité

Ouvrir une Pull Request

💻 Démo

Démo locale : http://127.0.0.1:8000

(Optionnel) Démo en ligne sur un serveur ou Netlify/Vercel si disponible

📞 Contact

Nom : ROSS MANUFACTURE

Email : contact@interarmureries.com

Téléphone : +33 6 62 60 74 00

SIRET : 123 xxxxxxxxxxx 010

SIA : 9xxxxxx21

Inter Armureries – Gestion sécurisée et complète des articles pour armureries.
