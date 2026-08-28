## Exercices sur les Chaînes de Caractères en JavaScript

### Challenge 1 : Affichage d'une Chaîne

Écrivez un programme JavaScript qui lit une chaîne de caractères entrée par l'utilisateur et l'affiche à l'écran.

<solution>
### Étapes de résolution

1.  **Saisie** : Utiliser `prompt()` pour demander à l'utilisateur d'entrer un texte.
2.  **Affichage** : Utiliser `console.log()` ou `alert()` pour l'afficher.

**Code :**
```javascript
// 1. Lire la chaîne
let texte = prompt("Entrez un texte ou une phrase :");

// 2. L'afficher à l'écran
console.log("Vous avez tapé : " + texte);
```
</solution>

### Challenge 2 : Longueur de la Chaîne

Écrivez un programme JavaScript qui calcule et affiche la longueur d'une chaîne de caractères sans utiliser la propriété `length`.

<solution>
### Étapes de résolution

1.  **Saisie** : Lire la chaîne de caractères.
2.  **Parcours de la chaîne** : En JavaScript, une chaîne de caractères peut être parcourue comme un tableau. On utilise une boucle `for...of` (ou `while` avec index) pour parcourir chaque caractère un par un.
3.  **Comptage** : À chaque itération (à chaque caractère rencontré), on incrémente un compteur.
4.  **Affichage** : Afficher la valeur finale du compteur.

**Code :**
```javascript
let texte = prompt("Entrez une chaîne :");
let compteur = 0;

// La boucle for...of parcourt chaque caractère de la chaîne
for (let caractere of texte) {
    compteur++;
}

console.log(`La longueur de "${texte}" est de ${compteur} caractères.`);
```
</solution>

### Challenge 3 : Concaténation de Chaînes

Écrivez un programme JavaScript qui lit deux chaînes de caractères et les concatène en une seule chaîne. Affichez la chaîne résultante.

### Challenge 4 : Comparaison de Chaînes

Écrivez un programme JavaScript qui lit deux chaînes de caractères et compare si elles sont égales ou non. Affichez un message indiquant si les chaînes sont égales ou différentes.

### Challenge 5 : Inversion de Chaîne

Écrivez un programme JavaScript qui lit une chaîne de caractères et affiche la chaîne inversée. Par exemple, si la chaîne est "abcd", le programme doit afficher "dcba".

### Challenge 6 : Compte des Occurrences d'un Caractère

Écrivez un programme JavaScript qui lit une chaîne de caractères et un caractère, puis compte et affiche combien de fois le caractère apparaît dans la chaîne.

### Challenge 7 : Conversion en Majuscules

Écrivez un programme JavaScript qui lit une chaîne de caractères et convertit tous les caractères en majuscules. Affichez la chaîne modifiée.

### Challenge 8 : Conversion en Minuscules

Écrivez un programme JavaScript qui lit une chaîne de caractères et convertit tous les caractères en minuscules. Affichez la chaîne modifiée.

### Challenge 9 : Suppression des Espaces

Écrivez un programme JavaScript qui lit une chaîne de caractères et supprime tous les espaces. Affichez la chaîne résultante.

### Challenge 10 : Trouver un Sous-String

Écrivez un programme JavaScript qui lit une chaîne de caractères principale et une sous-chaîne, puis vérifie si la sous-chaîne est présente dans la chaîne principale. Affichez un message indiquant si la sous-chaîne est trouvée ou non.
