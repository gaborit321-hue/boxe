# Boxe

Petite PWA pour suivre un forfait de 10 séances de boxe : compteur de rounds restants, historique complet, lien direct vers Google Calendar, et synchronisation vers un Google Sheet.

## Fichiers

- `index.html` — l'app elle-même
- `manifest.json` — déclaration PWA (nom, icônes, couleurs)
- `sw.js` — service worker : vide le cache et force le rechargement à chaque mise à jour
- `icon-192.png`, `icon-512.png` — icônes de l'app
- `icon-180.png` — icône pour l'écran d'accueil iOS

## Déployer sur GitHub Pages

1. Crée un nouveau repo GitHub, mets tous ces fichiers à la racine.
2. Va dans `Settings` → `Pages`.
3. Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Attends une minute, ton app sera accessible à `https://<ton-pseudo>.github.io/<nom-du-repo>/`.

## Installer sur ton téléphone

Ouvre l'URL GitHub Pages sur ton téléphone :
- **iPhone (Safari)** : icône de partage → « Sur l'écran d'accueil ».
- **Android (Chrome)** : menu ⋮ → « Installer l'application ».

## Synchronisation Google Sheet

L'URL de ton Google Apps Script est déjà écrite en dur dans `index.html` (constante `DEFAULT_SHEET_URL`). Pour la changer, modifie cette ligne ou utilise le champ « Réglages » dans l'app (stocké localement sur l'appareil).
