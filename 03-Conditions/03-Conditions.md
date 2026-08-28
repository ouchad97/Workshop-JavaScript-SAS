## Exercices sur les Conditions

### Challenge 1 : Paire ou Impaire

Écrivez un programme qui demande un nombre et affiche si ce nombre est pair ou impair.

<solution>
### Étapes de résolution

1.  **Saisie** : Demander le nombre à l'utilisateur via `prompt()` et le convertir avec `parseInt()`.
2.  **Condition** : Un nombre est pair si le reste de sa division par 2 est égal à 0. On utilise l'opérateur modulo `%` pour cela.
3.  **Affichage** : Utiliser un bloc `if...else` pour afficher le résultat approprié.

**Code :**
```javascript
// 1. Demander le nombre
let nombre = parseInt(prompt("Entrez un nombre entier :"));

// 2 & 3. Vérifier la parité avec modulo
if (nombre % 2 === 0) {
    console.log(`Le nombre ${nombre} est pair.`);
} else {
    console.log(`Le nombre ${nombre} est impair.`);
}
```
</solution>

### Challenge 2 : Voyelle ou Non

Écrivez un programme JavaScript qui vérifie si un caractère saisi par l'utilisateur est une voyelle ou non en utilisant l'instruction `switch`.

<solution>
### Étapes de résolution

1.  **Saisie** : Demander une lettre à l'utilisateur.
2.  **Normalisation** : Pour éviter de vérifier les majuscules et minuscules séparément, on convertit la lettre saisie en minuscule avec `.toLowerCase()`.
3.  **Test avec `switch`** : On vérifie si la lettre correspond à l'un des cas (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`, `'y'`). Si oui, c'est une voyelle. Sinon (dans le `default`), c'est une consonne.

**Code :**
```javascript
// 1 et 2. Demander la lettre et forcer en minuscule
let lettre = prompt("Entrez une lettre :").toLowerCase();

// 3. Vérifier avec switch
switch (lettre) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log(`La lettre "${lettre}" est une voyelle.`);
        break;
    default:
        console.log(`La lettre "${lettre}" est une consonne (ou un autre caractère).`);
}
```
</solution>

### Challenge 3 : Somme de Deux Valeurs

Écrivez un programme JavaScript pour calculer la somme de deux valeurs entières données. Si les deux valeurs sont identiques, le programme doit renvoyer le triple de leur somme.

### Challenge 4 : Equation du Deuxième Degré

Écrivez un programme JavaScript qui permet de calculer les solutions possibles d’une équation du deuxième degré.

### Challenge 5 : Conversion d'Année

Écrivez un programme JavaScript piloté par menu pour convertir une année donnée en :
  - Mois
  - Jours
  - Heures
  - Minutes
  - Secondes

Pour plus de simplicité, n'incluez pas l'année bissextile (sauf si vous êtes courageux pour le faire). 1 an = 365 jours, 1 mois = 30 jours.

### Challenge 6 : Positif, Négatif ou Nul

Écrivez un programme pour vérifier si le nombre donné est positif, négatif ou nul. Si le nombre est inférieur à zéro, alors le nombre est négatif et si le nombre est supérieur à zéro, alors le nombre est positif. Si les deux conditions sont fausses, le nombre est égal à zéro.

### Challenge 7 : Alphabet Majuscule

Écrivez un programme pour vérifier si le caractère donné est un alphabet majuscule ou non en utilisant l'instruction conditionnelle `if-else`. Les lettres majuscules vont de 'A' à 'Z'. Les valeurs ASCII de 'A' et 'Z' sont respectivement 65 et 90. Si la valeur ASCII d'un caractère est comprise entre 65 et 90, il s'agit d'un alphabet majuscule.

### Challenge 8 : Mention Obtenue

Nous désirons afficher la mention obtenue par un élève en fonction de la moyenne de ses notes. S’il a une moyenne strictement inférieure à 10, il est recalé. S’il a une moyenne entre 10 (inclus) et 12, il obtient la mention passable. S’il a une moyenne entre 12 (inclus) et 14, il obtient la mention assez bien. S’il a une moyenne entre 14 (inclus) et 16, il obtient la mention bien. S’il a une moyenne supérieure à 16 (inclus) il obtient la mention très bien. Écrire les instructions nécessaires.

### Challenge 9 : Vérification d'Alphabet

Écrivez un programme JavaScript qui lit un caractère et détermine s'il fait partie de l'alphabet ou non. Et s'il l'est, indiquez s'il est minuscule ou majuscule.

### Challenge 10 : Formatage de la Date

Écrivez un programme JavaScript qui lit une date au format `15/09/2012` et l'affiche sous le format suivant : `15-Septembre-2012`.

### Challenge 11 : Jour de la Semaine

Écrivez un programme JavaScript qui affiche aléatoirement un des jours de la semaine.

### Challenge 12 : Comparaison d'Instants

Écrivez un programme JavaScript qui lit deux instants dans le format `HH:MM:SS` et affiche un des messages suivants :
  - Le premier instant vient avant le deuxième ;
  - Le deuxième instant vient avant le premier ;
  - Il s'agit du même instant.

### Challenge 13 : Point sur un Segment

Écrivez un programme JavaScript qui lit les coordonnées des deux extrémités d'un segment, puis les coordonnées d'un point dans le plan et indique si ce dernier se trouve ou non sur le segment.
