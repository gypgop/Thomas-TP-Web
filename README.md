# Not So Dating Simulator

Jeu narratif en 2D réalisé en HTML, CSS et JavaScript. Le joueur explore plusieurs décors, se déplace avec le clavier, interagit avec des personnages et progresse grâce à des dialogues à choix multiples.

## Présentation

Le dépôt contient un menu principal et trois parcours :
- **Niveau 1 — Invitation** : discuter avec un personnage à la maison, lui proposer une sortie, puis rejoindre un café ou un restaurant.
- **Niveau 2 — Café** : parcours autonome centré sur une visite au café et une commande auprès du serveur.
- **Niveau 3 — Restaurant** : parcours autonome avec une phase de préparation (choix d'une tenue), puis déplacement vers le restaurant et réservation.

Le parcours du niveau 1 relie également les scènes de maison, d'extérieur, de café et de restaurant.

## Lancer le jeu

Aucune installation de dépendance n'est nécessaire.
1. Cloner ou télécharger le dépôt.
2. Ouvrir le dossier du projet.
3. Lancer `index.html` dans un navigateur.

Si le navigateur bloque certaines ressources lors de l'ouverture directe du fichier, lancer un serveur HTTP local depuis la racine du projet, par exemple :

```bash
python -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Commandes

| Touche | Action |
| --- | --- |
| Z | Se déplacer vers le haut |
| Q | Se déplacer vers la gauche |
| S | Se déplacer vers le bas |
| D | Se déplacer vers la droite |
| Espace | Interagir avec un personnage, un objet ou une sortie |

Les dialogues et leurs réponses sont affichés dans la page, autour de la zone de jeu.

## Arbre de navigation

### Menu principal

```text
index.html
├── Niveau 1 — Invitation
│   └── hmtl/level1.html
├── Niveau 2 — Café (parcours autonome)
│   └── hmtl-level-2/level1.html
└── Niveau 3 — Restaurant (préparation + parcours)
    └── hmtl-level-3/level1.html
```

### Parcours détaillé du niveau 1

```text
hmtl/level1.html (Maison)
    │ sortie
    ▼
hmtl/level1.1.html (Extérieur)
    │ sortie
    ▼
hmtl/level1.1Bis.html (Choix de destination)
    ├── Café ───────► hmtl/level1.3.html
    │                    │ sortie
    │                    └──────────► hmtl/level1.1Bis.html
    │
    └── Restaurant ─► hmtl/level1.2.html
                         │ réservation terminée
                         └──────────► retour vers le menu
```

Depuis l'extérieur, le joueur peut aussi choisir de retourner à la maison. Dans les scènes de café et de restaurant, l'interaction avec le serveur déclenche les dialogues correspondants.

> Les fichiers du niveau 2 et du niveau 3 reprennent une partie de cette structure dans des dossiers séparés. Le niveau 3 ajoute le choix d'une tenue, conservé dans `sessionStorage`.

## Organisation du projet

| Dossier / fichier | Rôle |
| --- | --- |
| `index.html` | Menu principal et accès aux trois parcours |
| `hmtl/` | Pages HTML du parcours Invitation |
| `hmtl-level-2/` | Pages HTML du parcours Café autonome |
| `hmtl-level-3/` | Pages HTML du parcours Restaurant / préparation |
| `js/` | Logique du parcours Invitation : déplacements, dialogues, café, réservation et transitions |
| `js-level-2/` | Scripts du parcours Café autonome |
| `js-level-3/` | Scripts du parcours Restaurant et gestion des tenues |
| `css/` | Feuilles de style des menus et scènes |
| `img/` | Décors, personnages, sprites et illustrations |
| `sound/` | Ressources audio, dont la musique de fond |

**Remarque :** le dossier s'appelle volontairement `hmtl` dans le dépôt (et non `html`). Les liens et chemins actuels utilisent cette orthographe.

## Fonctionnement technique

- Les scènes de jeu utilisent un élément HTML `<canvas>` de 1300 × 1050 pixels.
- JavaScript dessine les décors et les sprites, lit les touches du clavier et met à jour la position du joueur.
- Des hitboxes rectangulaires empêchent le joueur de traverser certains objets et éléments du décor.
- `requestAnimationFrame()` exécute la boucle de mise à jour et de rendu.
- Les dialogues modifient le texte des éléments `#dialogue`, `#reponse1`, `#reponse2` et `#reponse3`.
- Les fonctions de transition (`tolevel1`, `tolevel1_1`, `tolevel1_x`) utilisent les attributs `data-*` du canvas pour déterminer la page suivante.
- Le niveau 3 mémorise la tenue sélectionnée avec `sessionStorage`.

## Points d'attention

- Le projet ne comporte pas de système de build ni de gestionnaire de dépendances identifié.
- Certains noms de fichiers et libellés contiennent des fautes ou des variantes historiques ; conserver les chemins existants lors des modifications.
- Les niveaux 2 et 3 sont des parcours séparés du scénario du niveau 1, même si leurs scènes et scripts partagent des concepts.