## Exercices sur les Tableaux en JavaScript

### Challenge 1 : Initialisation et Affichage

Écrivez un programme JavaScript qui initialise un tableau d'entiers avec des valeurs données et affiche ces valeurs. Par exemple, vous pouvez initialiser un tableau avec les valeurs `[1, 2, 3, 4, 5]` et afficher chaque valeur sur une nouvelle ligne.

<solution>
### Étapes de résolution

1.  **Création du tableau** : Initialiser un tableau avec des valeurs entre crochets `[]`.
2.  **Parcours** : Utiliser une boucle (`for` ou `for...of` ou `.forEach()`) pour parcourir chaque élément.
3.  **Affichage** : Afficher l'élément courant avec `console.log()`.

**Code :**
```javascript
// 1. Initialisation
let nombres = [1, 2, 3, 4, 5];

// 2. Parcours avec une boucle for classique
for (let i = 0; i < nombres.length; i++) {
    // 3. Affichage (nombres[i] accède à l'élément à l'index i)
    console.log(nombres[i]);
}

// Autre méthode (plus moderne) :
// for (let nombre of nombres) {
//     console.log(nombre);
// }
```
</solution>

### Challenge 2 : Saisie et Affichage des Éléments

Écrivez un programme JavaScript qui demande à l'utilisateur le nombre d'éléments d'un tableau, puis demande à l'utilisateur de saisir ces éléments. Affichez ensuite les éléments du tableau.

<solution>
### Étapes de résolution

1.  **Taille du tableau** : Demander combien d'éléments l'utilisateur souhaite entrer (`parseInt`).
2.  **Création du tableau vide** : Initialiser un tableau vide `[]`.
3.  **Boucle de saisie** : Créer une boucle qui tourne autant de fois que la taille choisie.
4.  **Ajout** : À chaque itération, demander un élément et l'ajouter au tableau avec la méthode `.push()`.
5.  **Affichage** : Afficher le tableau complet à la fin.

**Code :**
```javascript
// 1. Demander le nombre d'éléments
let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));

// 2. Initialiser un tableau vide
let monTableau = [];

// 3. Boucle de saisie
for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    // 4. Ajout de la valeur à la fin du tableau
    monTableau.push(valeur);
}

// 5. Affichage final
console.log("Voici votre tableau :");
console.log(monTableau);
```
</solution>

### Challenge 3 : Somme des Éléments

Écrivez un programme JavaScript qui calcule et affiche la somme des éléments d'un tableau d'entiers. Le programme doit demander le nombre d'éléments, puis les éléments du tableau, et afficher la somme totale.

### Challenge 4 : Trouver le Maximum

Écrivez un programme JavaScript qui trouve et affiche le plus grand élément dans un tableau d'entiers. Le programme doit demander le nombre d'éléments et les éléments du tableau.

### Challenge 5 : Trouver le Minimum

Écrivez un programme JavaScript qui trouve et affiche le plus petit élément dans un tableau d'entiers. Le programme doit demander le nombre d'éléments et les éléments du tableau.

### Challenge 6 : Multiplication des Éléments

Écrivez un programme JavaScript qui multiplie chaque élément d'un tableau d'entiers par un facteur donné et affiche le tableau résultant. Le programme doit demander le nombre d'éléments, les éléments du tableau, et le facteur de multiplication.

### Challenge 7 : Tableau en Ordre Croissant

Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un tableau d'entiers, puis affiche le tableau trié en ordre croissant sans utiliser de fonction de tri prédéfinie.

### Challenge 8 : Copie d'un Tableau

Écrivez un programme JavaScript qui copie les éléments d'un tableau d'entiers dans un autre tableau. Affichez les éléments du tableau original et du tableau copié pour vérifier que la copie est correcte.

### Challenge 9 : Inversion d'un Tableau

Écrivez un programme JavaScript qui inverse les éléments d'un tableau d'entiers. Par exemple, si le tableau est `[1, 2, 3, 4, 5]`, il doit devenir `[5, 4, 3, 2, 1]`. Affichez le tableau inversé.

### Challenge 10 : Rechercher un Élément

Écrivez un programme JavaScript qui recherche un élément spécifique dans un tableau d'entiers en utilisant une recherche linéaire. Le programme doit demander à l'utilisateur le nombre d'éléments, les éléments du tableau, et l'élément à rechercher, puis afficher si l'élément est présent ou non.

### Challenge 11 : Remplacer un Élément

Écrivez un programme JavaScript qui remplace toutes les occurrences d'une valeur spécifique dans un tableau d'entiers par une nouvelle valeur. Le programme doit demander à l'utilisateur le nombre d'éléments, les éléments du tableau, la valeur à remplacer, et la nouvelle valeur.

### Challenge 12 : Afficher les Éléments Paire

Écrivez un programme JavaScript qui affiche uniquement les éléments pairs d'un tableau d'entiers. Le programme doit demander le nombre d'éléments et les éléments du tableau.

### Challenge 13 : Afficher les Éléments Impairs

Écrivez un programme JavaScript qui affiche uniquement les éléments impairs d'un tableau d'entiers. Le programme doit demander le nombre d'éléments et les éléments du tableau.

### Challenge 14 : Calculer la Moyenne

Écrivez un programme JavaScript qui calcule la moyenne des éléments d'un tableau d'entiers. Le programme doit demander le nombre d'éléments, les éléments du tableau, puis afficher la moyenne.

### Challenge 15 : Fusion de Deux Tableaux

Écrivez un programme JavaScript qui fusionne deux tableaux d'entiers en un seul tableau. Le programme doit demander à l'utilisateur le nombre d'éléments pour chaque tableau, puis les éléments des deux tableaux, et afficher le tableau fusionné.

