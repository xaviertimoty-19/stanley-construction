---
name: project-security
description: "Guidelines for keeping the codebase secure, optimized, and free of technical debt, including secrets handling, inputs validation, and dependency check."
---

# Project Security & Maintenance Standards

Guidelines for keeping the codebase secure, optimized, and free of technical debt.

## 🚨 Règles de Sécurité Critiques
- **Secrets & Clés API :** Interdiction absolue de coder en dur des clés API, des tokens ou des identifiants (Firebase configs, DB uris, etc.). Toujours forcer l'usage des variables d'environnement (`.env`).
- **Input Validation :** Tous les inputs utilisateurs, paramètres d'URL ou corps de requêtes doivent être validés et nettoyés pour éviter les injections (SQL/NoSQL) et les failles XSS.
- **Gestion des Dépendances :** Vérifier que chaque nouveau package installé est stable et ne comporte pas de vulnérabilités connues.

## 🛠️ Protocole de Maintenance
- **Refactoring :** Diviser les fonctions de plus de 50 lignes en sous-composants ou fonctions utilitaires isolées et testables.
- **Dette Technique :** Lors de chaque modification de fichier, supprimer le code mort, les logs de debug inutile et s'assurer du typage strict.
