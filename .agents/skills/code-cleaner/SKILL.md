---
name: code-cleaner
description: Instructions and guidelines for cleaning, refactoring, and optimizing code (eliminating dead code, removing scaffolding logs, and optimizing architecture).
---

# Code Janitor & Refactoring Skill

## 🧹 Objectifs de Nettoyage Prioritaires
1. **Élimination du Code Mort :** Supprimer toutes les variables déclarées mais inutilisées, les fonctions fantômes, et les imports obsolètes.
2. **Retrait des Scaffolding Logs :** Retirer systématiquement les `console.log`, `print` ou commentaires de débogage temporaires laissés pendant la phase de dev.
3. **Optimisation des Conditions :** Simplifier les structures conditionnelles lourdes en utilisant des clauses de garde (early returns).

## 🗜️ Allègement & Architecture
- **Principe DRY (Don't Repeat Yourself) :** Si un même bloc de logique ou de calcul apparaît plus de deux fois, l'extraire dans une fonction utilitaire ou un helper réutilisable.
- **Taille des Fonctions :** Découper toute fonction ou composant dépassant 40 lignes en sous-unités logiques isolées.
- **Formatage & Cohérence :** Standardiser les indentations, supprimer les sauts de ligne doubles inutiles, et harmoniser le nommage des variables (camelCase ou snake_case selon le projet).
